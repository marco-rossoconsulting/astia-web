"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Bot,
  Check,
  Mail,
  PenTool,
  Radio,
  Shield,
  Sparkles,
  UserCheck,
  Zap,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SELF_ICONS = [PenTool, Shield, Activity, Sparkles, Mail];
const MANAGED_ICONS = [Check, Bot, UserCheck, Radio, Zap];

export interface PricingSize {
  label: string;
  self: number;
  managed: number;
}

export interface PricingExplorerProps {
  headlinePre: string;
  headlineEm: string;
  intro: string;
  sizeAria: string;
  currency: string;
  perMonth: string;
  yearOne: string;
  vatNote: string;
  disclaimer: string;
  recommended: string;
  typicalLabel: string;
  selfTitle: string;
  selfTagline: string;
  selfFeatures: string[];
  managedTitle: string;
  managedTagline: string;
  managedFeatures: string[];
  applyLabel: string;
  applyHref: string;
  sizes: PricingSize[];
  defaultIndex?: number;
  lang: "en" | "de" | "it";
  upfrontLabel: string;
}

function formatChf(n: number, lang: PricingExplorerProps["lang"]) {
  const locale = lang === "de" ? "de-CH" : lang === "it" ? "it-CH" : "en-CH";
  return `CHF ${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(n)}`;
}

