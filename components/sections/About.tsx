"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

const disciplines = [
  { name: "Industrial Design", icon: "⬡" },
  { name: "Automotive", icon: "◈" },
  { name: "Branding", icon: "◉" },
  { name: "Motion", icon: "◎" },
];

const stats = [
  { value: "13+", label: "Years" },
  { value: "100+", label: "Projects" },
  { value: "5", label: "Countries" },
  { value: "Best of", label: "Behance" },
];

export function About() {
  return (
    <section id="about" className="relative w-full px-6 py-[160px]">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Label */}
        <RevealOnScroll delay={0}>
          <SectionLabel index="01" className="mb-12">
            ABOUT
          </SectionLabel>
        </RevealOnScroll>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column — Identity + Disciplines */}
          <div>
            {/* Headline */}
            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-[clamp(3rem,7vw,6rem)] font-black leading-none tracking-tight text-white mb-8">
                STEEL
                <br />
                <span className="text-accent">DRAKE</span>
              </h2>
            </RevealOnScroll>

            {/* Bio */}
            <RevealOnScroll delay={0.2}>
              <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed max-w-[52ch] mb-12">
                Multidisciplinary designer with deep expertise in industrial
                design and automotive aesthetics. Building visual systems that
                communicate authority, precision, and forward motion.
              </p>
            </RevealOnScroll>

            {/* Discipline Grid 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              {disciplines.map((d, i) => (
                <RevealOnScroll key={d.name} delay={0.3 + i * 0.08}>
                  <div className="group relative overflow-hidden rounded-2 border border-white/8 bg-white/3 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-all duration-500 hover:border-accent/30 hover:bg-white/5">
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
                    <span
                      className="mb-3 block text-accent font-display text-xl leading-none"
                      aria-hidden="true"
                    >
                      {d.icon}
                    </span>
                    <span className="font-body text-sm font-medium text-white/80 leading-tight">
                      {d.name}
                    </span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right Column — Photo Block */}
          <RevealOnScroll delay={0.2}>
            <div className="relative lg:mt-16">
              {/* Photo placeholder */}
              <div className="relative aspect-[3/4] overflow-hidden border border-white/8 bg-[var(--bg-surface)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span className="text-accent font-display text-4xl tracking-widest opacity-50 uppercase">
                    [ Photo ]
                  </span>
                  <span className="text-[var(--text-secondary)] font-body text-xs uppercase tracking-[0.2em] opacity-40">
                    01 — Steel Drake
                  </span>
                </div>
                {/* Corner accent line */}
                <span className="absolute bottom-0 right-0 h-16 w-px bg-accent/40" />
                <span className="absolute bottom-0 right-0 h-px w-16 bg-accent/40" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-5 -left-4 z-10">
                <div className="flex items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-body text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                    Available for Freelance
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/6 border-x border-white/6">
          {stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={0.5 + i * 0.07}>
              <div className="px-8 py-6 first:pl-0 last:pr-0">
                <div className="font-display text-4xl font-black text-accent leading-none tracking-tight mb-2">
                  {s.value}
                </div>
                <div className="font-body text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                  {s.label}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
