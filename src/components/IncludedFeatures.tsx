"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  ClipboardCheck,
  Database,
  GitBranch,
  Globe,
  Languages,
  Lock,
  Mail,
  Server,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ICONS: Record<string, typeof Globe> = {
  Globe,
  Shield,
  ShieldCheck,
  Lock,
  Database,
  ClipboardCheck,
  Languages,
  Mail,
  Bot,
  Users,
  GitBranch,
  Server,
};

export interface IncludedFeature {
  icon: string;
  title: string;
  description: string;
}

interface IncludedFeaturesProps {
  eyebrow: string;
  headlinePre: string;
  headlineEm: string;
  lede?: string;
  features: IncludedFeature[];
}

function resolveIcon(name: string) {
  return ICONS[name] ?? Server;
}

export default function IncludedFeatures({
  eyebrow,
  headlinePre,
  headlineEm,
  lede,
  features,
}: IncludedFeaturesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section inc-section" aria-labelledby="inc-heading">
      <div className="container inc-inner">
        <motion.header
          className="inc-header"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          {eyebrow ? <span className="section-num">{eyebrow}</span> : null}
          <h2 id="inc-heading" className="display-2">
            {headlinePre} <span className="editorial-i">{headlineEm}</span>
          </h2>
          {lede ? <p className="lede">{lede}</p> : null}
        </motion.header>

        <div className="inc-grid">
          {features.map((feature, i) => {
            const Icon = resolveIcon(feature.icon);
            return (
              <motion.article
                key={feature.title + feature.icon}
                className="inc-item"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  ease: EASE,
                  delay: reduceMotion ? 0 : i * 0.06,
                }}
              >
                <div className="inc-item-head">
                  <span className="inc-icon-well" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="inc-title">{feature.title}</h3>
                </div>
                <p className="inc-desc">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style>{`
        .inc-header {
          text-align: left;
          max-width: 720px;
          margin: 0 0 56px;
        }
        .inc-header .display-2 { margin-bottom: 0; }
        .inc-header .lede { margin-top: 16px; margin-bottom: 0; }
        .inc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .inc-item {
          min-width: 0;
        }
        .inc-item-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }
        .inc-icon-well {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cream, #FAFAF7);
          border: 1px solid var(--bone, #E5E2DA);
          box-shadow: var(--shadow-soft, 0 1px 3px rgba(20,20,20,0.04), 0 8px 24px rgba(20,20,20,0.04));
          color: var(--rosso, #C41E3A);
          border-radius: 0;
        }
        .inc-title {
          font-family: 'General Sans', sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.3;
          color: var(--ink, #141414);
          margin: 0;
        }
        .inc-desc {
          font-family: 'General Sans', sans-serif;
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink-soft, #2A2A2A);
          margin: 0;
        }
        @media (min-width: 640px) {
          .inc-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 36px;
          }
        }
        @media (min-width: 1024px) {
          .inc-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 48px 40px;
          }
        }
        @media (max-width: 880px) {
          .inc-header { margin-bottom: 40px; }
        }
      `}</style>
    </section>
  );
}
