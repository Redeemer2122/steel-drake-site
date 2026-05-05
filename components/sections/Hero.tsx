"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Cinematic Video Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: videoScale,
          y: useTransform(scrollYProgress, [0, 1], [0, -30]),
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Gradient Overlay - Darker on left for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 30%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.15) 100%)",
        }}
      />
      {/* Right-side video darkening for contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0) 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, transparent 20%, transparent 70%, rgba(10,10,10,0.8) 100%)",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative h-full"
        style={{
          y: contentY,
          opacity: contentOpacity,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100dvh",
          padding: "clamp(4rem, 10vw, 12rem)",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {/* Elegant Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.3 }}
          className="inline-flex"
          style={{ marginBottom: "3rem" }}
        >
          <div
            style={{
              padding: "0.75rem 1.5rem",
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "100px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245, 245, 245, 0.7)",
              }}
            >
              Steel Drake Studio
            </span>
          </div>
        </motion.div>

        {/* Refined Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 9vw, 11rem)",
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            color: "#fafafa",
            marginBottom: "2.5rem",
            textShadow: "0 2px 40px rgba(0,0,0,0.5)",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.5 }}
            style={{ display: "block" }}
          >
            FORGED
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.7 }}
            style={{
              display: "block",
              color: "var(--accent)",
            }}
          >
            IN
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.9 }}
            style={{ display: "block" }}
          >
            PRECISION
          </motion.span>
        </h1>

        {/* Elegant Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 1.1 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(16px, 1.4vw, 19px)",
            lineHeight: 1.7,
            color: "rgba(250, 250, 250, 0.55)",
            maxWidth: "42ch",
            marginBottom: "3rem",
          }}
        >
          Industrial design, automotive concepts, branding, and motion — united
          in a singular vision of precision and craft.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 1.3 }}
        >
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 cursor-pointer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.3vw, 17px)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "rgba(250, 250, 250, 0.85)",
              textDecoration: "none",
              background: "none",
              border: "none",
              padding: 0,
            }}
            aria-label="Start a Project - Scroll to contact section"
          >
            <span className="relative">
              Start a Project
              {/* Underline */}
              <span
                className="absolute bottom-0 left-0 w-full h-px origin-left scale-x-0 group-hover:scale-x-100"
                style={{
                  background: "var(--accent)",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.05s",
                }}
              />
            </span>
            {/* Arrow */}
            <span
              className="inline-flex"
              style={{
                color: "var(--accent)",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "0.08s",
                display: "inline-flex",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 1.6 }}
          className="mt-auto"
          style={{
            paddingTop: "3rem",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            {/* Stats */}
            <div style={{ display: "flex", gap: "4rem" }}>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(32px, 3.5vw, 48px)",
                    fontWeight: 700,
                    color: "#fafafa",
                    lineHeight: 1,
                  }}
                >
                  12+
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(250, 250, 250, 0.3)",
                    marginTop: "0.5rem",
                  }}
                >
                  Years
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(32px, 3.5vw, 48px)",
                    fontWeight: 700,
                    color: "#fafafa",
                    lineHeight: 1,
                  }}
                >
                  200+
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(250, 250, 250, 0.3)",
                    marginTop: "0.5rem",
                  }}
                >
                  Projects
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(32px, 3.5vw, 48px)",
                    fontWeight: 700,
                    color: "#fafafa",
                    lineHeight: 1,
                  }}
                >
                  24
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(250, 250, 250, 0.3)",
                    marginTop: "0.5rem",
                  }}
                >
                  Awards
                </p>
              </div>
            </div>

            {/* Location */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    opacity: 0.9,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(250, 250, 250, 0.45)",
                  }}
                >
                  Available for Projects
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  opacity: 0.8,
                }}
              >
                Bishkek, Kyrgyzstan
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        style={{ zIndex: 15 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "50px",
            background:
              "linear-gradient(to bottom, rgba(250, 250, 250, 0.2), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
