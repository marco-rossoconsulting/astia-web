/**
 * Rising Particles — raw WebGL.
 *
 * Same hand-written GLSL as the React Bits component, mounted directly on a
 * canvas instead of through three.js + @react-three/fiber. Those two libraries
 * were only acting as a harness for a single full-screen quad, and cost ~880 KB;
 * this does the same job in a few KB.
 */

export interface RisingParticlesOptions {
  speed?: number;
  count?: number;
  minSize?: number;
  maxSize?: number;
  spread?: number;
  sway?: number;
  swayRate?: number;
  depth?: number;
  coreSize?: number;
  coreSoftness?: number;
  glow?: number;
  glowFalloff?: number;
  fade?: number;
  gain?: number;
  bloom?: number;
  color?: string;
  farColor?: string;
  grain?: number;
  grainRate?: number;
  vignette?: number;
  backgroundColor?: string;
  opacity?: number;
  cursorInteraction?: boolean;
  cursorPush?: number;
  cursorRadius?: number;
  paused?: boolean;
  dpr?: number;
}

const VERTEX = `
attribute vec2 a_position;
varying vec2 vPlane;
void main() {
  vPlane = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const buildFragment = (count: number) => `
precision highp float;

varying vec2 vPlane;

uniform vec2 uCanvas;
uniform float uClock;
uniform float uSpeed;
uniform float uMinSize;
uniform float uMaxSize;
uniform float uSpread;
uniform float uSway;
uniform float uSwayRate;
uniform float uDepth;
uniform float uCoreSize;
uniform float uCoreSoft;
uniform float uGlow;
uniform float uFalloff;
uniform float uFade;
uniform float uGain;
uniform float uBloom;
uniform float uGrain;
uniform float uGrainRate;
uniform float uVignette;
uniform vec3 uNear;
uniform vec3 uFar;
uniform vec3 uBackdrop;
uniform float uBackdropAlpha;
uniform float uOpacity;
uniform vec2 uPointer;
uniform float uPush;
uniform float uReach;

float spark(vec2 seed) {
  vec3 drift = fract(vec3(seed.xyx) * vec3(0.1031, 0.1030, 0.0973));
  drift += dot(drift, drift.yzx + 33.33);
  return fract((drift.x + drift.y) * drift.z);
}

float shuffle(float n) {
  n = fract(n * 0.1031);
  n *= n + 33.33;
  n *= n + n;
  return fract(n);
}

float softClip(float x) {
  float fall = exp(-2.0 * max(x, 0.0));
  return (1.0 - fall) / (1.0 + fall);
}

