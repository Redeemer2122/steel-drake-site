"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
  index: number;
};

export function WorkCard({ work, index }: WorkCardProps) {
  return (
    <motion.div
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Card with lift on hover */}
      <motion.div
        className="relative aspect-[4/3] overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Image with zoom */}
        <div className="absolute inset-0 overflow-hidden">
          {work.image && (
            <motion.div
              className="h-full w-full"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </motion.div>
          )}

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        </div>

        {/* Project number */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="font-display text-xs font-medium tracking-[0.18em] uppercase"
            style={{ color: work.accentColor }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p className="font-body text-[10px] text-white/50 uppercase tracking-[0.14em] mb-1.5">
            {work.category}
          </p>
          <h3 className="font-display text-base font-semibold leading-tight tracking-tight text-white">
            {work.title}
          </h3>
          <span className="font-body text-[10px] text-white/30 mt-2 block">
            {work.year}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
