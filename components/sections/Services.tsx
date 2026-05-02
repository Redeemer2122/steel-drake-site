"use client";

import type { ReactElement } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    number: "01",
    title: "Industrial Design",
    description:
      "Product design and conceptualization with focus on functionality and aesthetics.",
  },
  {
    number: "02",
    title: "Automotive Concepts",
    description:
      "Vehicle exteriors, interiors, and futuristic mobility solutions.",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Visual systems, logos, and brand guidelines for emerging brands.",
  },
  {
    number: "04",
    title: "Motion & 3D",
    description:
      "3D visualization, animation, and motion graphics for digital presence.",
  },
];

function ServiceIcon({ number }: { number: string }): ReactElement {
  const colors: Record<string, string> = {
    "01": "#00D4FF",
    "02": "#FF6B1A",
    "03": "#00D4FF",
    "04": "#FF6B1A",
  };
  const color = colors[number] || "#00D4FF";

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="2"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="4 2"
      />
      <circle cx="16" cy="16" r="6" stroke={color} strokeWidth="1" />
      <circle cx="16" cy="16" r="2" fill={color} />
    </svg>
  );
}

export function Services() {
  return (
    <section id="services" className="relative w-full px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <RevealOnScroll delay={0}>
          <SectionLabel index="03" className="mb-16">
            SERVICES
          </SectionLabel>
        </RevealOnScroll>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <RevealOnScroll key={service.number} delay={0.1 + index * 0.1}>
              <GlassCard className="group relative p-8 hover:border-accent/40 transition-all duration-500">
                {/* Top accent line on hover */}
                <span className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Floating icon */}
                <div className="absolute -top-4 -right-4 opacity-20 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
                  <ServiceIcon number={service.number} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Number */}
                  <div className="font-display text-4xl font-black text-accent/60 group-hover:text-accent transition-colors duration-300 mb-6">
                    {service.number}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-(--text-secondary) leading-relaxed max-w-[36ch]">
                    {service.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <span className="absolute bottom-0 right-0 h-12 w-px bg-linear-to-t from-accent/20 to-transparent" />
                <span className="absolute bottom-0 right-0 h-px w-12 bg-linear-to-l from-accent/20 to-transparent" />
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>

        {/* Additional decorative element */}
        <RevealOnScroll delay={0.6}>
          <div className="mt-16 flex items-center justify-center gap-8">
            <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
            <span className="flex items-center gap-2 text-(--text-muted)">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M8 1v14M1 8h14" />
              </svg>
              <span className="font-body text-[10px] uppercase tracking-[0.2em]">
                Custom solutions available
              </span>
            </span>
            <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
