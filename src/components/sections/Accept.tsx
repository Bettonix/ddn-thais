"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Heart } from "lucide-react";

export function Accept() {
  return (
    <section className="px-6 py-24 sm:py-32" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="mb-12 sm:mb-16"
        >
          <div className="font-mono text-[0.65rem] sm:text-[0.7rem] text-champagne tracking-[0.3em] uppercase mb-5 opacity-70">
            cap. vi
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Aceita continuar comigo?
          </h2>
          <p className="font-serif italic text-text-dim text-base sm:text-lg max-w-md mx-auto">
            Esse aqui é só o aquecimento. O pedido de verdade vem depois do dia 12 — eu prometi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <Link
            href="/fim"
            className="group relative inline-block font-mono text-[0.75rem] sm:text-sm tracking-[0.4em] uppercase text-ink bg-champagne border border-champagne px-12 sm:px-16 py-5 sm:py-6 hover:bg-transparent hover:text-champagne transition-all duration-500 hover:tracking-[0.45em] hover:shadow-[0_0_30px_rgba(212,175,122,0.2)]"
          >
            <span className="absolute inset-[6px] border border-ink/40 opacity-40 group-hover:inset-[10px] group-hover:opacity-70 transition-all duration-500" />
            <span className="relative inline-flex items-center gap-2">
              <Heart className="w-3 h-3" strokeWidth={1.5} fill="currentColor" />
              aceitar
            </span>
          </Link>
          <div className="font-mono text-[0.6rem] sm:text-[0.65rem] text-text-faint tracking-[0.25em] uppercase mt-8 sm:mt-10 opacity-60">
            (só existe um botão. escolhi não te dar saída.)
          </div>
        </motion.div>
      </div>
    </section>
  );
}
