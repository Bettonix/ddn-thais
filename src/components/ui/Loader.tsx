"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const MESSAGES = ["...", "..", ".", ""];

export function Loader() {
  const [done, setDone] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    function step() {
      if (i < MESSAGES.length) {
        setText(MESSAGES[i]);
        i++;
        setTimeout(step, 600);
      } else {
        setTimeout(() => {
          setDone(true);
          document.body.classList.remove("locked");
        }, 600);
      }
    }
    document.body.classList.add("locked");
    setTimeout(step, 600);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif italic text-champagne text-xl tracking-[0.3em] mb-4"
            >
              c.
            </motion.div>
            <div className="font-serif italic text-text-dim text-lg min-h-[1.6em]">
              {text}
              <span className="inline-block w-[0.5em] h-[1em] bg-champagne align-[-3px] ml-1 opacity-70 animate-pulse" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
