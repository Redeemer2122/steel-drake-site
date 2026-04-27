import type { HTMLAttributes, ReactNode } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function GlassCard({
  children,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2 border border-white/8 bg-white/3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${className}`}
      {...props}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      />
      {children}
    </div>
  );
}
