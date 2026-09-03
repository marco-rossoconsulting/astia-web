import { motion, useReducedMotion, type Variants } from "framer-motion";
import RisingParticles from "@components/react-bits/RisingParticles";

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface HowItWorksHeroProps {
  eyebrow?: string;
  headlinePre?: string;
  headlineEm?: string;
  headlinePost?: string;
  lede?: string;
}

export default function HowItWorksHero({
  eyebrow,
  headlinePre = "",
  headlineEm = "",
  headlinePost = "",
  lede = "",
}: HowItWorksHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hiw-hero">
      <RisingParticles
        style={{ position: "absolute", inset: 0, zIndex: -2 }}
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
        <motion.span
          className="eyebrow eyebrow-rosso"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          className="display-1"
          style={{ marginTop: 0, marginBottom: 32 }}
          variants={item}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
        >
          {headlinePre}
          <span className="editorial-i">{headlineEm}</span>
          {headlinePost}
        </motion.h1>

        <motion.p
          className="lede"
          variants={item}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          transition={{ delay: reduceMotion ? 0 : 0.08 }}
        >
          {lede}
        </motion.p>
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
        @media (max-width: 640px) {
          .hiw-hero {
            padding-top: 88px;
            padding-bottom: 56px;
          }
        }
      `}</style>
    </section>
  );
}
