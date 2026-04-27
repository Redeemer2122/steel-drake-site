import Link from "next/link";

const socials = [
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

function SocialMark({ label }: { label: string }) {
  const initials = label.slice(0, 2).toUpperCase();

  return (
    <span className="flex h-9 w-9 items-center justify-center border border-white/[0.08] text-[10px] font-semibold tracking-[0.14em] transition-[border-color,color,background-color] duration-200 group-hover:border-accent/50 group-hover:bg-white/[0.03] group-hover:text-accent">
      {initials}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-(--text-muted)">© 2025 Steel Drake</p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="group text-(--text-muted)"
              >
                <SocialMark label={social.label} />
              </Link>
            ))}
          </div>
        </div>
        <p className="font-body text-[11px] uppercase tracking-[0.16em] text-(--text-muted)">
          Bishkek, Kyrgyzstan · Multidisciplinary Designer
        </p>
      </div>
    </footer>
  );
}
