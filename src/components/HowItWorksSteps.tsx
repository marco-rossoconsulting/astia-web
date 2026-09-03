"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Building2, Inbox, Mail, PenTool, Radio } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface HowItWorksVignetteRow {
  title: string;
  meta: string;
  active?: boolean;
}

export interface HowItWorksDetail {
  n: string;
  label: string;
  days?: string;
}

export interface HowItWorksStep {
  num: string;
  title: string;
  days: string;
  body: string;
  kind: "apply" | "build" | "run";
  vignetteLabel: string;
  vignetteHeader: string;
  vignetteBadge: string;
  vignetteRows: HowItWorksVignetteRow[];
  details: HowItWorksDetail[];
}

interface HowItWorksStepsProps {
  headlinePre: string;
  headlineEm: string;
  lede: string;
  steps: HowItWorksStep[];
  ctaLabel?: string;
  ctaHref?: string;
}

function VignetteChrome({ label }: { label: string }) {
  return (
    <div className="hiw-chrome">
      <span className="hiw-traffic" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="hiw-chrome-label">{label}</span>
    </div>
  );
}

function ApplyVignette({
  header,
  badge,
  rows,
}: {
  header: string;
  badge: string;
  rows: HowItWorksVignetteRow[];
}) {
  return (
    <>
      <div className="hiw-vignette-head">
        <span className="hiw-vignette-title">
          <Inbox size={13} strokeWidth={1.75} />
          {header}
        </span>
        <span className="hiw-vignette-badge">{badge}</span>
      </div>
      <ul className="hiw-vignette-list">
        {rows.map((row) => (
          <li key={row.title} className={row.active ? "is-active" : undefined}>
            <span className="hiw-row-icon" aria-hidden="true">
              {row.active ? <Mail size={12} /> : <Building2 size={12} />}
            </span>
            <span>
              <strong>{row.title}</strong>
              <em>{row.meta}</em>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

function BuildVignette({
  header,
  badge,
  rows,
}: {
  header: string;
  badge: string;
  rows: HowItWorksVignetteRow[];
}) {
  return (
    <>
      <div className="hiw-vignette-head">
        <span className="hiw-vignette-title">
          <PenTool size={13} strokeWidth={1.75} />
          {header}
        </span>
        <span className="hiw-vignette-badge">{badge}</span>
      </div>
      <ul className="hiw-vignette-list hiw-build-list">
        {rows.map((row) => (
          <li key={row.title} className={row.active ? "is-active" : undefined}>
            <span className="hiw-bar" aria-hidden="true">
              <span style={{ width: row.active ? "78%" : "46%" }} />
            </span>
            <span>
              <strong>{row.title}</strong>
              <em>{row.meta}</em>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

function RunVignette({
  header,
  badge,
  rows,
}: {
  header: string;
  badge: string;
  rows: HowItWorksVignetteRow[];
}) {
  return (
    <>
      <div className="hiw-vignette-head">
        <span className="hiw-vignette-title">
          <Bot size={13} strokeWidth={1.75} />
          {header}
        </span>
        <span className="hiw-vignette-badge hiw-badge-live">
          <Radio size={11} />
          {badge}
        </span>
      </div>
      <ul className="hiw-vignette-list">
        {rows.map((row) => (
          <li key={row.title} className={row.active ? "is-active" : undefined}>
            <span className={`hiw-pulse-dot${row.active ? " is-on" : ""}`} aria-hidden="true" />
            <span>
              <strong>{row.title}</strong>
              <em>{row.meta}</em>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

function Vignette({ step }: { step: HowItWorksStep }) {
  const inner =
    step.kind === "apply" ? (
      <ApplyVignette header={step.vignetteHeader} badge={step.vignetteBadge} rows={step.vignetteRows} />
    ) : step.kind === "build" ? (
      <BuildVignette header={step.vignetteHeader} badge={step.vignetteBadge} rows={step.vignetteRows} />
    ) : (
      <RunVignette header={step.vignetteHeader} badge={step.vignetteBadge} rows={step.vignetteRows} />
    );

  return (
    <div className="hiw-vignette">
      <VignetteChrome label={step.vignetteLabel} />
      <div className="hiw-vignette-body">{inner}</div>
    </div>
  );
}

export default function HowItWorksSteps({
  headlinePre,
  headlineEm,
  lede,
  steps,
  ctaLabel,
  ctaHref,
}: HowItWorksStepsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hiw-section" aria-labelledby="hiw-heading">
      <div className="hiw-inner">
        <motion.header
          className="hiw-header"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 id="hiw-heading" className="display-2">
            {headlinePre} <span className="editorial-i">{headlineEm}</span>
          </h2>
          <p className="lede">{lede}</p>
        </motion.header>

        <div className="hiw-grid">
          <div className="hiw-connector" aria-hidden="true">
            <motion.span
              className="hiw-connector-line"
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduceMotion ? 0 : 1.15, ease: EASE, delay: reduceMotion ? 0 : 0.15 }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.article
              key={step.num}
              className="hiw-col"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: reduceMotion ? 0 : i * 0.12 }}
            >
              <Vignette step={step} />

              <div className="hiw-node-row">
                <motion.span
                  className="hiw-node"
                  initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: EASE, delay: reduceMotion ? 0 : 0.28 + i * 0.12 }}
                >
                  {step.num}
                </motion.span>
              </div>

              <h3 className="hiw-title">{step.title}</h3>
              <div className="hiw-days">{step.days}</div>
              <p className="hiw-body">{step.body}</p>

              {step.details.length > 0 ? (
                <ol className="hiw-details">
                  {step.details.map((detail) => (
                    <li key={detail.n + detail.label}>
                      <span className="hiw-detail-n">{detail.n}</span>
                      <span className="hiw-detail-label">{detail.label}</span>
                      {detail.days ? <span className="hiw-detail-days">{detail.days}</span> : null}
                    </li>
                  ))}
                </ol>
              ) : null}
            </motion.article>
          ))}
        </div>

        {ctaLabel && ctaHref ? (
          <div className="hiw-cta">
            <a className="btn btn-ghost btn-arrow" href={ctaHref}>
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>

      <style>{`
        .hiw-section {
          width: 100%;
          background: var(--paper, #F7F5F0);
          padding: 96px 0;
        }
        .hiw-inner {
          max-width: var(--container-max, 1240px);
          margin: 0 auto;
          padding: 0 32px;
        }
        .hiw-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 72px;
        }
        .hiw-header .display-2 { margin-bottom: 16px; }
        .hiw-header .lede { margin: 0 auto; max-width: 580px; }
        .hiw-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 36px;
        }
        .hiw-connector {
          display: block;
          position: absolute;
          left: 16.666%;
          right: 16.666%;
          top: calc(176px + 8px);
          height: 44px;
          pointer-events: none;
          z-index: 0;
        }
        .hiw-connector-line {
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 1px;
          background: linear-gradient(to right, var(--bone, #E5E2DA) 0%, var(--rosso, #C41E3A) 50%, var(--bone, #E5E2DA) 100%);
          transform-origin: left center;
        }
        .hiw-col {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 0;
        }
        .hiw-vignette {
          width: 100%;
          height: 176px;
          min-height: 176px;
          background: var(--cream, #FAFAF7);
          border: 1px solid var(--bone, #E5E2DA);
          box-shadow: var(--shadow-soft, 0 1px 3px rgba(20,20,20,0.04), 0 8px 24px rgba(20,20,20,0.04));
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .hiw-chrome {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-bottom: 1px solid var(--bone, #E5E2DA);
          background: var(--paper, #F7F5F0);
        }
        .hiw-traffic { display: flex; gap: 5px; }
        .hiw-traffic i {
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--bone, #E5E2DA);
        }
        .hiw-traffic i:nth-child(1) { background: #D4A5A5; }
        .hiw-traffic i:nth-child(2) { background: #D4CFC5; }
        .hiw-traffic i:nth-child(3) { background: #C5D4C8; }
        .hiw-chrome-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--stone, #6B6B66);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .hiw-vignette-body {
          padding: 12px 14px 14px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .hiw-vignette-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .hiw-vignette-title {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink, #141414);
        }
        .hiw-vignette-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--rosso, #C41E3A);
          background: rgba(196, 30, 58, 0.08);
          border: 1px solid rgba(196, 30, 58, 0.16);
          padding: 3px 7px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .hiw-vignette-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .hiw-vignette-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          text-align: left;
          padding: 6px 8px;
          background: var(--paper, #F7F5F0);
          border: 1px solid transparent;
        }
        .hiw-vignette-list li.is-active {
          border-color: rgba(196, 30, 58, 0.22);
          background: rgba(196, 30, 58, 0.04);
        }
        .hiw-vignette-list strong {
          display: block;
          font-family: 'General Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: var(--ink, #141414);
          line-height: 1.3;
        }
        .hiw-vignette-list em {
          display: block;
          font-style: normal;
          font-size: 11px;
          color: var(--stone, #6B6B66);
          line-height: 1.35;
          margin-top: 1px;
        }
        .hiw-row-icon {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--rosso, #C41E3A);
          background: var(--cream, #FAFAF7);
          border: 1px solid var(--bone, #E5E2DA);
        }
        .hiw-bar {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
          padding: 3px;
          background: var(--cream, #FAFAF7);
          border: 1px solid var(--bone, #E5E2DA);
        }
        .hiw-bar span { display: block; height: 7px; background: var(--rosso, #C41E3A); opacity: 0.75; }
        .hiw-pulse-dot {
          width: 8px;
          height: 8px;
          margin: 7px 7px 0 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--bone, #E5E2DA);
        }
        .hiw-pulse-dot.is-on {
          background: var(--rosso, #C41E3A);
          box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.12);
        }
        .hiw-node-row {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          margin: 8px 0 4px;
        }
        .hiw-node {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--paper, #F7F5F0);
          border: 1.5px solid var(--rosso, #C41E3A);
          color: var(--rosso, #C41E3A);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          font-weight: 500;
        }
        .hiw-title {
          font-family: 'Editorial New', Georgia, serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 1.15;
          color: var(--ink, #141414);
          margin: 8px 0 6px;
        }
        .hiw-days {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--rosso, #C41E3A);
          margin-bottom: 14px;
        }
        .hiw-body {
          font-family: 'General Sans', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-soft, #2A2A2A);
          margin: 0 0 18px;
          max-width: 340px;
        }
        .hiw-details {
          list-style: none;
          margin: 0;
          padding: 0;
          width: 100%;
          max-width: 340px;
          border-top: 1px solid var(--bone, #E5E2DA);
        }
        .hiw-details li {
          display: grid;
          grid-template-columns: 28px 1fr auto;
          gap: 8px;
          align-items: baseline;
          padding: 8px 0;
          border-bottom: 1px solid var(--bone, #E5E2DA);
          text-align: left;
        }
        .hiw-detail-n {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--rosso, #C41E3A);
        }
        .hiw-detail-label { font-size: 13px; color: var(--ink, #141414); }
        .hiw-detail-days {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.06em;
          color: var(--stone, #6B6B66);
        }
        .hiw-cta { display: flex; justify-content: center; margin-top: 56px; }
        @media (max-width: 880px) {
          .hiw-section { padding: 64px 0; }
          .hiw-inner { padding: 0 24px; }
          .hiw-header { margin-bottom: 40px; }
          .hiw-grid { grid-template-columns: 1fr; gap: 0; }
          .hiw-connector { display: none; }
          .hiw-col {
            border-top: 1px solid var(--bone, #E5E2DA);
            padding: 36px 0 8px;
          }
          .hiw-col:first-of-type { border-top: 0; padding-top: 0; }
          .hiw-body, .hiw-details { max-width: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hiw-connector-line { transform: scaleX(1) !important; }
        }
      `}</style>
    </section>
  );
}
