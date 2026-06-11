"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
  title: string;
  artist: string;
  image?: string;
};

export function VideoModal({ open, onClose, src, poster, title, artist, image }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          onClick={onClose}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-ink border border-champagne/25 shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 border-b border-champagne/15">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                {image && (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 overflow-hidden border border-champagne/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt={artist} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="font-mono text-[0.55rem] sm:text-[0.6rem] text-champagne tracking-[0.25em] uppercase opacity-80">
                    tocando agora
                  </div>
                  <div id="video-title" className="font-serif italic text-text text-base sm:text-lg truncate">
                    {title}
                  </div>
                  <div className="font-mono text-[0.55rem] sm:text-[0.65rem] text-text-faint tracking-[0.2em] uppercase">
                    {artist}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-text-dim hover:text-champagne transition-colors duration-300 p-2 -mr-2 shrink-0"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                src={src}
                poster={poster}
                controls
                playsInline
                className="w-full h-full object-contain"
                style={{ filter: "contrast(1.02) saturate(0.95)" }}
              >
                Seu navegador não suporta vídeo.
              </video>
            </div>

            <div className="px-5 sm:px-7 py-3 sm:py-4 text-center">
              <div className="font-mono text-[0.55rem] sm:text-[0.6rem] text-text-faint tracking-[0.25em] uppercase opacity-70">
                esc · clique fora pra fechar
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
