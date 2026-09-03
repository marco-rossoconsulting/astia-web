"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Bot,
  Camera,
  Check,
  Globe,
  Mail,
  PenTool,
  Plug,
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
  builderHeadlinePre: string;
  builderHeadlineEm: string;
  builderLede: string;
  coreLabel: string;
  includedBadge: string;
  planTitle: string;
  billedLabel: string;
  totalLabel: string;
  oneTimeLabel: string;
  quotedLabel: string;
  languagesName: string;
  languagesBlurb: string;
  languagesIncluded: string;
  extraLanguageLabel: string;
  photoName: string;
  photoBlurb: string;
  photoFromLabel: string;
  customName: string;
  customBlurb: string;
  langMin: number;
  langMax: number;
  langExtraMonthly: number;
  photoAmount: number;
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
  builderHeadlinePre,
  builderHeadlineEm,
  builderLede,
  coreLabel,
  includedBadge,
  planTitle,
  billedLabel,
  totalLabel,
  oneTimeLabel,
  quotedLabel,
  languagesName,
  languagesBlurb,
  languagesIncluded,
  extraLanguageLabel,
  photoName,
  photoBlurb,
  photoFromLabel,
  customName,
  customBlurb,
  langMin,
  langMax,
  langExtraMonthly,
  photoAmount,
}: PricingExplorerProps) {
  const reduceMotion = useReducedMotion();
  const last = Math.max(sizes.length - 1, 0);
  const start = Math.min(Math.max(defaultIndex, 0), last);
  const [idx, setIdx] = useState(start);
  const [tier, setTier] = useState<"self" | "managed">("managed");
  const [langCount, setLangCount] = useState(langMin);
  const [photo, setPhoto] = useState(false);
  const [custom, setCustom] = useState(false);
  const size = sizes[idx] ?? sizes[0];

  const base = size ? (tier === "managed" ? size.managed : size.self) : 0;
  const extraLangs = Math.max(0, langCount - langMin);
  const extraMonthly = extraLangs * langExtraMonthly;
  const monthly = base + extraMonthly;
  const oneTime = photo ? photoAmount : 0;
  const shift = reduceMotion ? 0 : 16;

  const selfYear = useMemo(() => (size ? size.self * 12 : 0), [size]);
  const managedYear = useMemo(() => (size ? size.managed * 12 : 0), [size]);

  if (!size) return null;

  const coreName = `${tier === "managed" ? managedTitle : selfTitle} · ${size.label}`;

  const applyWithPlan = useMemo(() => {
    const parts = [
      coreName,
      `${languagesName}: ${langCount}`,
      photo ? `${photoName} (${photoFromLabel} ${formatChf(photoAmount, lang)})` : null,
      custom ? `${customName} (${quotedLabel})` : null,
      `${formatChf(monthly, lang)}${perMonth}`,
    ].filter(Boolean) as string[];
    const q = new URLSearchParams();
    q.set("from", "pricing");
    q.set("size", String(idx));
    q.set("summary", parts.join(" · "));
    const path = applyHref.split("?")[0];
    return `${path}?${q.toString()}`;
  }, [
    applyHref,
    coreName,
    languagesName,
    langCount,
    photo,
    photoName,
    photoFromLabel,
    photoAmount,
    custom,
    customName,
    quotedLabel,
    monthly,
    perMonth,
    lang,
    idx,
  ]);

  return (
    <div className="px-board">
      <div className="px-control">
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
      </div>

      <div className="px-grid">
        <button
          type="button"
          className={`px-card${tier === "self" ? " is-sel" : ""}`}
          onClick={() => setTier("self")}
          aria-pressed={tier === "self"}
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
        </button>

        <button
          type="button"
          className={`px-card is-rec${tier === "managed" ? " is-sel" : ""}`}
          onClick={() => setTier("managed")}
          aria-pressed={tier === "managed"}
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
        </button>
      </div>

      <div className="px-builder">
        <div className="px-builder-main">
          <div className="px-builder-head">
            <h2 className="display-2">
              {builderHeadlinePre} <span className="editorial-i">{builderHeadlineEm}</span>
            </h2>
            <p className="lede">{builderLede}</p>
          </div>

          <div className="px-core">
            <span className="px-ico" aria-hidden="true">
              {tier === "managed" ? <Mail size={18} /> : <PenTool size={18} />}
            </span>
            <span className="px-core-copy">
              <span className="px-core-name">{coreLabel}</span>
              <span className="px-core-sub">{coreName}</span>
            </span>
            <span className="px-core-price">{formatChf(base, lang)}</span>
            <span className="px-pill">{includedBadge}</span>
          </div>
          <div className="px-core-includes">
            <span>
              <Check size={14} />
              {languagesIncluded}
            </span>
            <span>
              <Check size={14} />
              {vatNote}
            </span>
            <span>
              <Check size={14} />
              {upfrontLabel}: {currency} 0
            </span>
          </div>

          <div className="px-addon">
            <span className="px-ico" aria-hidden="true">
              <Globe size={18} />
            </span>
            <span className="px-core-copy">
              <span className="px-core-name">{languagesName}</span>
              <span className="px-core-sub">{languagesBlurb}</span>
            </span>
            <span className="px-stepper">
              <button
                type="button"
                aria-label="-"
                disabled={langCount <= langMin}
                onClick={() => setLangCount((n) => Math.max(langMin, n - 1))}
              >
                −
              </button>
              <span>{langCount}</span>
              <button
                type="button"
                aria-label="+"
                disabled={langCount >= langMax}
                onClick={() => setLangCount((n) => Math.min(langMax, n + 1))}
              >
                +
              </button>
            </span>
            <span className="px-addon-price">
              {extraMonthly > 0 ? `+${formatChf(extraMonthly, lang)}` : includedBadge}
            </span>
          </div>

          <button
            type="button"
            className={`px-addon px-toggle${photo ? " is-on" : ""}`}
            aria-pressed={photo}
            onClick={() => setPhoto((v) => !v)}
          >
            <span className="px-ico" aria-hidden="true">
              <Camera size={18} />
            </span>
            <span className="px-core-copy">
              <span className="px-core-name">{photoName}</span>
              <span className="px-core-sub">{photoBlurb}</span>
            </span>
            <span className="px-addon-price">
              {photoFromLabel} {formatChf(photoAmount, lang)}
            </span>
            <span className={`px-check${photo ? " is-on" : ""}`}>
              <motion.span
                initial={false}
                animate={{ scale: photo ? 1 : 0, opacity: photo ? 1 : 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.18, ease: EASE }}
              >
                <Check size={12} />
              </motion.span>
            </span>
          </button>

          <button
            type="button"
            className={`px-addon px-toggle${custom ? " is-on" : ""}`}
            aria-pressed={custom}
            onClick={() => setCustom((v) => !v)}
          >
            <span className="px-ico" aria-hidden="true">
              <Plug size={18} />
            </span>
            <span className="px-core-copy">
              <span className="px-core-name">{customName}</span>
              <span className="px-core-sub">{customBlurb}</span>
            </span>
            <span className="px-addon-price">{quotedLabel}</span>
            <span className={`px-check${custom ? " is-on" : ""}`}>
              <motion.span
                initial={false}
                animate={{ scale: custom ? 1 : 0, opacity: custom ? 1 : 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.18, ease: EASE }}
              >
                <Check size={12} />
              </motion.span>
            </span>
          </button>
        </div>

        <aside className="px-summary">
          <div className="px-summary-top">
            <h3>{planTitle}</h3>
            <span className="px-pill">{billedLabel}</span>
          </div>
          <ul className="px-lines">
            <li>
              <span>{coreName}</span>
              <span>{formatChf(base, lang)}</span>
            </li>
            <AnimatePresence initial={false}>
              {extraLangs > 0 ? (
                <motion.li
                  key="langs"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28, ease: EASE }}
                  className="px-line-anim"
                >
                  <span>
                    {extraLanguageLabel} × {extraLangs}
                  </span>
                  <span>+{formatChf(extraMonthly, lang)}</span>
                </motion.li>
              ) : null}
              {custom ? (
                <motion.li
                  key="custom"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28, ease: EASE }}
                  className="px-line-anim"
                >
                  <span>{customName}</span>
                  <span>{quotedLabel}</span>
                </motion.li>
              ) : null}
            </AnimatePresence>
          </ul>
          <div className="px-total">
            <span>{totalLabel}</span>
            <span className="px-total-num">
              <span className="px-total-cur">CHF</span>
              <span className="px-total-slot">
                <span aria-hidden="true" className="px-total-ghost">
                  {new Intl.NumberFormat(lang === "de" ? "de-CH" : lang === "it" ? "it-CH" : "en-CH", { maximumFractionDigits: 0 }).format(monthly)}
                </span>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={monthly}
                    initial={{ opacity: 0, y: shift }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -shift }}
                    transition={{ duration: reduceMotion ? 0 : 0.22, ease: EASE }}
                    className="px-total-value"
                  >
                    {new Intl.NumberFormat(lang === "de" ? "de-CH" : lang === "it" ? "it-CH" : "en-CH", { maximumFractionDigits: 0 }).format(monthly)}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </div>
          <AnimatePresence initial={false}>
            {oneTime > 0 ? (
              <motion.p
                key="onetime"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="px-onetime"
              >
                {oneTimeLabel}: {photoFromLabel} {formatChf(oneTime, lang)}
              </motion.p>
            ) : null}
          </AnimatePresence>
          <a className="btn btn-primary btn-arrow px-cta" href={applyWithPlan}>
            {applyLabel}
          </a>
          <p className="px-disclaimer px-disclaimer-left">{disclaimer}</p>
        </aside>
      </div>

      <style>{`
        .px-board { width: 100%; }
        .px-control {
          max-width: 720px;
          margin: 0 auto 36px;
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
        .px-slider { position: relative; height: 28px; display: flex; align-items: center; }
        .px-slider-track { position: absolute; inset-inline: 0; height: 2px; background: var(--bone, #E5E2DA); }
        .px-slider-fill { position: absolute; left: 0; height: 2px; background: var(--rosso, #C41E3A); }
        .px-slider-thumb {
          position: absolute; width: 18px; height: 18px; border-radius: 50%;
          background: var(--paper, #F7F5F0); border: 2px solid var(--rosso, #C41E3A);
          pointer-events: none; top: 50%; transform: translateY(-50%);
        }
        .px-slider input[type="range"] {
          position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; margin: 0;
        }
        .px-stops { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 16px; }
        .px-stops button {
          background: none; border: 1px solid var(--bone, #E5E2DA); padding: 8px 10px;
          font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--stone, #6B6B66);
        }
        .px-stops button:hover { color: var(--ink, #141414); border-color: var(--ink, #141414); }
        .px-stops button.is-on { color: var(--paper, #F7F5F0); background: var(--ink, #141414); border-color: var(--ink, #141414); }
        .px-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: stretch; }
        .px-card {
          background: var(--cream, #FAFAF7); border: 1px solid var(--bone, #E5E2DA);
          padding: 32px 28px 28px; display: flex; flex-direction: column; position: relative;
          width: 100%; text-align: left; color: inherit; font: inherit; cursor: pointer;
        }
        .px-card:hover { border-color: var(--ink, #141414); }
        .px-card.is-rec { background: var(--paper, #F7F5F0); }
        .px-card.is-sel { border-color: var(--ink, #141414); }
        .px-card.is-rec.is-sel, .px-card.is-rec:hover { border-color: var(--rosso, #C41E3A); }
        .px-badge {
          position: absolute; top: -1px; right: -1px; background: var(--rosso, #C41E3A);
          color: var(--paper, #F7F5F0); font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 0.14em; text-transform: uppercase; padding: 6px 12px;
        }
        .px-card-head { display: flex; align-items: center; gap: 10px; color: var(--ink, #141414); margin-bottom: 8px; }
        .px-card-head h3 { font-family: 'Editorial New', Georgia, serif; font-size: 26px; font-weight: 400; line-height: 1.15; margin: 0; }
        .px-tagline { font-size: 14px; line-height: 1.55; color: var(--stone, #6B6B66); margin: 0 0 28px; min-height: 3.1em; }
        .px-amount { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
        .px-figure {
          font-family: 'Editorial New', Georgia, serif; font-size: clamp(36px, 4vw, 48px); line-height: 1;
          color: var(--ink, #141414); font-variant-numeric: tabular-nums;
        }
        .px-card.is-rec .px-figure { color: var(--rosso, #C41E3A); }
        .px-suffix { font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.06em; color: var(--stone, #6B6B66); }
        .px-year { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--ink-soft, #2A2A2A); margin: 10px 0 0; }
        .px-vat { font-size: 12px; color: var(--stone, #6B6B66); margin: 4px 0 0; }
        .px-features {
          list-style: none; margin: 24px 0 0; padding: 18px 0 0; border-top: 1px dashed var(--bone, #E5E2DA);
          display: flex; flex-direction: column; gap: 10px; flex: 1;
        }
        .px-features li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; line-height: 1.45; color: var(--ink-soft, #2A2A2A); }
        .px-features li svg { flex-shrink: 0; margin-top: 2px; color: var(--rosso, #C41E3A); }
        .px-builder {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 28px; align-items: start; margin-top: 72px;
        }
        .px-builder-head { max-width: 520px; margin: 0 0 28px; }
        .px-builder-head .display-2 { margin-bottom: 12px; }
        .px-builder-head .lede { margin: 0; font-size: 16px; }
        .px-core, .px-addon {
          display: grid; grid-template-columns: 40px 1fr auto auto; gap: 14px; align-items: center;
          width: 100%; border: 1px solid var(--bone, #E5E2DA); background: var(--cream, #FAFAF7);
          padding: 18px 18px; text-align: left; color: inherit; margin: 0 0 10px;
        }
        .px-addon.px-toggle { cursor: pointer; }
        .px-addon.px-toggle:hover, .px-addon.is-on { border-color: var(--ink, #141414); }
        .px-ico {
          width: 40px; height: 40px; display: grid; place-items: center;
          background: var(--paper, #F7F5F0); border: 1px solid var(--bone, #E5E2DA); color: var(--ink, #141414);
        }
        .px-core-copy { min-width: 0; }
        .px-core-name { display: block; font-size: 15px; font-weight: 500; color: var(--ink, #141414); }
        .px-core-sub { display: block; margin-top: 3px; font-size: 13px; line-height: 1.45; color: var(--stone, #6B6B66); }
        .px-core-price, .px-addon-price {
          font-family: 'JetBrains Mono', monospace; font-size: 13px; font-feature-settings: 'tnum';
          color: var(--ink, #141414); white-space: nowrap;
        }
        .px-pill {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--stone, #6B6B66); background: var(--paper, #F7F5F0); border: 1px solid var(--bone, #E5E2DA);
          padding: 4px 8px; white-space: nowrap;
        }
        .px-core-includes {
          display: flex; flex-wrap: wrap; gap: 8px 18px; padding: 0 4px 16px;
          font-size: 13px; color: var(--stone, #6B6B66);
        }
        .px-core-includes span { display: inline-flex; align-items: center; gap: 6px; }
        .px-core-includes svg { color: var(--rosso, #C41E3A); }
        .px-stepper { display: inline-flex; align-items: center; gap: 0; border: 1px solid var(--bone, #E5E2DA); }
        .px-stepper button {
          width: 32px; height: 32px; border: 0; background: var(--paper, #F7F5F0); color: var(--ink, #141414); font-size: 16px;
        }
        .px-stepper button:disabled { opacity: 0.35; cursor: default; }
        .px-stepper span {
          min-width: 28px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 13px;
        }
        .px-check {
          width: 20px; height: 20px; display: grid; place-items: center; border: 1px solid var(--bone, #E5E2DA);
          background: var(--paper, #F7F5F0);
        }
        .px-check.is-on { background: var(--ink, #141414); border-color: var(--ink, #141414); color: var(--paper, #F7F5F0); }
        .px-summary {
          position: sticky; top: 96px; border: 1px solid var(--bone, #E5E2DA);
          background: var(--paper, #F7F5F0); padding: 28px 24px;
        }
        .px-summary-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .px-summary h3 { font-family: 'Editorial New', Georgia, serif; font-size: 22px; font-weight: 400; margin: 0; }
        .px-lines { list-style: none; margin: 18px 0 0; padding: 0; }
        .px-lines li {
          display: flex; justify-content: space-between; gap: 12px; padding: 10px 0;
          font-size: 14px; color: var(--stone, #6B6B66);
        }
        .px-line-anim { overflow: hidden; }
        .px-lines li > span:last-child {
          font-family: 'JetBrains Mono', monospace; color: var(--ink, #141414); font-feature-settings: 'tnum'; white-space: nowrap;
        }
        .px-total {
          display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
          margin-top: 8px; padding-top: 16px; border-top: 1px dashed var(--bone, #E5E2DA);
        }
        .px-total > span:first-child { font-size: 14px; font-weight: 500; }
        .px-total-num { display: flex; align-items: baseline; gap: 8px; }
        .px-total-cur { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--stone, #6B6B66); }
        .px-total-slot { display: inline-grid; }
        .px-total-ghost, .px-total-value {
          grid-column: 1; grid-row: 1;
          font-family: 'Editorial New', Georgia, serif; font-size: 40px; line-height: 1; font-weight: 400;
        }
        .px-total-ghost { visibility: hidden; }
        .px-total-value { color: var(--rosso, #C41E3A); }
        .px-onetime {
          margin: 12px 0 0; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--stone, #6B6B66);
        }
        .px-cta { display: inline-flex; justify-content: center; width: 100%; margin-top: 24px; }
        .px-disclaimer { margin: 36px auto 0; max-width: 720px; text-align: center; font-size: 13px; line-height: 1.6; color: var(--stone, #6B6B66); }
        .px-disclaimer-left { text-align: left; margin: 20px 0 0; max-width: none; }
        @media (max-width: 880px) {
          .px-control { padding: 22px 20px 18px; }
          .px-grid, .px-builder { grid-template-columns: 1fr; }
          .px-summary { position: static; }
          .px-tagline { min-height: 0; }
          .px-stops { grid-template-columns: 1fr; }
          .px-core, .px-addon { grid-template-columns: 40px 1fr; }
          .px-core-price, .px-addon-price, .px-pill, .px-stepper, .px-check { grid-column: 2; justify-self: start; }
        }
      `}</style>
    </div>
  );
}
