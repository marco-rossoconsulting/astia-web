/**
 * Five-year cost chart (price page). Rendered client-side at the container's
 * real width so labels stay legible on phones; the page also carries the same
 * numbers as a table, so nothing depends on this script.
 *
 * Colour follows the brand (one chromatic hue plus neutrals, as in the deck):
 * Astia in Rosso, the typical build in Ink, the lean build in Stone and dashed.
 * Identity never rests on colour alone: legend with line keys, direct end
 * labels, dash pattern, and a crosshair readout listing every series.
 */
import { formatNumber, type Currency, type Lang } from '@/i18n';

type Key = 'typical' | 'astia' | 'lean';

interface ChartData {
  lang: Lang;
  x: string[];
  series: { key: Key; label: string; values: number[] }[];
}

const SVG_NS = 'http://www.w3.org/2000/svg';
const STYLE: Record<Key, { color: string; width: number; dash?: string }> = {
  typical: { color: '#141414', width: 2 },
  astia: { color: '#C41E3A', width: 2.5 },
  lean: { color: '#6B6B66', width: 2, dash: '5 5' },
};
const Y_MAX = 18000;
const Y_STEP = 3000;

function el<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number> = {}): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  return node;
}

function currentCurrency(): Currency {
  return (document.documentElement.dataset.currency as Currency) || 'CHF';
}

