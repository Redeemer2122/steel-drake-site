"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  strength?: number; // Parallax strength factor (default 0.05)
  className?: string;
}

export function ParallaxWrapper({
  children,
  strength = 0.05,
  className = "",
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const translateY = useRef(0);
  const rafId = useRef<number | null>(null);
  const targetY = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Calculate target Y based on distance from center
      targetY.current = distanceFromCenter * strength;
    };

    // Smooth animation loop
    const animate = () => {
      // Lerp for smooth movement
      translateY.current += (targetY.current - translateY.current) * 0.1;

      if (element) {
        element.style.transform = `translateY(${translateY.current}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    // Initial calculation
    handleScroll();

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    // Listen for scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
