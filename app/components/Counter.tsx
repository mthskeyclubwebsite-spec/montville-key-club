"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  duration = 1600,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return (
    <div ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </div>
  );
}
