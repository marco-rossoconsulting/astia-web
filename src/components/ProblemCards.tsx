"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ProblemCardData {
  tag: string;
  title: string;
  body: string;
  tail: string;
  accent?: boolean;
}

interface ProblemCardsProps {
  headline?: string;
  headlineEm?: string;
  subheadline?: string;
  cards?: ProblemCardData[];
}

const defaultCards: ProblemCardData[] = [
  {
    tag: "Option A",
    title: "The digital agency",
    body: "CHF 15,000 to 40,000 upfront. Three to six months. Then a maintenance retainer of CHF 500 to 2,000 per month for changes you used to make in five minutes. Beautiful, often. Affordable, rarely.",
    tail: "Too expensive.",
  },
  {
    tag: "Option B",
    title: "The website builder",
    body: "Wix, Squarespace, GoDaddy. Cheap monthly, drag-and-drop, looks like every other small hotel website. Slow on mobile. Mediocre on Google. You never quite own it.",
    tail: "Too generic.",
  },
  {
    tag: "Option C",
    title: "The WordPress site",
    body: "Powers 43% of the web. Also 94% of hacked websites. Plugin conflicts, security patches, hosting bills, the developer who built it has moved on. You inherited a maintenance liability.",
    tail: "Too fragile.",
  },
];

export default function ProblemCards({
  headline = "Three ways hotels get a website today.",
  headlineEm = "None of them work.",
  subheadline = "Every independent property eventually faces the same decision, and every option asks them to compromise on something they should not have to.",
  cards = defaultCards,
}: ProblemCardsProps) {
  return (
    <section
      style={{
        width: "100%",
        background: "var(--paper, #F7F5F0)",
        padding: "96px 16px",
      }}
      className="problem-cards-section"
    >
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "var(--container-max, 1240px)",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ marginBottom: "64px" }}
        >
          <h2
            style={{
              fontFamily: "'Editorial New', Georgia, serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.018em",
              color: "var(--ink, #141414)",
              margin: 0,
              maxWidth: "780px",
            }}
          >
            {headline}{" "}
            <span style={{ color: "var(--rosso, #C41E3A)", fontStyle: "italic" }}>
              {headlineEm}
            </span>
          </h2>
          <p
            style={{
              marginTop: "20px",
              maxWidth: "640px",
              fontSize: "clamp(17px, 1.4vw, 20px)",
              lineHeight: 1.55,
              color: "var(--ink-soft, #2A2A2A)",
              fontFamily: "'General Sans', -apple-system, sans-serif",
            }}
          >
            {subheadline}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="problem-cards-grid"
        >
          {cards.map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -6 }}
              style={{
                position: "relative",
                borderRadius: "0",
                border: "1px solid var(--bone, #E5E2DA)",
                background: "var(--cream, #FAFAF7)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                cursor: "default",
                transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--paper, #F7F5F0)";
                el.style.borderColor = "var(--rosso, #C41E3A)";
                el.style.boxShadow = "0 4px 12px rgba(20,20,20,0.08), 0 20px 60px rgba(20,20,20,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--cream, #FAFAF7)";
                el.style.borderColor = "var(--bone, #E5E2DA)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Tag */}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--stone-soft, #9A9A93)",
                }}
              >
                {card.tag}
              </span>

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Editorial New', Georgia, serif",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: "var(--ink, #141414)",
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "var(--ink-soft, #2A2A2A)",
                    fontFamily: "'General Sans', -apple-system, sans-serif",
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>

              {/* Tail / bottom */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--bone, #E5E2DA)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Editorial New', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "17px",
                    color: "var(--rosso, #C41E3A)",
                  }}
                >
                  {card.tail}
                </span>
                <ArrowUpRight
                  size={20}
                  style={{ color: "var(--stone, #6B6B66)", transition: "color 0.2s" }}
                  className="problem-card-arrow"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .problem-cards-section {
            padding: 64px 16px !important;
          }
          .problem-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
