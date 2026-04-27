import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-[#0A0A0A] font-display font-bold hover:shadow-(--glow)",
  outline:
    "border-accent bg-transparent text-accent hover:bg-[rgba(0,212,255,0.06)] hover:shadow-(--glow)",
  ghost:
    "border-transparent bg-transparent text-(--text-secondary) hover:text-(--text-primary)",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`group relative inline-flex min-h-11 items-center justify-center overflow-hidden border px-5 py-3 text-[12px] uppercase tracking-[0.1em] transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-px disabled:pointer-events-none disabled:opacity-40 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-[1]">{children}</span>
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </button>
  );
}
