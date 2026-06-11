"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { AMBIENT } from "@/lib/content";

export function Logo() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1.2 }}
      className="fixed top-5 left-5 sm:top-6 sm:left-6 z-40"
    >
      <Link
        href="/"
        className="block font-serif italic text-champagne text-xl sm:text-2xl tracking-wide hover:text-champagne-soft transition-colors duration-700"
        aria-label="Página inicial"
      >
        c.
      </Link>
    </motion.header>
  );
}

export function MusicButton() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.volume = 0.6;
  }, []);

  async function toggle() {
    const v = ref.current;
    if (!v) return;
    if (!unlocked) {
      try {
        v.muted = false;
        await v.play();
        setUnlocked(true);
        setPlaying(true);
      } catch {
        v.muted = true;
        await v.play();
        setUnlocked(true);
        setPlaying(true);
      }
    } else if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      try {
        await v.play();
        setPlaying(true);
      } catch {}
    }
  }

  return (
    <>
      <video
        ref={ref}
        src={AMBIENT.src}
        loop
        playsInline
        muted
        preload="none"
        className="hidden"
        aria-hidden="true"
      />
      <motion.button
        type="button"
        onClick={toggle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        whileTap={{ scale: 0.94 }}
        className="fixed top-5 right-5 sm:top-6 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 grid place-items-center border border-champagne/40 bg-ink/40 backdrop-blur-sm text-champagne hover:border-champagne hover:bg-champagne/10 transition-all duration-500 group"
        aria-label={playing ? "Pausar música ambiente" : "Tocar música ambiente"}
        title={`${AMBIENT.title} — ${AMBIENT.artist}`}
      >
        {!unlocked ? (
          <Play className="w-4 h-4" strokeWidth={1.5} />
        ) : playing ? (
          <Volume2 className="w-4 h-4" strokeWidth={1.5} />
        ) : (
          <VolumeX className="w-4 h-4" strokeWidth={1.5} />
        )}
        {playing && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-champagne animate-pulse" />
        )}
      </motion.button>
    </>
  );
}