export function mountCostChart(root: HTMLElement): void {
  const data: ChartData = JSON.parse(root.dataset.chart || '{}');
  const plot = root.querySelector<HTMLElement>('[data-chart-plot]');
  const tip = root.querySelector<HTMLElement>('[data-chart-tip]');
  if (!plot || !tip) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let drawn = reduce;
  let active = -1;
  let width = 0;

  const render = () => {
    width = plot.clientWidth;
    if (!width) return;
    const narrow = width < 520;
    const height = narrow ? 300 : 380;
    const m = { top: 16, right: narrow ? 56 : 120, bottom: 34, left: narrow ? 54 : 64 };
    const iw = width - m.left - m.right;
    const ih = height - m.top - m.bottom;
    const xAt = (i: number) => m.left + (iw * i) / (data.x.length - 1);
    const yAt = (v: number) => m.top + ih - (ih * v) / Y_MAX;
    const cur = currentCurrency();
    const fmt = (n: number) => formatNumber(n, data.lang, cur);

    const svg = el('svg', { width, height, viewBox: `0 0 ${width} ${height}`, 'aria-hidden': 'true' });

    // Gridlines and y ticks: hairline, solid, recessive.
    for (let v = 0; v <= Y_MAX; v += Y_STEP) {
      svg.append(el('line', { x1: m.left, x2: width - m.right, y1: yAt(v), y2: yAt(v), stroke: v === 0 ? '#C9C5BB' : '#E5E2DA', 'stroke-width': 1 }));
      if (narrow && v % 6000 !== 0) continue;
      const t = el('text', { x: m.left - 10, y: yAt(v) + 4, 'text-anchor': 'end', class: 'cc-tick' });
      t.textContent = fmt(v);
      svg.append(t);
    }
    // X labels.
    data.x.forEach((label, i) => {
      const t = el('text', { x: xAt(i), y: height - 10, 'text-anchor': i === 0 ? 'start' : i === data.x.length - 1 ? 'end' : 'middle', class: 'cc-tick' });
      // On phones the axis reads 0 to 5 ("Year 3" becomes "3"); the tooltip and
      // the table keep the full labels.
      t.textContent = narrow ? (i === 0 ? '0' : label.split(' ').pop() || label) : label;
      svg.append(t);
    });

    // Crosshair (behind the lines).
    const cross = el('line', { y1: m.top, y2: m.top + ih, stroke: '#141414', 'stroke-width': 1, opacity: 0, class: 'cc-cross' });
    svg.append(cross);

    // Lines, drawn in from the left when first seen.
    const order: Key[] = ['lean', 'typical', 'astia'];
    for (const key of order) {
      const s = data.series.find((d) => d.key === key)!;
      const st = STYLE[key];
      const d = s.values.map((v, i) => `${i ? 'L' : 'M'}${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`).join(' ');
      const path = el('path', { d, fill: 'none', stroke: st.color, 'stroke-width': st.width, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', class: 'cc-line' });
      if (st.dash) path.setAttribute('stroke-dasharray', st.dash);
      if (!drawn && !st.dash) {
        path.setAttribute('pathLength', '1');
        path.setAttribute('stroke-dasharray', '1');
        path.setAttribute('stroke-dashoffset', '1');
      } else if (!drawn && st.dash) {
        path.style.opacity = '0';
      }
      svg.append(path);

      // End marker with a 2px surface ring, and a direct end label.
      const last = s.values.length - 1;
      svg.append(el('circle', { cx: xAt(last), cy: yAt(s.values[last]), r: 4.5, fill: st.color, stroke: '#FAFAF7', 'stroke-width': 2, class: 'cc-end' }));
      const label = el('text', { x: xAt(last) + 12, y: yAt(s.values[last]) + 4, class: 'cc-end-label' });
      label.textContent = fmt(s.values[last]);
      svg.append(label);
    }

    // Hover markers for the active year.
    const markers = order.map((key) => {
      const c = el('circle', { r: 4.5, fill: STYLE[key].color, stroke: '#FAFAF7', 'stroke-width': 2, opacity: 0 });
      svg.append(c);
      return { key, c };
    });

    plot.replaceChildren(svg);

    if (!drawn) {
      requestAnimationFrame(() => {
        svg.querySelectorAll<SVGPathElement>('.cc-line').forEach((p, i) => {
          p.style.transition = `stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.12}s, opacity 0.6s ease ${0.6}s`;
          if (p.getAttribute('pathLength')) p.setAttribute('stroke-dashoffset', '0');
          else p.style.opacity = '1';
        });
      });
      drawn = true;
    }

    const show = (i: number) => {
      active = i;
      if (i < 0) {
        cross.setAttribute('opacity', '0');
        markers.forEach(({ c }) => c.setAttribute('opacity', '0'));
        tip.hidden = true;
        return;
      }
      const x = xAt(i);
      cross.setAttribute('x1', String(x));
      cross.setAttribute('x2', String(x));
      cross.setAttribute('opacity', '0.35');
      markers.forEach(({ key, c }) => {
        const s = data.series.find((d) => d.key === key)!;
        c.setAttribute('cx', String(x));
        c.setAttribute('cy', String(yAt(s.values[i])));
        c.setAttribute('opacity', '1');
      });

      // Tooltip: value leads, label follows; built with textContent.
      tip.replaceChildren();
      const head = document.createElement('p');
      head.className = 'cc-tip-head';
      head.textContent = data.x[i];
      tip.append(head);
      for (const key of ['typical', 'astia', 'lean'] as Key[]) {
        const s = data.series.find((d) => d.key === key)!;
        const row = document.createElement('p');
        row.className = 'cc-tip-row';
        const keyLine = document.createElement('span');
        keyLine.className = `cc-key cc-key--${key}`;
        const val = document.createElement('strong');
        val.textContent = `${cur} ${fmt(s.values[i])}`;
        const name = document.createElement('span');
        name.textContent = s.label;
        row.append(keyLine, val, name);
        tip.append(row);
      }
      tip.hidden = false;
      const tipW = tip.offsetWidth;
      const left = x + 16 + tipW > width ? x - 16 - tipW : x + 16;
      tip.style.transform = `translate(${Math.max(0, left)}px, ${m.top}px)`;
    };

    const nearest = (clientX: number) => {
      const rect = svg.getBoundingClientRect();
      const px = clientX - rect.left;
      const step = iw / (data.x.length - 1);
      return Math.max(0, Math.min(data.x.length - 1, Math.round((px - m.left) / step)));
    };

    plot.onpointermove = (e) => show(nearest(e.clientX));
    plot.onpointerdown = (e) => show(nearest(e.clientX));
    plot.onpointerleave = (e) => { if (e.pointerType === 'mouse') show(-1); };
    plot.onkeydown = (e) => {
      if (e.key === 'ArrowRight') { show(Math.min(data.x.length - 1, active + 1)); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { show(Math.max(0, (active < 0 ? 1 : active) - 1)); e.preventDefault(); }
      else if (e.key === 'Escape') show(-1);
    };
    plot.onfocus = () => { if (active < 0) show(data.x.length - 1); };
    plot.onblur = () => show(-1);

    if (active >= 0) show(active);
  };

  // Render once the chart is near view (so the draw-in is seen), then keep in sync.
  const start = () => {
    render();
    new ResizeObserver(() => { if (plot.clientWidth !== width) render(); }).observe(plot);
    window.addEventListener('astia:currency', () => render());
  };
  if (!reduce && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { io.disconnect(); start(); }
    }, { threshold: 0.35 });
    io.observe(root);
  } else {
    start();
  }
}
