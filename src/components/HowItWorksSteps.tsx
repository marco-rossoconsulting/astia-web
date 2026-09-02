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
  eyebrow?: string;
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
