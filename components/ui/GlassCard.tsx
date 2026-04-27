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
      className={`relative overflow-hidden rounded-2 border border-white/8 bg-white/3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md ${className}`}
      {...props}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      {children}
    </div>
  );
}
