"use client";

import { motion } from "framer-motion";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
  index: number;
};

const sizeConfig = {
  large: { aspect: "aspect-[4/3]", cols: "col-span-2", rows: "" },
  small: { aspect: "aspect-square", cols: "col-span-1", rows: "" },
  medium: { aspect: "aspect-[21/9]", cols: "col-span-3", rows: "" },
  tall: { aspect: "aspect-[3/4]", cols: "col-span-1", rows: "row-span-2" },
};

export function WorkCard({ work, index }: WorkCardProps) {
  const { aspect, cols, rows } = sizeConfig[work.size];

  return (
    <motion.div
      className={`group relative overflow-hidden cursor-pointer ${cols} ${rows}`}
      whileHover="hover"
      initial="rest"
    >
      <div
        className={`relative w-full ${aspect} overflow-hidden border border-white/6 bg-surface transition-all duration-500 hover:scale-[1.02]`}
        style={{
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        {/* Inner glow border on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          style={{
            boxShadow: `inset 0 0 0 1px ${work.accentColor}40`,
          }}
        />

        {/* Accent top line */}
        <motion.div
          className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          style={{
            background: `linear-gradient(90deg, transparent, ${work.accentColor}80, transparent)`,
          }}
        />

        {/* Project number */}
        <div className="absolute top-4 left-5 z-10">
          <span
            className="font-display text-[10px] font-medium tracking-[0.2em] uppercase"
            style={{ color: work.accentColor }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Arrow icon on hover */}
        <motion.div
          className="absolute top-4 right-5 z-10"
          variants={{
            rest: { opacity: 0, x: -4 },
            hover: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ color: work.accentColor }}
          >
            <path
              d="M3 13L13 3M13 3H6M13 3V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Gradient placeholder */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 70%, ${work.accentColor}08 0%, transparent 60%),
                        radial-gradient(ellipse at 70% 30%, ${work.accentColor}05 0%, transparent 50%)`,
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom info */}
        <div className="absolute bottom-0 inset-x-0 p-5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-display text-base font-semibold leading-tight tracking-tight text-white mb-1">
                {work.title}
              </h3>
              <p className="font-body text-[11px] text-white/40 uppercase tracking-[0.14em]">
                {work.category}
              </p>
            </div>
            <span className="font-body text-[10px] text-white/30">
              {work.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
