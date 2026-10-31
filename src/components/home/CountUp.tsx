"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1600;

/** Counts the leading number in `value` (e.g. "2,000+", "90 Days") up from 0 when scrolled into view. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, "")) : null;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (target == null || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    setCurrent(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setCurrent(Math.round(target * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {current == null ? value : `${current.toLocaleString("en-US")}${suffix}`}
    </span>
  );
}
