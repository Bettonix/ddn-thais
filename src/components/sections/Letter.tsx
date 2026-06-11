"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LETTER_QUESTION, LETTER_ANSWER } from "@/lib/content";
import { store } from "@/lib/storage";

export function Letter() {
  const [revealed, setRevealed] = useState(() => store.get<boolean>("carta.revealed", false));

  function reveal() {
    if (revealed) return;
    setRevealed(true);
    store.set("carta.revealed", true);
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try { navigator.vibrate(20); } catch {}
    }
  }

  return (
    <section className="px-6 py-24 sm:py-32" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="font-mono text-[0.65rem] sm:text-[0.7rem] text-champagne tracking-[0.3em] uppercase mb-5 opacity-70">
            cap. i
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Uma pergunta só.
          </h2>
          <p className="font-serif italic text-text-dim text-base sm:text-lg max-w-md mx-auto">
            Sem pressa, sem cliques. Só um pensamento que eu venho guardando.
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={reveal}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="corners w-full max-w-md mx-auto block px-6 sm:px-10 py-12 sm:py-16 text-center border border-champagne/20 hover:border-champagne/50 transition-colors duration-700"
        >
          <div className="font-mono text-[0.65rem] sm:text-[0.7rem] text-champagne tracking-[0.3em] uppercase mb-6 opacity-70">
            para você pensar
          </div>
          <p className="font-serif italic text-xl sm:text-2xl text-text leading-snug mb-6">
            {LETTER_QUESTION}
          </p>
          <div
            className="font-mono text-[0.6rem] sm:text-[0.7rem] text-text-faint tracking-[0.2em] uppercase transition-opacity duration-700"
            style={{ opacity: revealed ? 0.3 : 1 }}
          >
            {revealed ? "— revelado —" : "toque na pergunta"}
          </div>
          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="mt-8"
              >
                <div className="text-champagne/60 mb-3">—</div>
                <p className="font-serif italic text-champagne text-lg sm:text-xl leading-relaxed">
                  {LETTER_ANSWER}
                </p>
                <p className="font-mono text-[0.6rem] sm:text-[0.65rem] text-champagne tracking-[0.2em] uppercase mt-5 opacity-60">
                  labubuzinho, sempre.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </section>
  );
}