void main() {
  vec2 pixel = vPlane * uCanvas;
  vec2 field = (pixel * 2.0 - uCanvas) / max(uCanvas.y, 1.0);

  float t = uClock;
  float reach = max(uReach, 0.02);

  vec3 tally = vec3(0.0);
  float weight = 0.0;

  for (int i = 0; i < ${count}; i++) {
    float k = (float(i) + 0.5) / ${count}.0;

    float seedA = shuffle(k * 97.13 + 3.17);
    float seedB = shuffle(k * 148.77 + 19.41);
    float seedC = shuffle(k * 211.29 + 57.83);
    float seedD = shuffle(k * 263.51 + 91.07);

    float plane = mix(1.0 - uDepth, 1.0, seedA);

    float climb = fract(seedC + t * uSpeed * 0.125 * (0.4 + plane * 0.8));
    float y = climb * 2.0 - 1.0;

    float lane = (shuffle(k * 331.7 + 7.9) * 2.0 - 1.0) * uSpread * 2.0;

    float wobble =
      sin(y * (1.2 + seedD * 1.6) + t * uSwayRate + seedB * 6.2832) * 0.62 +
      sin(y * (2.7 + seedC * 2.0) - t * uSwayRate * 0.63 + seedC * 6.2832) *
        0.38;

    vec2 seat = vec2(lane + wobble * uSway * (0.4 + seedD * 0.8), y);

    vec2 away = seat - uPointer;
    float grip = exp(-dot(away, away) / (reach * reach));
    seat += away / max(length(away), 0.06) * grip * uPush;

    float scale = mix(uMinSize, uMaxSize, seedB) * plane;
    float radius = max(scale * 0.5, 1e-4);

    float d = length(field - seat);

    float rim = radius * max(uCoreSize, 0.02);
    float core = 1.0 - smoothstep(rim * (1.0 - uCoreSoft), rim, d);

    float halo = pow(radius / max(d, 1e-3), uFalloff) * uGlow;

    float edge = max(uFade, 1e-3);
    float alive = smoothstep(-1.0, -1.0 + edge, y) * smoothstep(1.0, 1.0 - edge, y);

    float lit = (core + halo) * alive * (0.35 + plane * 0.65);
    tally += mix(uFar, uNear, seedA) * lit;
    weight += lit;
  }

  float mass = softClip(weight * uGain);
  vec3 tint = tally / max(weight, 1e-4);
  tint = mix(tint, vec3(1.0), uBloom * smoothstep(0.35, 1.0, mass));

  float vig = smoothstep(1.35, 0.25, length(field));
  float shade = (1.0 - uVignette) + uVignette * vig;
  mass *= shade;

  float tick = floor(uClock * max(uGrainRate, 1.0));
  float speck = spark(pixel + tick * 17.0) - 0.5;
  mass = clamp(mass * (1.0 + speck * uGrain * mass * (1.0 - mass) * 8.0), 0.0, 1.0);

  vec3 col = tint * mass;
  float rest = uBackdropAlpha * (1.0 - mass);
  gl_FragColor = vec4(col + uBackdrop * rest, mass + rest) * uOpacity;
}
`;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Parses "#rgb"/"#rrggbb" into linear 0..1 triplets, matching the original's colour handling. */
function parseColor(hex: string): [number, number, number] {
  let h = hex.trim().replace('#', '');
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [0, 0, 0];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

const isClear = (paint: string) => paint === 'transparent' || paint === 'none' || paint === '';

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn('[rising-particles]', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function mountRisingParticles(host: HTMLElement, options: RisingParticlesOptions = {}) {
  const {
    speed = 1,
    count = 100,
    minSize = 0.02,
    maxSize = 0.06,
    spread = 1,
    sway = 0.05,
    swayRate = 0.6,
    depth = 0.65,
    coreSize = 0.35,
    coreSoftness = 0.85,
    glow = 1,
    glowFalloff = 2,
    fade = 0.35,
    gain = 0.9,
    bloom = 0.35,
    color = '#b34dff',
    farColor = '#5b2bd9',
    grain = 0.04,
    grainRate = 24,
    vignette = 0.25,
    backgroundColor = '#0a0a0a',
    opacity = 1,
    cursorInteraction = true,
    cursorPush = 0.12,
    cursorRadius = 0.35,
    paused = false,
    dpr = 1.75,
  } = options;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
  host.appendChild(canvas);

  const gl = (canvas.getContext('webgl', {
    antialias: false,
    alpha: true,
    premultipliedAlpha: true,
    powerPreference: 'high-performance',
  }) || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;

  if (!gl) return () => {};

  const swarm = Math.round(clamp(count, 4, 260));
  const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fs = compile(gl, gl.FRAGMENT_SHADER, buildFragment(swarm));
  if (!vs || !fs) return () => {};

  const program = gl.createProgram()!;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn('[rising-particles]', gl.getProgramInfoLog(program));
    return () => {};
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  const u = (name: string) => gl.getUniformLocation(program, name);
  const U = {
    canvas: u('uCanvas'), clock: u('uClock'), speed: u('uSpeed'),
    minSize: u('uMinSize'), maxSize: u('uMaxSize'), spread: u('uSpread'),
    sway: u('uSway'), swayRate: u('uSwayRate'), depth: u('uDepth'),
    coreSize: u('uCoreSize'), coreSoft: u('uCoreSoft'), glow: u('uGlow'),
    falloff: u('uFalloff'), fade: u('uFade'), gain: u('uGain'), bloom: u('uBloom'),
    grain: u('uGrain'), grainRate: u('uGrainRate'), vignette: u('uVignette'),
    near: u('uNear'), far: u('uFar'), backdrop: u('uBackdrop'),
    backdropAlpha: u('uBackdropAlpha'), opacity: u('uOpacity'),
    pointer: u('uPointer'), push: u('uPush'), reach: u('uReach'),
  };

  // Constant uniforms — set once.
  const near = parseColor(color);
  const far = parseColor(farColor);
  const clear = isClear(backgroundColor);
  const backdrop = clear ? [0, 0, 0] : parseColor(backgroundColor);
  gl.uniform3f(U.near, near[0], near[1], near[2]);
  gl.uniform3f(U.far, far[0], far[1], far[2]);
  gl.uniform3f(U.backdrop, backdrop[0], backdrop[1], backdrop[2]);
  gl.uniform1f(U.backdropAlpha, clear ? 0 : 1);
  gl.uniform1f(U.speed, speed);
  gl.uniform1f(U.minSize, minSize);
  gl.uniform1f(U.maxSize, Math.max(maxSize, minSize));
  gl.uniform1f(U.spread, spread);
  gl.uniform1f(U.sway, sway);
  gl.uniform1f(U.swayRate, swayRate);
  gl.uniform1f(U.depth, clamp(depth, 0, 0.95));
  gl.uniform1f(U.coreSize, coreSize);
  gl.uniform1f(U.coreSoft, clamp(coreSoftness, 0.02, 0.99));
  gl.uniform1f(U.glow, glow);
  gl.uniform1f(U.falloff, glowFalloff);
  gl.uniform1f(U.fade, fade);
  gl.uniform1f(U.gain, gain);
  gl.uniform1f(U.bloom, clamp(bloom, 0, 1));
  gl.uniform1f(U.grain, grain);
  gl.uniform1f(U.grainRate, grainRate);
  gl.uniform1f(U.vignette, vignette);
  gl.uniform1f(U.opacity, opacity);
  gl.uniform1f(U.reach, cursorRadius);

  const pointer = { x: 0.5, y: 0.5, inside: false };
  const glide = { x: 0, y: 0, push: 0 };
  let clock = 0;
  let awake = true;
  let raf = 0;
  let last = performance.now();
  let width = 0;
  let height = 0;

  const ratio = Math.min(window.devicePixelRatio || 1, Math.max(dpr, 0.5));

  const resize = () => {
    const rect = host.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width * ratio));
    const h = Math.max(1, Math.round(rect.height * ratio));
    if (w === width && h === height) return;
    width = w;
    height = h;
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);
  };

  const track = (event: PointerEvent) => {
    const box = host.getBoundingClientRect();
    if (!box.width || !box.height) return;
    pointer.x = clamp((event.clientX - box.left) / box.width, 0, 1);
    pointer.y = clamp(1 - (event.clientY - box.top) / box.height, 0, 1);
    pointer.inside = true;
  };
  const reset = () => { pointer.inside = false; };

  if (cursorInteraction) {
    host.addEventListener('pointermove', track);
    host.addEventListener('pointerleave', reset);
  }

  const observer =
    typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(([entry]) => { awake = entry.isIntersecting; }, { threshold: 0 })
      : null;
  observer?.observe(host);

  const resizeObserver =
    typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => resize()) : null;
  resizeObserver?.observe(host);
  window.addEventListener('resize', resize);
  resize();

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    const delta = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!awake) return;
    if (!paused) clock += delta;

    gl.uniform2f(U.canvas, width, height);
    gl.uniform1f(U.clock, clock);

    const wide = (height || 1) > 0 ? width / height : 1;
    const ease = 1 - Math.exp(-delta * 6);
    const aimX = cursorInteraction ? (pointer.x * 2 - 1) * wide : 0;
    const aimY = cursorInteraction ? pointer.y * 2 - 1 : 0;
    const aimPush = cursorInteraction && pointer.inside ? Math.max(cursorPush, 0) : 0;
    glide.x += (aimX - glide.x) * ease;
    glide.y += (aimY - glide.y) * ease;
    glide.push += (aimPush - glide.push) * ease;
    gl.uniform2f(U.pointer, glide.x, glide.y);
    gl.uniform1f(U.push, glide.push);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf);
    observer?.disconnect();
    resizeObserver?.disconnect();
    window.removeEventListener('resize', resize);
    host.removeEventListener('pointermove', track);
    host.removeEventListener('pointerleave', reset);
    canvas.remove();
  };
}
