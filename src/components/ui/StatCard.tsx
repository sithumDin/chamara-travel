"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Backpack, Globe, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = { users: Users, backpack: Backpack, globe: Globe, star: Star } as const;

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

const toneClasses = {
  ink: { badge: "bg-ink/10", icon: "text-ink", value: "text-ink", line: "bg-ink" },
  accent: { badge: "bg-accent/10", icon: "text-accent-deep", value: "text-accent-deep", line: "bg-accent" },
  clay: { badge: "bg-clay/10", icon: "text-clay", value: "text-clay", line: "bg-clay" },
} as const;

export function StatCard({
  label,
  value,
  description,
  icon,
  tone = "accent",
}: {
  label: string;
  value: string;
  description: string;
  icon: keyof typeof icons;
  tone?: keyof typeof toneClasses;
}) {
  const { ref, text } = useCountUp(value);
  const colors = toneClasses[tone];
  const Icon = icons[icon];

  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-paper p-6 text-center sm:p-7">
      <span className={cn("inline-flex size-16 items-center justify-center rounded-full", colors.badge)}>
        <Icon className={cn("size-7", colors.icon)} aria-hidden="true" />
      </span>

      <p ref={ref} className={cn("mt-5 text-4xl font-semibold tracking-tight sm:text-5xl", colors.value)}>
        {text}
      </p>
      <span className={cn("mt-3 h-0.5 w-8 rounded-full", colors.line)} aria-hidden="true" />

      <p className="eyebrow mt-4 text-ink">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
