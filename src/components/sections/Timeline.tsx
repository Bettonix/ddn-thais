"use client";

import { motion } from "motion/react";
import { MOMENTS } from "@/lib/content";

export function Timeline() {
  return (
    <section className="px-6 py-24 sm:py-32" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="font-mono text-[0.65rem] sm:text-[0.7rem] text-champagne tracking-[0.3em] uppercase mb-5 opacity-70">
            cap. ii
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Linha do tempo
          </h2>
          <p className="font-serif italic text-text-dim text-base sm:text-lg max-w-md mx-auto">
            Tudo o que a gente construiu até aqui — em silêncio, valeu cada segundo.
          </p>
        </motion.div>

        <ol className="relative">
          {MOMENTS.map((m, i) => (
            <motion.li
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, delay: i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative pl-9 sm:pl-10 pb-10 sm:pb-12 last:pb-0"
            >
              <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-ink border border-champagne" />
              {i < MOMENTS.length - 1 && (
                <span className="absolute left-[3.5px] sm:left-[4px] top-5 bottom-0 w-px bg-champagne/15" />
              )}
              <div className="font-mono text-[0.6rem] sm:text-[0.65rem] text-champagne tracking-[0.3em] uppercase mb-2 opacity-80">
                {m.date}
              </div>
              <h3 className="font-serif italic text-2xl sm:text-3xl text-text mb-2.5 leading-snug">
                {m.title}
              </h3>
              <p className="font-serif italic text-text-dim text-base sm:text-lg leading-relaxed max-w-xl">
                {m.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
