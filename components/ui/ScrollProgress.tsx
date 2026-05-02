"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(1, Math.max(0, scrollProgress)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-0.5 w-full">
      {/* Neon glow layer */}
      <div
        className="h-full w-full"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(0, 212, 255, 0.3) 20%, 
            rgba(0, 212, 255, 0.8) 50%, 
            rgba(0, 212, 255, 0.3) 80%, 
            transparent 100%
          )`,
          transform: `scaleX(${progress})`,
          transformOrigin: "left center",
          boxShadow:
            "0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.3)",
          willChange: "transform",
          transition: "none",
        }}
      />
      {/* Sharp accent line */}
      <div
        className="absolute inset-x-0 top-0 h-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent), transparent)",
          transform: `scaleX(${progress})`,
          transformOrigin: "left center",
          willChange: "transform",
        }}
      />
    </div>
  );
}