function Slider({
  value,
  max,
  onChange,
  ariaLabel,
}: {
  value: number;
  max: number;
  onChange: (v: number) => void;
  ariaLabel: string;
}) {
  const pct = max === 0 ? 0 : (value / max) * 100;
  return (
    <div className="px-slider">
      <div className="px-slider-track" aria-hidden="true" />
      <div className="px-slider-fill" style={{ width: `${pct}%` }} aria-hidden="true" />
      <div className="px-slider-thumb" style={{ left: `calc(${pct}% - 9px)` }} aria-hidden="true" />
      <input
        type="range"
        min={0}
        max={max}
        step={1}
        value={value}
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export default function PricingExplorer({
  headlinePre,
  headlineEm,
  intro,
  sizeAria,
  currency,
  perMonth,
  yearOne,
  vatNote,
  disclaimer,
  recommended,
  typicalLabel,
  selfTitle,
  selfTagline,
  selfFeatures,
  managedTitle,
  managedTagline,
  managedFeatures,
  applyLabel,
  applyHref,
  sizes,
  defaultIndex = 1,
  lang,
  upfrontLabel,
}: PricingExplorerProps) {
  const reduceMotion = useReducedMotion();
  const last = Math.max(sizes.length - 1, 0);
  const start = Math.min(Math.max(defaultIndex, 0), last);
  const [idx, setIdx] = useState(start);
  const size = sizes[idx] ?? sizes[0];

  const selfYear = useMemo(() => (size ? size.self * 12 : 0), [size]);
  const managedYear = useMemo(() => (size ? size.managed * 12 : 0), [size]);

  if (!size) return null;

  return (
    <section className="px-section" aria-labelledby="px-heading">
      <div className="px-inner">
        <motion.header
          className="px-header"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2 id="px-heading" className="display-2">
            {headlinePre} <span className="editorial-i">{headlineEm}</span>
          </h2>
          <p className="lede">{intro}</p>
        </motion.header>

        <motion.div
          className="px-control"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE, delay: reduceMotion ? 0 : 0.08 }}
        >
          <p className="px-control-label">{sizeAria}</p>
          <div className="px-readout">
            {size.label}
            {idx === 1 ? <span className="px-typical">{typicalLabel}</span> : null}
          </div>
          <Slider value={idx} max={last} onChange={setIdx} ariaLabel={sizeAria} />
          <div className="px-stops" role="tablist" aria-label={sizeAria}>
            {sizes.map((s, i) => (
              <button
                key={s.label}
                type="button"
                role="tab"
                aria-selected={i === idx}
                className={i === idx ? "is-on" : undefined}
                onClick={() => setIdx(i)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="px-grid">
          <motion.article
            className="px-card"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: reduceMotion ? 0 : 0.1 }}
          >
            <div className="px-card-head">
              <PenTool size={16} strokeWidth={1.75} />
              <h3>{selfTitle}</h3>
            </div>
            <p className="px-tagline">{selfTagline}</p>
            <div className="px-amount">
              <span className="px-figure">{formatChf(size.self, lang)}</span>
              <span className="px-suffix">{perMonth}</span>
            </div>
            <p className="px-year">
              {formatChf(selfYear, lang)} · {yearOne}
            </p>
            <p className="px-vat">{vatNote}</p>
            <ul className="px-features">
              {selfFeatures.map((text, i) => {
                const Icon = SELF_ICONS[i] ?? Check;
                return (
                  <li key={text}>
                    <Icon size={14} strokeWidth={1.75} />
                    {text}
                  </li>
                );
              })}
            </ul>
            <a className="btn btn-ghost btn-arrow" href={applyHref}>
              {applyLabel}
            </a>
          </motion.article>

          <motion.article
            className="px-card is-rec"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: reduceMotion ? 0 : 0.18 }}
          >
            <span className="px-badge">{recommended}</span>
            <div className="px-card-head">
              <Mail size={16} strokeWidth={1.75} />
              <h3>{managedTitle}</h3>
            </div>
            <p className="px-tagline">{managedTagline}</p>
            <div className="px-amount">
              <span className="px-figure">{formatChf(size.managed, lang)}</span>
              <span className="px-suffix">{perMonth}</span>
            </div>
            <p className="px-year">
              {formatChf(managedYear, lang)} · {yearOne}
            </p>
            <p className="px-vat">{vatNote}</p>
            <ul className="px-features">
              {managedFeatures.map((text, i) => {
                const Icon = MANAGED_ICONS[i] ?? Check;
                return (
                  <li key={text}>
                    <Icon size={14} strokeWidth={1.75} />
                    {text}
                  </li>
                );
              })}
            </ul>
            <a className="btn btn-primary btn-arrow" href={applyHref}>
              {applyLabel}
            </a>
          </motion.article>
        </div>

        <p className="px-disclaimer">{disclaimer}</p>
        <p className="px-upfront">
          {upfrontLabel}: {currency} 0
        </p>
      </div>

      <style>{`
        .px-section {
          width: 100%;
          background: var(--paper, #F7F5F0);
          padding: 0;
        }
        .px-inner {
          max-width: var(--container-max, 1240px);
          margin: 0 auto;
        }
        .px-header {
          max-width: 680px;
          margin: 0 0 40px;
        }
        .px-header .display-2 { margin-bottom: 12px; }
        .px-header .lede { margin: 0; font-size: 16px; line-height: 1.65; color: var(--ink-soft, #2A2A2A); }
        .px-control {
          max-width: 720px;
          margin: 0 auto 40px;
          padding: 28px 32px 24px;
          background: var(--cream, #FAFAF7);
          border: 1px solid var(--bone, #E5E2DA);
        }
        .px-control-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--stone, #6B6B66);
          margin: 0 0 10px;
        }
        .px-readout {
          font-family: 'Editorial New', Georgia, serif;
          font-size: clamp(26px, 3vw, 34px);
          line-height: 1.15;
          color: var(--ink, #141414);
          margin: 0 0 22px;
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }
        .px-typical {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--paper, #F7F5F0);
          background: var(--ink, #141414);
          padding: 4px 8px;
        }
        .px-slider {
          position: relative;
          height: 28px;
          display: flex;
          align-items: center;
        }
        .px-slider-track {
          position: absolute;
          inset-inline: 0;
          height: 2px;
          background: var(--bone, #E5E2DA);
        }
        .px-slider-fill {
          position: absolute;
          left: 0;
          height: 2px;
          background: var(--rosso, #C41E3A);
        }
        .px-slider-thumb {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--paper, #F7F5F0);
          border: 2px solid var(--rosso, #C41E3A);
          box-shadow: var(--shadow-soft, 0 1px 3px rgba(20,20,20,0.04));
          pointer-events: none;
          top: 50%;
          transform: translateY(-50%);
        }
        .px-slider input[type="range"] {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
          margin: 0;
        }
        .px-stops {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 16px;
        }
        .px-stops button {
          background: none;
          border: 1px solid var(--bone, #E5E2DA);
          padding: 8px 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--stone, #6B6B66);
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .px-stops button:hover { color: var(--ink, #141414); border-color: var(--ink, #141414); }
        .px-stops button.is-on {
          color: var(--paper, #F7F5F0);
          background: var(--ink, #141414);
          border-color: var(--ink, #141414);
        }
        .px-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }
        .px-card {
          background: var(--cream, #FAFAF7);
          border: 1px solid var(--bone, #E5E2DA);
          padding: 32px 28px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .px-card.is-rec {
          background: var(--paper, #F7F5F0);
          border-color: var(--rosso, #C41E3A);
        }
        .px-badge {
          position: absolute;
          top: -1px;
          right: -1px;
          background: var(--rosso, #C41E3A);
          color: var(--paper, #F7F5F0);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 6px 12px;
        }
        .px-card-head {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--ink, #141414);
          margin-bottom: 8px;
        }
        .px-card-head h3 {
          font-family: 'Editorial New', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          line-height: 1.15;
          margin: 0;
        }
        .px-tagline {
          font-size: 14px;
          line-height: 1.55;
          color: var(--stone, #6B6B66);
          margin: 0 0 28px;
          min-height: 3.1em;
        }
        .px-amount {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }
        .px-figure {
          font-family: 'Editorial New', Georgia, serif;
          font-size: clamp(36px, 4vw, 48px);
          line-height: 1;
          color: var(--ink, #141414);
          font-variant-numeric: tabular-nums;
        }
        .px-card.is-rec .px-figure { color: var(--rosso, #C41E3A); }
        .px-suffix {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: var(--stone, #6B6B66);
        }
        .px-year {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.02em;
          color: var(--ink-soft, #2A2A2A);
          margin: 10px 0 0;
        }
        .px-vat {
          font-size: 12px;
          color: var(--stone, #6B6B66);
          margin: 4px 0 0;
        }
        .px-features {
          list-style: none;
          margin: 24px 0 28px;
          padding: 18px 0 0;
          border-top: 1px dashed var(--bone, #E5E2DA);
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .px-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          line-height: 1.45;
          color: var(--ink-soft, #2A2A2A);
        }
        .px-features li svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--rosso, #C41E3A);
        }
        .px-card .btn { align-self: flex-start; }
        .px-disclaimer {
          margin: 36px auto 8px;
          max-width: 720px;
          text-align: center;
          font-size: 13px;
          line-height: 1.6;
          color: var(--stone, #6B6B66);
        }
        .px-upfront {
          margin: 0 auto;
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--stone-soft, #9A9A93);
        }
        @media (max-width: 880px) {
          .px-control { padding: 22px 20px 18px; }
          .px-grid { grid-template-columns: 1fr; }
          .px-tagline { min-height: 0; }
          .px-stops { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
