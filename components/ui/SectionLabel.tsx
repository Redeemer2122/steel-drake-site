type SectionLabelProps = {
  index: string;
  children: string;
  className?: string;
};

export function SectionLabel({
  index,
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`font-body text-[11px] font-medium uppercase tracking-[0.18em] text-accent ${className}`}
    >
      [ {index} — {children} ]
    </p>
  );
}
