"use client";

import { useEffect, useRef, useState } from "react";

// Splits "500+" into a numeric part (500) and a suffix ("+"); "5.0" into
// (5.0, "") with 1 decimal place preserved for the animated display.
function parseValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)/);
  if (!match) return null;
  const numeric = match[1];
  return {
    target: parseFloat(numeric),
    decimals: numeric.includes(".") ? numeric.split(".")[1].length : 0,
    suffix: value.slice(numeric.length),
  };
}

function useCountUp(value: string, durationMs = 1500) {
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(() => (parsed ? (0).toFixed(parsed.decimals) : value));
  const ref = useRef<HTMLParagraphElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!parsed || animated.current) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay((parsed.target * eased).toFixed(parsed.decimals));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return { ref, text: parsed ? `${display}${parsed.suffix}` : value };
}

export function StatCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  const { ref, text } = useCountUp(value);

  return (
    <div className="rounded-2xl bg-surface p-6 sm:p-7">
      <p className="eyebrow text-muted">{label}</p>
      <p ref={ref} className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        {text}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
