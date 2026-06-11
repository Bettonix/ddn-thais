"use client";

import { motion } from "motion/react";
import { NOS } from "@/lib/content";

function Polaroid({
  src,
  label,
  delay,
}: {
  src: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className="flex flex-col items-center"
    >
      <div className="relative p-3 sm:p-4 bg-[#0a0a0e]/60 border border-champagne/25 shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
        <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-champagne/60" />
        <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-champagne/60" />
        <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-champagne/60" />
        <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-champagne/60" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label}
          loading="eager"
          decoding="async"
          className="block w-full h-auto max-h-[60vh] object-cover"
          style={{
            filter: "grayscale(0.15) sepia(0.08) contrast(1.05)",
          }}
        />
      </div>
      <figcaption className="font-mono text-[0.6rem] sm:text-[0.7rem] text-champagne tracking-[0.3em] uppercase mt-4 sm:mt-5 opacity-70">
        {label}
      </figcaption>
    </motion.figure>
  );
}

export function Nos() {
  return (
    <section
      className="px-6 py-24 sm:py-32"
      style={{ zIndex: 1, position: "relative" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 max-w-2xl mx-auto">
          <Polaroid src={NOS.leftImage} label={NOS.leftLabel} delay={0.1} />
          <Polaroid src={NOS.rightImage} label={NOS.rightLabel} delay={0.3} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="text-center font-serif italic text-champagne text-lg sm:text-xl tracking-wide mt-14 sm:mt-16"
        >
          c. <span className="opacity-50">&</span> t.
        </motion.p>
      </div>
    </section>
  );
}
