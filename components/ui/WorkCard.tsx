"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type WorkCardProps = {
  work: Project;
  index: number;
};

export function WorkCard({ work, index }: WorkCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Clickable card wrapper */}
      <Link
        href={`/projects/${work.slug}`}
        className="block cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        aria-label={`View project: ${work.title} - ${work.category}, ${work.year}`}
      >
        {/* Card with lift on hover */}
        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/[0.025] ring-1 ring-inset ring-white/10 transition-colors duration-700 group-hover:ring-white/18"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Image with zoom */}
          <div className="absolute inset-0 overflow-hidden">
            {work.image && (
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover brightness-[0.82] contrast-[1.06] saturate-[0.9] transition-[filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:brightness-[0.94] group-hover:contrast-[1.12] group-hover:saturate-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </motion.div>
            )}

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/42 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/50 opacity-80 transition-opacity duration-700 group-hover:opacity-65" />
          </div>

          {/* Project number */}
          <div className="absolute left-5 top-5 z-10">
            <span
              className="font-body text-[10px] font-medium tracking-[0.22em] uppercase transition-opacity duration-500 group-hover:opacity-90"
              style={{ color: work.accentColor }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
            <div className="mb-2.5 flex items-center justify-between gap-4">
              <p className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 transition-colors duration-500 group-hover:text-white/72">
                {work.category}
              </p>
              <span className="font-body text-[10px] text-white/35 transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-0.5 group-hover:text-white/55">
                {work.year}
              </span>
            </div>

            <h3 className="font-display text-lg font-semibold leading-[1.02] tracking-[-0.03em] text-white transition-[transform,letter-spacing] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:tracking-[-0.04em]">
              {work.title}
            </h3>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
