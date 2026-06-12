"use client";

import { motion } from "motion/react";
import { NOS } from "@/lib/content";

export function Nos() {
  return (
    <section
      className="px-6 py-24 sm:py-32"
      style={{ zIndex: 1, position: "relative" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="font-mono text-[0.65rem] sm:text-[0.7rem] text-champagne tracking-[0.3em] uppercase mb-5 opacity-70">
            cap. iv
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            {NOS.title}
          </h2>
          <p className="font-serif italic text-text-dim text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            {NOS.body}
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="flex flex-col items-center max-w-md mx-auto"
        >
          <div className="relative p-3 sm:p-4 bg-[#0a0a0e]/60 border border-champagne/25 shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
            <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-champagne/60" />
            <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-champagne/60" />
            <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-champagne/60" />
            <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-champagne/60" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={NOS.image}
              alt={NOS.label}
              loading="eager"
              decoding="async"
              className="block w-full h-auto max-h-[70vh] object-cover"
              style={{
                filter: "grayscale(0.15) sepia(0.08) contrast(1.05)",
              }}
            />
          </div>
          <figcaption className="font-mono text-[0.6rem] sm:text-[0.7rem] text-champagne tracking-[0.3em] uppercase mt-4 sm:mt-5 opacity-70">
            {NOS.label}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
