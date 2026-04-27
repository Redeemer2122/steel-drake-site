"use client";

import type { ReactElement } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";

const disciplines = [
  { name: "Industrial Design", icon: "hexagon" },
  { name: "Automotive", icon: "car" },
  { name: "Branding", icon: "circle" },
  { name: "Motion", icon: "target" },
];

const stats = [
  { value: "13+", label: "Years" },
  { value: "100+", label: "Projects" },
  { value: "5", label: "Countries" },
  { value: "Best of", label: "Behance" },
];

function DisciplineIcon({ type }: { type: string }): ReactElement {
  const icons: Record<string, ReactElement> = {
    hexagon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2l8 4.5v9L12 22l-8-6.5v-9L12 2z" />
      </svg>
    ),
    car: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2M5 17l-1 3M19 17l1 3M7 9l1.5-3.5A1.5 1.5 0 0110 4h4a1.5 1.5 0 011.5 1.5L17 9" />
      </svg>
    ),
    circle: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    target: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  };
  return icons[type] || null;
}

export function About() {
  return (
    <section id="about" className="relative w-full px-6 py-40">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <RevealOnScroll delay={0}>
          <SectionLabel index="01" className="mb-12">
            ABOUT
          </SectionLabel>
        </RevealOnScroll>

        {/* Main Grid with gap-40 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 items-start">
          {/* Left Column — Identity + Disciplines */}
          <div>
            {/* Headline */}
            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-white mb-8">
                STEEL
                <br />
                <span className="text-accent">DRAKE</span>
              </h2>
            </RevealOnScroll>

            {/* Bio - slightly smaller typography */}
            <RevealOnScroll delay={0.2}>
              <p className="font-body text-sm text-(--text-secondary) leading-relaxed max-w-[48ch] mb-12">
                Multidisciplinary designer with deep expertise in industrial
                design and automotive aesthetics. Building visual systems that
                communicate authority, precision, and forward motion.
              </p>
            </RevealOnScroll>

            {/* Discipline Grid 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              {disciplines.map((d, i) => (
                <RevealOnScroll key={d.name} delay={0.3 + i * 0.08}>
                  <GlassCard className="px-5 py-4 hover:border-accent/30">
                    <span className="mb-3 block text-accent">
                      <DisciplineIcon type={d.icon} />
                    </span>
                    <span className="font-body text-sm font-medium text-white/80 leading-tight">
                      {d.name}
                    </span>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right Column — Photo Block with GlassCard */}
          <RevealOnScroll delay={0.2}>
            <div className="relative lg:mt-16">
              {/* Photo placeholder wrapped in GlassCard */}
              <GlassCard className="aspect-3/4">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span className="text-accent font-display text-4xl tracking-widest opacity-50 uppercase">
                    [ Photo ]
                  </span>
                  <span className="text-(--text-secondary) font-body text-xs uppercase tracking-[0.2em] opacity-40">
                    01 — Steel Drake
                  </span>
                </div>
                {/* Corner accent line */}
                <span className="absolute bottom-0 right-0 h-16 w-px bg-accent/40" />
                <span className="absolute bottom-0 right-0 h-px w-16 bg-accent/40" />
              </GlassCard>

              {/* Badge - Freelance */}
              <div className="absolute -bottom-5 -left-4 z-10">
                <div className="flex items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-body text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                    Freelance
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats Row with thin line dividers */}
        <div className="mt-20 pt-8 border-t border-white/6">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={0.5 + i * 0.07}>
                <div className="relative px-8 py-6 first:pl-0 last:pr-0">
                  {/* Thin vertical divider */}
                  {i > 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/10" />
                  )}
                  <div className="font-display text-4xl font-black text-accent leading-none tracking-tight mb-2">
                    {s.value}
                  </div>
                  <div className="font-body text-xs uppercase tracking-[0.16em] text-(--text-secondary)">
                    {s.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
