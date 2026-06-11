"use client";

import { useEffect, useRef } from "react";

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Array<{
      x: number; y: number; r: number; a: number; twinkle: number; speed: number;
    }> = [];
    let w = 0, h = 0, dpr = 1;
    let rafId: number | null = null;
    const mouse = { x: 0, y: 0 };
    let parallaxX = 0, parallaxY = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 700 ? 50 : 100;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 0.9 + 0.2,
        a: Math.random() * 0.5 + 0.15,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.002,
      }));
    }

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      parallaxX += (mouse.x - parallaxX) * 0.03;
      parallaxY += (mouse.y - parallaxY) * 0.03;
      for (const s of stars) {
        s.twinkle += s.speed;
        const alpha = s.a * (0.4 + 0.6 * Math.sin(s.twinkle));
        const ox = (parallaxX - 0.5) * 4;
        const oy = (parallaxY - 0.5) * 4;
        ctx.beginPath();
        ctx.arc(s.x + ox, s.y + oy, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(236, 232, 223, ${alpha})`;
        ctx.shadowBlur = s.r * 4;
        ctx.shadowColor = "rgba(212, 175, 122, 0.3)";
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      rafId = requestAnimationFrame(step);
    }

    function start() {
      if (reduced) return;
      if (rafId) return;
      window.addEventListener("pointermove", (e) => {
        mouse.x = e.clientX / w;
        mouse.y = e.clientY / h;
      }, { passive: true });
      resize();
      step();
    }

    function pause() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    }

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) pause();
      else if (!reduced) start();
    });

    start();

    return () => {
      pause();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.7 }}
    />
  );
}
