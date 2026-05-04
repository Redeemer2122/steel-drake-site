"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WorkCard } from "@/components/ui/WorkCard";
import { works } from "@/data/works";

export function Works() {
  return (
    <section id="works" className="relative w-full px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <RevealOnScroll delay={0}>
          <SectionLabel index="02" className="mb-6">
            WORKS
          </SectionLabel>
        </RevealOnScroll>

        {/* Section Headline */}
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.95] tracking-tight text-white mb-16">
            SELECTED
            <br />
            <span className="text-accent">PROJECTS</span>
          </h2>
        </RevealOnScroll>

        {/* Clean 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <RevealOnScroll key={work.id} delay={0.1 + index * 0.05}>
              <WorkCard work={work} index={index} />
            </RevealOnScroll>
          ))}
        </div>

        {/* View All CTA */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 flex justify-center">
            <button className="group flex items-center gap-3 py-4 transition-all duration-300 hover:gap-4">
              <span className="font-body text-sm font-medium uppercase tracking-[0.18em] text-white/50 transition-colors group-hover:text-white">
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
