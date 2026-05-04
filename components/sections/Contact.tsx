"use client";

import type { ReactElement } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const socials = [
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

function SocialIcon({ platform }: { platform: string }): ReactElement {
  const icons: Record<string, ReactElement> = {
    Behance: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3.011 11.688h4.44c3.479 0 3.46-4.924 0-4.924h-4.44v4.924zm0-6.031h4.44c3.479 0 3.46-4.924 0-4.924h-4.44v4.924z" />
      </svg>
    ),
    Instagram: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    LinkedIn: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };
  return icons[platform] || null;
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headlineRef, { once: true, margin: "-15% 0px" });
  const [isHoveringEmail, setIsHoveringEmail] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3],
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        position: "relative",
        minHeight: "100dvh",
        background: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      {/* Cinematic Background Layer */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          y: backgroundY,
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 100%, rgba(0, 212, 255, 0.04) 0%, transparent 50%),
            linear-gradient(to bottom, #0a0a0a 0%, #080808 100%)
          `,
        }}
      />

      {/* Subtle Horizontal Light Streaks */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.01) 2px,
              rgba(255, 255, 255, 0.01) 4px
            )
          `,
          pointerEvents: "none",
        }}
      />

      {/* Top Fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "200px",
          background:
            "linear-gradient(to bottom, rgba(10, 10, 10, 0.8) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Corner Accent Lines */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "clamp(2rem, 5vw, 6rem)",
          width: "60px",
          height: "1px",
          background:
            "linear-gradient(to right, rgba(0, 212, 255, 0.4), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "clamp(2rem, 5vw, 6rem)",
          width: "1px",
          height: "40px",
          background:
            "linear-gradient(to bottom, rgba(0, 212, 255, 0.4), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "clamp(2rem, 5vw, 6rem)",
          width: "60px",
          height: "1px",
          background:
            "linear-gradient(to left, rgba(0, 212, 255, 0.4), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "clamp(2rem, 5vw, 6rem)",
          width: "1px",
          height: "40px",
          background:
            "linear-gradient(to bottom, rgba(0, 212, 255, 0.4), transparent)",
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{
          position: "relative",
          opacity: contentOpacity,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(6rem, 12vh, 10rem) clamp(2rem, 8vw, 12rem)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "clamp(3rem, 8vh, 6rem)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(0, 212, 255, 0.7)",
            }}
          >
            04
          </span>
          <span
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(0, 212, 255, 0.3)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(245, 245, 245, 0.4)",
            }}
          >
            Contact
          </span>
        </motion.div>

        {/* Headline Area Glow - Visible */}
        <motion.div
          style={{
            position: "absolute",
            top: "38%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(0, 212, 255, 0.3) 0%, rgba(0, 212, 255, 0.1) 40%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(50px)",
            zIndex: 0,
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.9, 1.05, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Headline Block */}
        <div ref={headlineRef} style={{ position: "relative", zIndex: 1 }}>
          {/* Closing Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 8rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#fafafa",
              marginBottom: "clamp(1.5rem, 4vh, 3rem)",
            }}
          >
            <span style={{ display: "block" }}>READY TO</span>
            <motion.span
              style={{
                display: "block",
                color: "rgba(245, 245, 245, 0.15)",
                WebkitTextStroke: "1px rgba(0, 212, 255, 0.5)",
              }}
              animate={{
                y: [-4, 4, -4],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              CREATE?
            </motion.span>
          </motion.h2>

          {/* Refined Subline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.2vw, 16px)",
              lineHeight: 1.7,
              color: "rgba(245, 245, 245, 0.45)",
              maxWidth: "42ch",
              marginBottom: "clamp(3rem, 8vh, 5rem)",
            }}
          >
            From initial concept to final execution, every project is an
            opportunity to push boundaries. Let&apos;s build something
            extraordinary together.
          </motion.p>
        </div>

        {/* Email Glow Behind - Always Visible */}
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "140px",
            background:
              "radial-gradient(ellipse, rgba(0, 212, 255, 0.12) 0%, rgba(0, 212, 255, 0.04) 50%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(25px)",
            zIndex: 0,
            opacity: isHoveringEmail ? 1 : 0.4,
            transition: "opacity 0.6s ease",
          }}
          animate={{
            scale: isHoveringEmail ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: EASE }}
        />

        {/* Premium Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          style={{
            marginBottom: "clamp(4rem, 10vh, 7rem)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.a
            href="mailto:steel@drake.design"
            onMouseEnter={() => setIsHoveringEmail(true)}
            onMouseLeave={() => setIsHoveringEmail(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              textDecoration: "none",
              padding: "clamp(1.5rem, 4vh, 2.5rem) clamp(2.5rem, 5vw, 4rem)",
              background: isHoveringEmail
                ? "linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 100%)"
                : "linear-gradient(135deg, rgba(0, 212, 255, 0.06) 0%, rgba(0, 212, 255, 0.02) 100%)",
              border: `1px solid ${isHoveringEmail ? "rgba(0, 212, 255, 0.7)" : "rgba(0, 212, 255, 0.25)"}`,
              borderRadius: "8px",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: isHoveringEmail
                ? "0 0 100px rgba(0, 212, 255, 0.25), 0 0 60px rgba(0, 212, 255, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 0 40px rgba(0, 212, 255, 0.08)",
            }}
            animate={{
              scale: isHoveringEmail ? 1.03 : 1,
            }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 3vw, 32px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: isHoveringEmail ? "#00D4FF" : "#fafafa",
                transition: "color 0.4s ease",
                textShadow: isHoveringEmail
                  ? "0 0 20px rgba(0, 212, 255, 0.5)"
                  : "none",
              }}
            >
              steel@drake.design
            </span>
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                x: isHoveringEmail ? 8 : 0,
                opacity: isHoveringEmail ? 1 : 0.6,
              }}
              transition={{ duration: 0.3, ease: EASE }}
              style={{
                color: "#00D4FF",
              }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
          style={{
            marginBottom: "clamp(5rem, 12vh, 8rem)",
          }}
        >
          <Link
            href="mailto:steel@drake.design"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 2.25rem",
              background: "#00D4FF",
              color: "#0a0a0a",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "4px",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 4px 30px rgba(0, 212, 255, 0.2), 0 0 60px rgba(0, 212, 255, 0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 8px 50px rgba(0, 212, 255, 0.35), 0 0 80px rgba(0, 212, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 30px rgba(0, 212, 255, 0.2), 0 0 60px rgba(0, 212, 255, 0.06)";
            }}
          >
            Start a Conversation
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
          style={{
            marginTop: "auto",
            paddingTop: "clamp(3rem, 6vh, 5rem)",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Social Links - Horizontal Layout */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                flexWrap: "wrap",
              }}
            >
              {socials.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.25rem",
                    color: "rgba(245, 245, 245, 0.4)",
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00D4FF";
                    e.currentTarget.style.background =
                      "rgba(0, 212, 255, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(245, 245, 245, 0.4)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <SocialIcon platform={social.label} />
                  <span>{social.label}</span>
                </Link>
              ))}
            </div>

            {/* Copyright & Tagline */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  color: "rgba(245, 245, 245, 0.25)",
                }}
              >
                Steel Drake Studio
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  color: "rgba(0, 212, 255, 0.5)",
                }}
              >
                Precision in Every Detail
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "150px",
          background:
            "linear-gradient(to top, rgba(8, 8, 8, 1) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle Animated Accent Glow */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(0, 212, 255, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Bottom Accent Line */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "80px",
          background:
            "linear-gradient(to bottom, rgba(0, 212, 255, 0.3), transparent)",
          pointerEvents: "none",
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scaleY: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Side Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            bottom: `${15 + i * 8}%`,
            left: `${20 + i * 25}%`,
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            background: "rgba(0, 212, 255, 0.4)",
            pointerEvents: "none",
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </section>
  );
}
