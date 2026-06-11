"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONFIG, SONGS, type Song, getWhatsAppUrl } from "@/lib/content";
import { store } from "@/lib/storage";
import { VideoModal } from "@/components/ui/VideoModal";

export function FinalModal() {
  const [songsOpen, setSongsOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [sixSeven, setSixSeven] = useState(() => store.get<boolean>("sixSeven", false));
  const [activeVideo, setActiveVideo] = useState<Song | null>(null);

  function onBgClick() {
    const next = clicks + 1;
    setClicks(next);
    if (next >= CONFIG.EASTER_EGG_CLICKS) {
      setSixSeven(true);
      store.set("sixSeven", true);
    }
  }

  return (
    <>
      <div
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
        style={{ zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
          onClick={onBgClick}
          className="corners bg-paper text-ink w-full max-w-xl p-10 sm:p-14 md:p-16 text-center shadow-2xl"
        >
          <div className="font-mono text-[0.6rem] sm:text-[0.65rem] text-wine tracking-[0.4em] uppercase mb-6 sm:mb-8 opacity-70">
            registrado
          </div>
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 sm:mb-8">
            Eu te escolho.
          </h1>
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-ink/80 leading-relaxed mb-4 max-w-sm mx-auto">
            Você concordou em ser minha labubuzinha oficial, e eu vou passar o resto dos dias honrando isso.
          </p>
          <p className="font-mono text-[0.6rem] sm:text-[0.7rem] text-ink/40 tracking-[0.2em] uppercase mb-8 sm:mb-10">
            o pedido de verdade vem depois do dia 12. esse foi só o aquecimento.
          </p>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-[0.7rem] sm:text-xs tracking-[0.3em] uppercase text-paper bg-wine border border-wine px-8 sm:px-10 py-4 sm:py-5 hover:bg-transparent hover:text-wine hover:tracking-[0.35em] transition-all duration-500"
          >
            Enviar resposta para Carlos
          </a>

          <div className="mt-10 sm:mt-12">
            <div className="font-mono text-[0.6rem] sm:text-[0.65rem] text-ink/40 tracking-[0.25em] uppercase mb-4">
              para ouvir com calma
            </div>
            <AnimatePresence mode="wait">
              {!songsOpen ? (
                <motion.button
                  key="btn"
                  type="button"
                  onClick={() => setSongsOpen(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-[0.6rem] sm:text-[0.65rem] text-ink/50 tracking-[0.2em] uppercase border-b border-ink/20 pb-0.5 hover:text-wine hover:border-wine transition-colors duration-500"
                >
                  tocar a música de vocês
                </motion.button>
              ) : (
                <motion.div
                  key="choices"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                >
                  {SONGS.map((s) => (
                    <button
                      key={s.who}
                      type="button"
                      onClick={() => setActiveVideo(s)}
                      className="group relative flex items-center gap-3 sm:gap-4 text-left px-3 sm:px-4 py-3 sm:py-4 border border-ink/15 hover:border-wine hover:bg-wine/[0.04] transition-all duration-500 hover:-translate-y-0.5"
                    >
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 overflow-hidden border border-ink/15">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.image}
                          alt={s.artist}
                          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 grid place-items-center bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <svg className="w-5 h-5 text-champagne" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-[0.55rem] sm:text-[0.6rem] text-wine tracking-[0.2em] uppercase mb-1 opacity-80">
                          {s.label}
                        </div>
                        <div className="font-serif italic text-base sm:text-lg text-ink leading-tight truncate">
                          {s.name}
                        </div>
                        <div className="font-mono text-[0.55rem] sm:text-[0.6rem] text-ink/50 tracking-[0.2em] uppercase truncate">
                          {s.artist}
                        </div>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {sixSeven && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="font-serif italic text-xl sm:text-2xl text-wine tracking-[0.1em] mt-10 sm:mt-12"
              >
                six seven 🫡
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <VideoModal
        open={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        src={activeVideo?.video ?? ""}
        poster={activeVideo?.image}
        title={activeVideo?.name ?? ""}
        artist={activeVideo?.artist ?? ""}
        image={activeVideo?.image}
      />
    </>
  );
}
