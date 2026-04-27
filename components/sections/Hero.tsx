"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const STAGGER_DELAY = 0.12;
const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 1.02 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

const stats = [
  { value: "767K+", label: "Views" },
  { value: "24.8K", label: "Appreciations" },
  { value: "13+", label: "Years Experience" },
];

function HUDGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hud-grid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hud-grid)" />
    </svg>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 right-8 md:right-12 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.6, ease: EASE }}
    >
      <span
        className="text-[10px] font-body font-medium tracking-[0.2em] text-(--text-secondary) uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        Scroll
      </span>
      <div className="w-px h-10 overflow-hidden relative">
        <motion.div
          className="w-full bg-linear-to-b from-accent to-transparent absolute top-0"
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
}

function StatCounter({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1"
      variants={itemVariants}
    >
      <span className="font-display text-xl md:text-2xl font-black text-accent tracking-tight">
        {value}
      </span>
      <span className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-(--text-secondary)">
        {label}
      </span>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* ── Background: Variant B — CSS gradient + HUD grid ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 60%), #0A0A0A",
        }}
      >
        <HUDGrid />
      </div>

      {/* ── Bottom overlay for text readability ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0A0A0A 0%, transparent 50%)",
        }}
      />

      {/* ── Grain texture (inherited from globals.css via body:after) ── */}

      {/* ── Glassmorphism content block ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-[720px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glassmorphism panel */}
          <div
            className="relative"
            style={{
              background: "rgba(10, 10, 10, 0.6)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "48px 56px",
            }}
          >
            {/* Inner refraction edge */}
            <div
              className="absolute inset-0 rounded-none pointer-events-none"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            />

            {/* Label */}
            <motion.div variants={itemVariants}>
              <SectionLabel index="01">
                Multidisciplinary Designer · Bishkek
              </SectionLabel>
            </motion.div>

            {/* Massive headline */}
            <motion.h1
              className="font-display font-black uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(48px,8vw,120px)] my-6"
              style={{ lineHeight: 0.95 }}
              variants={itemVariants}
            >
              Design
              <br />
              <span style={{ color: "var(--accent)" }}>Beyond</span>
              <br />
              Limits
            </motion.h1>

            {/* Description */}
            <motion.p
              className="font-body text-[15px] text-(--text-secondary) max-w-[400px] leading-relaxed"
              style={{ lineHeight: 1.6 }}
              variants={itemVariants}
            >
              Industrial design, automotive concepts, branding and motion.
              <br />
              767K+ views on Behance. Featured in Best of Behance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 mt-10 flex-wrap"
              variants={itemVariants}
            >
              <Button variant="primary">View Works</Button>
              <Button variant="outline">Get in Touch</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Stats row at bottom ── */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-auto pb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex gap-8 md:gap-16 items-start flex-wrap">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex gap-8 md:gap-16 items-start">
              <StatCounter value={stat.value} label={stat.label} index={i} />
              {i < stats.length - 1 && (
                <div
                  className="w-px self-stretch"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <ScrollIndicator />

      {/* ── Mobile responsive adjustments via inline style ── */}
      <style>{`
        @media (max-width: 640px) {
          .hero-glass-panel {
            padding: 32px 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
