"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const capabilities = [
  {
    number: "01",
    title: "Industrial Design",
    description:
      "Product design and conceptualization with focus on functionality and aesthetics. From initial sketches to production-ready 3D models.",
    keywords: ["Product Strategy", "3D Modeling", "Prototyping", "Materials"],
  },
  {
    number: "02",
    title: "Automotive Concepts",
    description:
      "Vehicle exteriors, interiors, and futuristic mobility solutions. Visionary concepts that push boundaries while remaining feasible.",
    keywords: ["Exterior Design", "Interior Concepts", "CMF", "Visualization"],
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Visual systems, logos, and brand guidelines for emerging brands. Building identities that communicate authority and precision.",
    keywords: ["Logo Design", "Visual Systems", "Guidelines", "Art Direction"],
  },
  {
    number: "04",
    title: "Motion & 3D",
    description:
      "3D visualization, animation, and motion graphics for digital presence. Bringing concepts to life through cinematic rendering.",
    keywords: ["3D Rendering", "Animation", "Motion Graphics", "Film"],
  },
];

function CapabilityRow({
  capability,
  index,
}: {
  capability: (typeof capabilities)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: EASE,
        delay: 0.05 + index * 0.07,
      }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      style={{
        paddingTop: "clamp(2.5rem, 5vw, 4rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
        marginLeft: "calc(clamp(1.5rem, 4vw, 4rem) * -1)",
        marginRight: "calc(clamp(1.5rem, 4vw, 4rem) * -1)",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
        position: "relative",
      }}
    >
      {/* Hover background - stronger gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 212, 255, 0.08) 0%, rgba(0, 212, 255, 0.03) 30%, transparent 70%)",
        }}
      />

      {/* Left accent line - prominent on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          width: "2px",
          background:
            "linear-gradient(to bottom, var(--accent) 0%, rgba(0, 212, 255, 0.3) 100%)",
          opacity: 0,
          boxShadow: "0 0 12px rgba(0, 212, 255, 0.5)",
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group-hover:pl-2 transition-all duration-300">
        {/* Number */}
        <div className="lg:col-span-1">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(12px, 1vw, 14px)",
              fontWeight: 600,
              color: "rgba(250, 250, 250, 0.4)",
              letterSpacing: "0.12em",
              transition: "color 0.25s ease",
            }}
            className="group-hover:text-accent"
          >
            {capability.number}
          </span>
        </div>

        {/* Title */}
        <div className="lg:col-span-4">
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 2.3vw, 2.1rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "rgba(250, 250, 250, 0.92)",
              marginBottom: "0",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="group-hover:translate-x-2 group-hover:text-white"
          >
            {capability.title}
          </h3>
        </div>

        {/* Description */}
        <div className="lg:col-span-5">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.1vw, 15px)",
              lineHeight: 1.8,
              color: "rgba(250, 250, 250, 0.55)",
              maxWidth: "48ch",
              transition: "color 0.25s ease",
            }}
            className="group-hover:text-white/80"
          >
            {capability.description}
          </p>
        </div>

        {/* Keywords - clean inline text */}
        <div className="lg:col-span-2">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem 1rem",
            }}
          >
            {capability.keywords.map((keyword) => (
              <span
                key={keyword}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(11px, 0.9vw, 13px)",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "rgba(250, 250, 250, 0.45)",
                  transition: "color 0.25s ease",
                }}
                className="group-hover:text-white/75"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ambientOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.2, 0.5, 0.5, 0.2],
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full"
      style={{
        background: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      {/* Subtle Ambient Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: ambientOpacity }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70vw",
            height: "70vw",
            maxWidth: "900px",
            maxHeight: "900px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 212, 255, 0.025) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      <div
        className="relative"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "clamp(8rem, 18vw, 14rem) clamp(2rem, 6vw, 8rem)",
        }}
      >
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              viewport={{ once: true }}
            >
              <SectionLabel index="03" className="mb-8">
                SERVICES
              </SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#fafafa",
              }}
            >
              What We
              <br />
              <span style={{ color: "var(--accent)" }}>Deliver</span>
            </motion.h2>
          </div>

          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.3vw, 17px)",
                lineHeight: 1.85,
                color: "rgba(250, 250, 250, 0.45)",
                maxWidth: "46ch",
              }}
            >
              Four disciplines, one unified vision. Each capability refined
              through years of practice and a relentless pursuit of excellence.
            </p>
          </motion.div>
        </div>

        {/* Capabilities List */}
        <div
          className="relative"
          style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          {capabilities.map((capability, index) => (
            <CapabilityRow
              key={capability.number}
              capability={capability}
              index={index}
            />
          ))}

          {/* Bottom separator */}
          <div
            style={{
              height: "1px",
              background: "rgba(255, 255, 255, 0.04)",
              marginTop: "clamp(2.5rem, 5vw, 4rem)",
            }}
          />
        </div>

        {/* Studio Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "2rem",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}
            >
              <div
                style={{
                  width: "5px",
                  height: "5px",
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
                  color: "rgba(250, 250, 250, 0.35)",
                }}
              >
                Custom engagements available
              </span>
            </div>
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
              className="group"
            >
              Discuss a project
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M3 13L13 3M13 3H6M13 3V10" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
