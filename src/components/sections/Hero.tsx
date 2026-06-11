"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Countdown } from "./Countdown";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-32"
      style={{ zIndex: 1 }}
    >
      <motion.div
        style={{ opacity }}
        className="text-center max-w-2xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1.2 }}
          className="font-mono text-[0.65rem] sm:text-[0.7rem] text-champagne tracking-[0.4em] uppercase mb-8 sm:mb-10 opacity-70"
        >
          uma carta silenciosa
        </motion.div>

        <motion.h1
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-serif italic leading-[1.05] mb-6 sm:mb-8"
        >
          <span className="block text-text/70 text-[0.7em] tracking-[0.05em]">Carlos</span>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="inline-block mx-2 sm:mx-3 text-champagne not-italic"
          >
            →
          </motion.span>
          <span className="block text-champagne text-[1em]">Thais</span>
        </motion.h1>

        <motion.div
          style={{ y: y2 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 3.2, duration: 0.8, ease: "easeOut" }}
          className="rule mb-8 sm:mb-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 1.2 }}
          className="font-serif italic text-text-dim text-base sm:text-lg md:text-xl max-w-md mx-auto mb-12 sm:mb-16 leading-relaxed"
        >
          Eu preparei uma coisa pra você. Nada de flores desta vez — ainda lembro da última. Reservei uns minutos do seu dia, se você topar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 1.2 }}
          className="mb-12 sm:mb-16"
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 1.2 }}
        >
          <Link
            href="/carta"
            className="inline-flex items-center gap-3 font-mono text-[0.7rem] sm:text-xs tracking-[0.3em] uppercase text-champagne border border-champagne/60 px-8 sm:px-10 py-4 sm:py-5 hover:bg-champagne hover:text-ink transition-all duration-500 hover:tracking-[0.35em] group"
          >
            abrir a carta
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 4.2, duration: 1.5 }}
          className="font-mono text-[0.6rem] sm:text-[0.65rem] tracking-[0.3em] uppercase mt-12 sm:mt-16"
        >
          role com calma
        </motion.div>
      </motion.div>
    </section>
  );
}
