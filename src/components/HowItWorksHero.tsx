import { useEffect, useState } from "react";
import RisingParticles from "@components/react-bits/RisingParticles";

/**
 * Entrance animations here are CSS, not JS. The markup ships from the server
 * already visible and starts animating on first paint, so the copy no longer
 * waits for React (and the WebGL bundle) to hydrate before it appears.
 */

interface HowItWorksHeroProps {
  eyebrow?: string;
  headlinePre?: string;
  headlineEm?: string;
  headlinePost?: string;
  lede?: string;
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(media.matches);
    const onChange = () => setReduce(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduce;
}

export default function HowItWorksHero({
  eyebrow,
  headlinePre = "",
  headlineEm = "",
  headlinePost = "",
  lede = "",
}: HowItWorksHeroProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [particlesReady, setParticlesReady] = useState(false);

  // Reveal the canvas only once it has had a frame to paint, so it fades up
  // out of the static backdrop instead of popping in over it.
  useEffect(() => {
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setParticlesReady(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <section className="hiw-hero">
      {/* Static first frame: a hint of the particle tint, painted immediately. */}
      <div aria-hidden="true" className="hiw-hero-backdrop" />

      <RisingParticles
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          opacity: particlesReady ? 1 : 0,
          transition: reduceMotion ? "none" : "opacity 700ms ease-out",
        }}
        backgroundColor="transparent"
        color="#C41E3A"
        farColor="#7C1D1D"
        count={120}
        minSize={0.01}
        maxSize={0.032}
        spread={1.8}
        sway={0.08}
        swayRate={0.45}
        depth={0.6}
        coreSize={0.3}
        coreSoftness={0.85}
        glow={0.8}
        glowFalloff={2.6}
        fade={0.22}
        gain={0.9}
        bloom={0.12}
        grain={0}
        vignette={0}
        opacity={0.68}
        speed={reduceMotion ? 0 : 0.55}
        cursorInteraction={!reduceMotion}
        cursorPush={0.08}
        cursorRadius={0.3}
        paused={reduceMotion}
        dpr={1.5}
      />

      <div aria-hidden="true" className="hiw-hero-scrim" />

      <div className="container-narrow hiw-hero-inner">
        <span className="eyebrow eyebrow-rosso hiw-rise hiw-rise-eyebrow">
          {eyebrow}
        </span>

        <h1
          className="display-1 hiw-rise hiw-rise-title"
          style={{ marginTop: 0, marginBottom: 32 }}
        >
          {headlinePre}
          <span className="editorial-i">{headlineEm}</span>
          {headlinePost}
        </h1>

        <p className="lede hiw-rise hiw-rise-lede">{lede}</p>
      </div>

      <style>{`
        .hiw-hero {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding-top: 110px;
          padding-bottom: 72px;
          background: var(--paper, #F7F5F0);
        }
        .hiw-hero-backdrop {
          position: absolute;
          inset: 0;
          z-index: -3;
          pointer-events: none;
          background:
            radial-gradient(ellipse 40% 50% at 78% 26%, rgba(196, 30, 58, 0.055) 0%, rgba(196, 30, 58, 0) 70%),
            radial-gradient(ellipse 45% 55% at 16% 72%, rgba(196, 30, 58, 0.045) 0%, rgba(196, 30, 58, 0) 70%);
        }
        .hiw-hero-scrim {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: radial-gradient(
              ellipse 65% 60% at 50% 40%,
              rgba(247, 245, 240, 0.4) 0%,
              rgba(247, 245, 240, 0.14) 55%,
              rgba(247, 245, 240, 0) 85%
            );
        }
        .hiw-hero-inner {
          position: relative;
        }

        @keyframes hiwRise {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: none; }
        }
        .hiw-rise {
          animation: hiwRise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hiw-rise-eyebrow { animation-delay: 0.02s; }
        .hiw-rise-title   { animation-delay: 0.08s; }
        .hiw-rise-lede    { animation-delay: 0.16s; }

        @media (max-width: 640px) {
          .hiw-hero {
            padding-top: 88px;
            padding-bottom: 56px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hiw-rise {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
