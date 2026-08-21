"use client";

import { useEffect, useRef, useState } from "react";
import { parseNumeral } from "@/lib/numerals";

type CountUpProps = {
  value: string;
  duration?: number;
};

function formatValue(value: number, decimals: number, prefix: string, suffix: string) {
  const formatted = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
  return `${prefix}${formatted}${suffix}`;
}

export function CountUp({ value, duration = 600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parseNumeral(value);
  const [display, setDisplay] = useState(() =>
    parsed ? formatValue(0, parsed.decimals, parsed.prefix, parsed.suffix) : value,
  );

  useEffect(() => {
    const current = parseNumeral(value);
    if (!current || !ref.current) {
      setDisplay(value);
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let start: number | undefined;

    const animate = (now: number) => {
      if (start === undefined) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const amount = current.target * progress;
      setDisplay(formatValue(amount, current.decimals, current.prefix, current.suffix));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.2 },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, value]);

  return <span ref={ref}>{display}</span>;
}
