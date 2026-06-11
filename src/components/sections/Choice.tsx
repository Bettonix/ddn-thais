"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CHOICES } from "@/lib/content";
import { store } from "@/lib/storage";

export function Choice() {
  const [done, setDone] = useState(() => store.get<boolean>("choice.won", false));
  const [feedback, setFeedback] = useState("");
  const [won, setWon] = useState(() => store.get<boolean>("choice.won", false));

  function pick(opt: { id: string; label: string; correct: boolean }) {
    if (done) return;
    if (opt.correct) {
      setDone(true);
      setWon(true);
      setFeedback("essa é a resposta certa.");
      store.set("choice.won", true);
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        try { navigator.vibrate([10, 30, 10]); } catch {}
      }
    } else {
      setFeedback("bonita escolha, mas tem uma melhor.");
      setTimeout(() => setFeedback(""), 1600);
    }
  }

  return (
    <section className="px-6 py-24 sm:py-32" style={{ zIndex: 1, position: "relative" }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="font-mono text-[0.65rem] sm:text-[0.7rem] text-champagne tracking-[0.3em] uppercase mb-5 opacity-70">
            cap. iii
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            O que você escolheria?
          </h2>
          <p className="font-serif italic text-text-dim text-base sm:text-lg max-w-md mx-auto">
            Cenário: um dia perfeito com você. Qual destes te faz sorrir mais?
          </p>
        </motion.div>

        <div
          className="flex flex-col gap-3 mb-8 transition-opacity duration-700"
          style={{ opacity: done ? 0.5 : 1, pointerEvents: done ? "none" : "auto" }}
        >
          {CHOICES.map((opt, i) => (
            <motion.button
              key={opt.id}
              type="button"
              onClick={() => pick(opt)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.06 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full font-serif italic text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 text-center border transition-colors duration-500 ${
                opt.correct && done
                  ? "border-champagne text-champagne bg-champagne/[0.04]"
                  : "border-champagne/20 text-text hover:border-champagne hover:text-champagne"
              }`}
            >
              {opt.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-center font-serif italic text-base sm:text-lg min-h-[1.5em] ${
                won ? "text-champagne" : "text-wine"
              }`}
            >
              {feedback}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {won && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mt-12 sm:mt-16 py-10 sm:py-12 px-6 sm:px-8 border-t border-b border-champagne/20 text-center"
            >
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-text leading-relaxed">
                Eu não preciso de nada grandioso. Só preciso que seja com você. Tudo fica cheio quando você tá por perto.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
