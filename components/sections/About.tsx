"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ambientOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.3, 0.6, 0.6, 0.3],
  );
  const ambientX = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full"
      style={{
        background: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      {/* Subtle Ambient Background Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: ambientOpacity,
          x: ambientX,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "15%",
            width: "60vw",
            height: "60vw",
            maxWidth: "800px",
            maxHeight: "800px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 212, 255, 0.03) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "40vw",
            height: "40vw",
            maxWidth: "500px",
            maxHeight: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 212, 255, 0.02) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      <div
        className="relative"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "clamp(8rem, 18vw, 16rem) clamp(2rem, 6vw, 8rem)",
        }}
      >
        {/* Editorial Layout — Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
          {/* Left — Studio Statement */}
          <div className="lg:col-span-5">
            {/* Subtle Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              viewport={{ once: true }}
              style={{ marginBottom: "2.5rem" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                About
              </span>
            </motion.div>

            {/* Refined Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: "#fafafa",
                marginBottom: "2rem",
              }}
            >
              A studio built on precision, craft, and an unwavering attention to
              detail.
            </motion.h2>

            {/* Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  lineHeight: 1.9,
                  color: "rgba(250, 250, 250, 0.45)",
                  maxWidth: "48ch",
                  marginBottom: "1.5rem",
                }}
              >
                Steel Drake operates at the intersection of industrial design
                and automotive aesthetics. Every project is an opportunity to
                create work that communicates authority and precision.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  lineHeight: 1.9,
                  color: "rgba(250, 250, 250, 0.45)",
                  maxWidth: "48ch",
                }}
              >
                We do not chase trends. We build lasting visual systems that
                stand apart.
              </p>
            </motion.div>
          </div>

          {/* Right — Disciplines & Metrics */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ position: "relative", paddingLeft: "2rem" }}
          >
            {/* Subtle vertical accent line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "0.5rem",
                bottom: "0.5rem",
                width: "1px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(0, 212, 255, 0.3) 30%, rgba(0, 212, 255, 0.3) 70%, transparent)",
              }}
            />

            {/* Disciplines */}
            <div
              style={{
                marginBottom: "clamp(5rem, 10vw, 6rem)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(250, 250, 250, 0.25)",
                  marginBottom: "2.5rem",
                }}
              >
                Disciplines
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {[
                  "Industrial Design",
                  "Automotive Aesthetics",
                  "Visual Branding",
                  "Motion Design",
                ].map((discipline, i) => (
                  <motion.div
                    key={discipline}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      paddingBottom: "1.5rem",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(16px, 1.4vw, 18px)",
                        color: "rgba(250, 250, 250, 0.75)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {discipline}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "10px",
                        color: "var(--accent)",
                        letterSpacing: "0.15em",
                        opacity: 0.6,
                      }}
                    >
                      0{i + 1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(250, 250, 250, 0.25)",
                  marginBottom: "2.5rem",
                }}
              >
                By the Numbers
              </p>
              <div style={{ display: "flex", gap: "clamp(3.5rem, 7vw, 6rem)" }}>
                {[
                  { value: "13+", label: "Years" },
                  { value: "100+", label: "Projects" },
                  { value: "5", label: "Countries" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: 0.4 + i * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.25rem, 3.5vw, 3.25rem)",
                        fontWeight: 600,
                        color: "#fafafa",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(250, 250, 250, 0.3)",
                        marginTop: "0.75rem",
                      }}
                    >
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
