"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PageNav({ prev, next }: { prev?: string; next?: string }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1.2 }}
      className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none"
      aria-label="Navegação entre capítulos"
    >
      <div className="max-w-3xl mx-auto px-6 py-5 flex justify-between items-center pointer-events-auto">
        {prev ? (
          <Link
            href={prev}
            className="group flex items-center gap-2 font-mono text-[0.6rem] sm:text-[0.65rem] text-text-dim tracking-[0.25em] uppercase hover:text-champagne transition-colors duration-500"
            aria-label="Capítulo anterior"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="hidden sm:inline">anterior</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={next}
            className="group flex items-center gap-2 font-mono text-[0.6rem] sm:text-[0.65rem] text-champagne tracking-[0.25em] uppercase hover:text-silver-soft transition-colors duration-500"
            aria-label="Próximo capítulo"
          >
            <span>próximo</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        )}
      </div>
    </motion.nav>
  );
}
