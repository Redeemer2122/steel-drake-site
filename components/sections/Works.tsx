"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WorkCard } from "@/components/ui/WorkCard";
import { works } from "@/data/works";

export function Works() {
  return (
    <section id="works" className="relative w-full px-6 py-40">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <RevealOnScroll delay={0}>
          <SectionLabel index="02" className="mb-16">
            WORKS
          </SectionLabel>
        </RevealOnScroll>

        {/* Section Headline */}
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-tight text-white mb-16">
            SELECTED
            <br />
            <span className="text-accent">PROJECTS</span>
          </h2>
        </RevealOnScroll>

        {/* Bento Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {/* Row 1: Large (2/3) + Small (1/3) */}
          <RevealOnScroll delay={0.1}>
            <WorkCard work={works[0]} index={0} />
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <WorkCard work={works[1]} index={1} />
          </RevealOnScroll>

          {/* Row 2: Small + Small + Small */}
          <RevealOnScroll delay={0.2}>
            <WorkCard work={works[2]} index={2} />
          </RevealOnScroll>
          <RevealOnScroll delay={0.25}>
            <WorkCard work={works[3]} index={3} />
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <WorkCard work={works[4]} index={4} />
          </RevealOnScroll>

          {/* Row 3: Medium (full width) */}
          <RevealOnScroll delay={0.35}>
            <WorkCard work={works[5]} index={5} />
          </RevealOnScroll>
        </div>

        {/* View All CTA */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-12 flex items-center justify-center">
            <button className="group relative flex items-center gap-3 border border-white/12 bg-white/3 px-8 py-4 backdrop-blur-md transition-all duration-500 hover:border-accent/40 hover:bg-white/6">
              <span className="absolute inset-x-0 top-0 h-px bg-accent/0 transition-all duration-500 group-hover:bg-accent/60" />
              <span className="font-body text-sm font-medium uppercase tracking-[0.18em] text-white/80 transition-colors group-hover:text-white">
                View All Projects
              </span>
              <svg
                className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
