"use client";

import type { ReactElement } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const socials = [
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

function SocialIcon({ platform }: { platform: string }): ReactElement {
  const icons: Record<string, ReactElement> = {
    Behance: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3.011 11.688h4.44c3.479 0 3.46-4.924 0-4.924h-4.44v4.924zm0-6.031h4.44c3.479 0 3.46-4.924 0-4.924h-4.44v4.924z" />
      </svg>
    ),
    Instagram: (
      <svg
        width="18"
        height="18"
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };
  return icons[platform] || null;
}

export function Contact() {
  return (
    <section id="contact" className="relative w-full px-6 py-24">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* HUD grid lines */}
        <div className="absolute left-1/4 top-0 h-full w-px bg-linear-to-b from-accent/10 via-transparent to-transparent" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-linear-to-b from-accent/10 via-transparent to-transparent" />
        {/* Corner brackets */}
        <span className="absolute left-8 top-8 h-12 w-12 border-l-2 border-t-2 border-accent/20" />
        <span className="absolute right-8 top-8 h-12 w-12 border-r-2 border-t-2 border-accent/20" />
        <span className="absolute bottom-8 left-8 h-12 w-12 border-b-2 border-l-2 border-accent/20" />
        <span className="absolute bottom-8 right-8 h-12 w-12 border-b-2 border-r-2 border-accent/20" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Section Label */}
        <RevealOnScroll delay={0}>
          <SectionLabel index="04" className="mb-12">
            CONTACT
          </SectionLabel>
        </RevealOnScroll>

        {/* CTA Headline */}
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-white mb-6">
            HAVE A PROJECT?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <h3 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-accent mb-16">
            LET&apos;S BUILD IT.
          </h3>
        </RevealOnScroll>

        {/* Email contact */}
        <RevealOnScroll delay={0.3}>
          <div className="mb-12">
            <a
              href="mailto:steel@drake.design"
              className="group inline-flex items-center gap-4 transition-all duration-300 hover:gap-6"
            >
              <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white transition-colors duration-300 group-hover:text-accent">
                steel@drake.design
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </RevealOnScroll>

        {/* CTA Button */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20">
            <Button variant="primary" className="min-w-50">
              GET IN TOUCH
            </Button>
          </div>
        </RevealOnScroll>

        {/* Social Links */}
        <RevealOnScroll delay={0.5}>
          <div className="flex items-center justify-center gap-1">
            {socials.map((social, index) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-2 px-5 py-3 text-(--text-muted) transition-all duration-300 hover:text-accent"
              >
                <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <SocialIcon platform={social.label} />
                </span>
                <span className="font-body text-xs uppercase tracking-[0.14em]">
                  {social.label}
                </span>
                {index < socials.length - 1 && (
                  <span className="ml-4 h-4 w-px bg-white/10" />
                )}
              </Link>
            ))}
          </div>
        </RevealOnScroll>

        {/* Decorative line */}
        <RevealOnScroll delay={0.6}>
          <div className="mt-20 flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-linear-to-r from-transparent to-accent/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-accent/40" />
            <span className="h-px w-20 bg-linear-to-l from-transparent to-accent/40" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
