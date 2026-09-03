"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { NeuroNoise } from "@paper-design/shaders-react";

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface Hero24Props {
  chipText?: string;
  headlinePre?: string;
  headlineEm?: string;
  headlinePost?: string;
  subheadline?: string;
  primaryCta?: string;
  primaryCtaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  partnersLabel?: string;
}

export function Hero24({
  chipText = "Astia Web · AI-managed sites",
  headlinePre = "The first ",
  headlineEm = "AI-managed",
  headlinePost = " website service for independent hotels.",
  subheadline = "Built on Astro for speed. Run by AI for cost. Designed for hospitality. Launch in 2–3 weeks. From CHF 150/month.",
  primaryCta = "Apply for a site",
  primaryCtaHref = "/apply",
  secondaryCta = "See how it works",
  secondaryCtaHref = "/how-it-works",
  partnersLabel = "Powering websites for",
}: Hero24Props) {
  const reduceMotion = useReducedMotion();

  // Astia brand palette — warm light mode
  const neuro = {
    colorBack: "#F7F5F0",
    colorMid: "#D4CFC5",
    colorFront: "#C41E3A",
    brightness: 0.55,
    contrast: 0.42,
  };

  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        alignItems: "center",
        overflow: "hidden",
        background: "#F7F5F0",
        padding: "64px 16px 80px",
      }}
      className="hero-24-section"
    >
      <NeuroNoise
        className="absolute inset-0 h-full w-full"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        colorBack={neuro.colorBack}
        colorMid={neuro.colorMid}
        colorFront={neuro.colorFront}
        brightness={neuro.brightness}
        contrast={neuro.contrast}
        scale={1.15}
        offsetX={0.42}
        speed={reduceMotion ? 0 : 0.55}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 72% 58% at 50% 42%, rgba(247,245,240,0.88) 0%, rgba(247,245,240,0.55) 48%, rgba(247,245,240,0.18) 78%, rgba(247,245,240,0) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(247,245,240,0) 60%, rgba(247,245,240,0.92))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          margin: "0 auto",
          width: "100%",
          maxWidth: "1240px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "780px",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <motion.div
            variants={item}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "9999px",
              border: "1px solid rgba(229, 226, 218, 0.8)",
              background: "rgba(250, 250, 247, 0.75)",
              padding: "7px 16px",
              fontSize: "12px",
              fontWeight: 500,
              color: "#2A2A2A",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 1px 3px rgba(20,20,20,0.04)",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.04em",
            }}
          >
            <span style={{ position: "relative", display: "flex", height: "8px", width: "8px" }}>
              <span
                style={{
                  position: "absolute",
                  display: "inline-flex",
                  height: "100%",
                  width: "100%",
                  borderRadius: "9999px",
                  background: "#C41E3A",
                  opacity: 0.6,
                  animation: reduceMotion ? "none" : "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
              <span
                style={{
                  position: "relative",
                  display: "inline-flex",
                  height: "8px",
                  width: "8px",
                  borderRadius: "9999px",
                  background: "#C41E3A",
                }}
              />
            </span>
            {chipText}
          </motion.div>

          <h1
            style={{
              marginTop: "32px",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: "#141414",
              fontFamily: "'Editorial New', Georgia, serif",
              opacity: 1,
            }}
          >
            {headlinePre}
            <span style={{ fontStyle: "italic" }}>{headlineEm}</span>
            {headlinePost}
          </h1>

          <motion.p
            variants={item}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              marginTop: "24px",
              maxWidth: "540px",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "clamp(17px, 1.4vw, 20px)",
              lineHeight: 1.55,
              color: "#2A2A2A",
              fontFamily: "'General Sans', -apple-system, sans-serif",
            }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            variants={item}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              marginTop: "40px",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
            className="hero-24-ctas"
          >
            <a
              href={primaryCtaHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "0",
                background: "#141414",
                color: "#F7F5F0",
                padding: "16px 28px",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background 0.2s ease",
                fontFamily: "'General Sans', sans-serif",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#C41E3A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#141414";
              }}
            >
              {primaryCta}
              <ArrowRight size={16} />
            </a>
            <a
              href={secondaryCtaHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "0",
                border: "1px solid #E5E2DA",
                background: "rgba(250, 250, 247, 0.6)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "#141414",
                padding: "16px 28px",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "border-color 0.2s ease, color 0.2s ease",
                fontFamily: "'General Sans', sans-serif",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C41E3A";
                (e.currentTarget as HTMLElement).style.color = "#C41E3A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E5E2DA";
                (e.currentTarget as HTMLElement).style.color = "#141414";
              }}
            >
              {secondaryCta}
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        @media (min-width: 640px) {
          .hero-24-section {
            padding: 80px 24px 100px !important;
          }
          .hero-24-ctas {
            flex-direction: row !important;
            width: auto !important;
            justify-content: center !important;
          }
        }
        @media (min-width: 1024px) {
          .hero-24-section {
            align-items: center !important;
            padding: 0 32px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-24-section h1 { opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
}

export default Hero24;
