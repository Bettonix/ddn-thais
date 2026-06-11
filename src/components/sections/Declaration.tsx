"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { DECLARATION } from "@/lib/content";

export function Declaration() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(DECLARATION.slice(0, i));
      if (i >= DECLARATION.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 38);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section
      className="px-6 py-20 sm:py-28"
      style={{ zIndex: 1, position: "relative" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="corners bg-paper text-ink p-10 sm:p-16 md:p-20 text-center shadow-2xl"
        >
          <div className="font-mono text-[0.6rem] sm:text-[0.65rem] text-wine tracking-[0.3em] uppercase mb-8 sm:mb-10 opacity-80">
            cap. v — a verdade
          </div>
          <div
            ref={ref}
            className={`font-serif italic text-lg sm:text-xl md:text-2xl leading-relaxed ${done ? "done" : ""}`}
          >
            {text}
            {!done && (
              <span className="inline-block w-[0.4em] h-[0.9em] bg-wine align-[-2px] ml-1 animate-pulse" />
            )}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: done ? 0.8 : 0 }}
            transition={{ duration: 1.2 }}
            className="font-mono text-[0.6rem] sm:text-[0.7rem] text-wine tracking-[0.3em] uppercase mt-12 sm:mt-14"
          >
            — C.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
