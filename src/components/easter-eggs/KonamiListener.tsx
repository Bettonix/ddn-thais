"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

export function KonamiListener() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const seq: string[] = [];
    function onKey(e: KeyboardEvent) {
      seq.push(e.key);
      if (seq.length > KONAMI.length) seq.shift();
      if (seq.join(",") === KONAMI.join(",")) {
        setActive(true);
        setTimeout(() => setActive(false), 7000);
        seq.length = 0;
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-[200] overflow-hidden"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ y: -20, opacity: 0, rotate: 0 }}
              animate={{
                y: "110vh",
                opacity: [0, 0.7, 0],
                rotate: 360,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 1.2,
                ease: "linear",
              }}
              className="absolute text-champagne"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${0.8 + Math.random() * 0.8}rem`,
                top: 0,
              }}
            >
              ✦
            </motion.span>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
