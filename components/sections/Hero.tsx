"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

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

// ── BlurText — ReactBits-style staggered word-by-word reveal ──
function BlurText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={`flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(12px)", opacity: 0, y: -32 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: EASE,
            delay: 0.4 + i * 0.14,
          }}
          style={{
            display: "inline-block",
            willChange: "transform,filter,opacity",
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

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

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Background: Variant B — CSS gradient + HUD grid ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 60%), #0A0A0A",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.45) contrast(1.3) saturate(1.1)",
          }}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <HUDGrid />
      </div>

      {/* ── Bottom overlay for text readability ── */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0A0A0A 0%, transparent 50%)",
        }}
      />

      {/* ── Glassmorphism content block ── */}
      <div
        className="relative z-10 w-full"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 8%",
        }}
      >
        <div className="w-full max-w-2xl">
          {/* Glassmorphism panel */}
          <div className="relative">
            {/* Inner refraction edge */}
            <div
              className="absolute inset-0 rounded-none pointer-events-none"
              style={{
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.6em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
                textShadow:
                  "0 0 20px rgba(255,255,255,0.8), 0 0 60px rgba(0,212,255,0.4)",
                position: "absolute",
                top: "32px",
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                zIndex: 20,
              }}
            >
              Design Beyond Limits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
