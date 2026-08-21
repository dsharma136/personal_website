"use client";

import { useEffect, useRef } from "react";

export function DotCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const css = getComputedStyle(document.documentElement);
    const rgb = (token: string) => {
      const hex = css.getPropertyValue(token).trim().replace("#", "");
      const full = hex.length === 3 ? [...hex].map((c) => c + c).join("") : hex;
      const n = parseInt(full, 16);
      return [n >> 16, (n >> 8) & 255, n & 255] as const;
    };
    const [hr, hg, hb] = rgb("--hairline");
    const [sr, sg, sb] = rgb("--signal");
    const base = `rgba(${hr},${hg},${hb},0.4)`;
    const G = 24;
    const R = 120;
    const O = 12;
    let mx = -1e4;
    let my = -1e4;
    let w = 0;
    let h = 0;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = base;
      for (let y = O; y < h; y += G) {
        for (let x = O; x < w; x += G) ctx.fillRect(x, y, 1, 1);
      }
      if (mx < 0) return;
      const r2 = R * R;
      for (let y = O; y < h; y += G) {
        const dy = y - my;
        if (dy > R || dy < -R) continue;
        for (let x = O; x < w; x += G) {
          const dx = x - mx;
          const d2 = dx * dx + dy * dy;
          if (d2 >= r2) continue;
          const t = (1 - Math.sqrt(d2) / R) * 0.24;
          ctx.fillStyle = `rgba(${hr + (sr - hr) * t},${hg + (sg - hg) * t},${hb + (sb - hb) * t},0.4)`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const onMove = (event: PointerEvent) => {
      mx = event.clientX;
      my = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        draw();
      });
    };

    const onLeave = () => {
      mx = -1e4;
      my = -1e4;
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      draw();
    };

    resize();
    document.documentElement.classList.add("dot-canvas-on");
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("dot-canvas-on");
    };
  }, []);

  return <canvas ref={ref} className="dot-canvas" aria-hidden />;
}
