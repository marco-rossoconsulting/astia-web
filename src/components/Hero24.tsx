"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { NeuroNoise } from "@paper-design/shaders-react";

/**
 * Entrance animations here are CSS, not JS. The markup ships from the server
 * already visible and starts animating on first paint, so the hero no longer
 * waits for React (and the shader bundle) to hydrate before it appears.
 */

interface Hero24Props {
  chipText?: string;
  headlinePre?: string;
  headlineEm?: string;
  headlinePost?: string;
  subheadline?: string;
  badgeText?: string;
  primaryCta?: string;
  primaryCtaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  partnersLabel?: string;
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

export function Hero24({
  chipText = "Astia Web · AI-managed sites",
  headlinePre = "The first",
  headlineEm = "AI built and managed",
  headlinePost = " website service for Hospitality.",
  subheadline = "The AI-centric website service built for independent hotels.",
  badgeText = "Built on Astro · Live in 2–3 weeks · No upfront cost",
  primaryCta = "Apply for a site",
  primaryCtaHref = "/apply",
  secondaryCta = "See how it works",
  secondaryCtaHref = "/how-it-works",
}: Hero24Props) {
  const reduceMotion = usePrefersReducedMotion();
  const [shaderReady, setShaderReady] = useState(false);

  // Reveal the canvas only once it has had a frame to paint, so it crossfades
  // out of the static backdrop below instead of popping in over it.
  useEffect(() => {
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setShaderReady(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

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
        padding: "64px 16px 80px",
      }}
      className="hero-24-section"
    >
      {/* Static first frame: approximates the shader palette, painted immediately. */}
      <div aria-hidden="true" className="hero-24-backdrop" />

      <div
        aria-hidden="true"
        className={`hero-24-canvas${shaderReady ? " is-ready" : ""}`}
      >
        <NeuroNoise
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
      </div>

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
          <div
            className="hero-24-rise hero-24-chip"
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
              <span className="hero-24-ping" />
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
          </div>

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
            {headlinePre}{" "}
            <span style={{ fontStyle: "italic" }}>{headlineEm}</span>
            {headlinePost}
          </h1>

          <p
            className="hero-24-rise hero-24-sub"
            style={{
              marginTop: "24px",
              maxWidth: "620px",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "clamp(17px, 1.4vw, 20px)",
              lineHeight: 1.55,
              color: "#2A2A2A",
              fontFamily: "'General Sans', -apple-system, sans-serif",
            }}
          >
            {subheadline}
          </p>

          {badgeText ? (
            <p
              className="hero-24-rise hero-24-badge"
              style={{
                marginTop: "18px",
                marginBottom: 0,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6B6B66",
              }}
            >
              {badgeText}
            </p>
          ) : null}

          <div
            className="hero-24-rise hero-24-ctas"
            style={{
              marginTop: "40px",
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
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
          </div>
        </div>
      </div>

      <style>{`
        .hero-24-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse 55% 60% at 68% 38%, rgba(196, 30, 58, 0.10) 0%, rgba(196, 30, 58, 0) 70%),
            radial-gradient(ellipse 60% 70% at 58% 46%, rgba(212, 207, 197, 0.55) 0%, rgba(212, 207, 197, 0) 72%),
            radial-gradient(ellipse 50% 60% at 24% 64%, rgba(212, 207, 197, 0.38) 0%, rgba(212, 207, 197, 0) 70%),
            #F7F5F0;
        }
        .hero-24-canvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 700ms ease-out;
        }
        .hero-24-canvas.is-ready { opacity: 1; }

        @keyframes hero24Rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: none; }
        }
        .hero-24-rise {
          animation: hero24Rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero-24-chip  { animation-delay: 0.05s; }
        .hero-24-sub   { animation-delay: 0.14s; }
        .hero-24-badge { animation-delay: 0.20s; }
        .hero-24-ctas  { animation-delay: 0.26s; }

        .hero-24-ping {
          position: absolute;
          display: inline-flex;
          height: 100%;
          width: 100%;
          border-radius: 9999px;
          background: #C41E3A;
          opacity: 0.6;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
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
          .hero-24-rise { animation: none !important; opacity: 1 !important; transform: none !important; }
          .hero-24-ping { animation: none !important; }
          .hero-24-canvas { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

export default Hero24;
