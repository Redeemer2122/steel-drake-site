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
      className={`relative overflow-hidden rounded-[2px] border border-white/[0.08] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[12px] ${className}`}
      {...props}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      {children}
    </div>
  );
}
