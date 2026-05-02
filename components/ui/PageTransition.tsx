"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    // Start fade out after mount - animation handles the rest
  }, []);

  // Always render overlay (it's the same color as body bg so it's invisible when faded)
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-0 z-50 bg-[#0A0A0A]"
        aria-hidden="true"
      />
      {children}
    </>
  );
}
