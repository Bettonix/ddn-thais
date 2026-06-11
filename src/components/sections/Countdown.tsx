"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/content";

type TimeLeft = { d: number; h: number; m: number; s: number };

const ZERO: TimeLeft = { d: 0, h: 0, m: 0, s: 0 };

function calc(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0");

export function Countdown({ compact = false }: { compact?: boolean }) {
  const target = new Date(CONFIG.TARGET_DATE).getTime();
  // SSR + primeira render no cliente: sempre ZERO (match exato)
  // Depois do mount: valor real
  const [t, setT] = useState<TimeLeft>(ZERO);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(calc(target));
    const id = setInterval(() => setT(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const blocks = [
    { v: t.d, l: "dias" },
    { v: t.h, l: "horas" },
    { v: t.m, l: "min" },
    { v: t.s, l: "seg" },
  ];

  return (
    <div
      className={`inline-flex items-baseline gap-1 flex-wrap justify-center border-t border-b border-champagne/20 ${
        compact ? "px-6 py-3" : "px-10 py-7"
      }`}
      aria-label="Contagem regressiva para 12 de junho"
      suppressHydrationWarning
    >
      {blocks.map((b, i) => (
        <div key={b.l} className="flex items-baseline">
          <div className="flex flex-col items-center min-w-[48px] sm:min-w-[56px]">
            <span
              className={`font-serif text-champagne tabular-nums leading-none ${
                compact ? "text-2xl" : "text-3xl sm:text-4xl md:text-5xl"
              }`}
            >
              {mounted ? pad(b.v) : "00"}
            </span>
            <span className="font-mono text-[0.55rem] sm:text-[0.6rem] text-text-faint tracking-[0.25em] uppercase mt-2">
              {b.l}
            </span>
          </div>
          {i < blocks.length - 1 && (
            <span
              className={`text-text-faint font-serif italic opacity-40 pb-3 ${
                compact ? "text-xl" : "text-2xl"
              }`}
            >
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
