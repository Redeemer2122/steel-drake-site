"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 72],
    ["rgba(10,10,10,0)", "rgba(10,10,10,0.85)"],
  );
  const navBorder = useTransform(
    scrollY,
    [0, 72],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.06)"],
  );

  return (
    <>
      <motion.header
        style={{ backgroundColor: navBackground, borderBottomColor: navBorder }}
        className="fixed inset-x-0 top-0 z-40 border-b backdrop-blur-[20px]"
      >
        <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label="Steel Drake home"
            className="font-display text-sm font-black uppercase tracking-[0.16em] text-[var(--text-primary)] transition-colors duration-200 hover:text-white sm:text-base"
          >
            <span className="mr-2 text-accent">—</span>Steel Drake
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)] transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="relative flex h-11 w-11 items-center justify-center border border-white/[0.08] bg-white/[0.03] md:hidden"
          >
            <span className="sr-only">Menu</span>
            {[0, 1, 2].map((line) => (
              <motion.span
                key={line}
                className="absolute h-px w-5 bg-[var(--text-primary)]"
                animate={
                  isOpen
                    ? line === 0
                      ? { y: 0, rotate: 45 }
                      : line === 1
                        ? { opacity: 0, x: -8 }
                        : { y: 0, rotate: -45 }
                    : { y: (line - 1) * 7, rotate: 0, opacity: 1, x: 0 }
                }
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[rgba(10,10,10,0.96)] backdrop-blur-[20px] md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.14 },
                },
                closed: {
                  transition: { staggerChildren: 0.04, staggerDirection: -1 },
                },
              }}
              className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 px-6"
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    open: { opacity: 1, y: 0, scale: 1 },
                    closed: { opacity: 0, y: 18, scale: 1.04 },
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-3xl font-black uppercase tracking-[0.08em] text-[var(--text-primary)] transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
