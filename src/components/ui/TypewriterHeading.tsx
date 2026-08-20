"use client";

import { useEffect, useRef, useState } from "react";

// Types the given text segments out character-by-character the first time the
// heading scrolls into view, preserving each segment's own color/className.
export function TypewriterHeading({
  segments,
  className,
  speed = 20,
}: {
  segments: { text: string; className?: string }[];
  className?: string;
  speed?: number;
}) {
  const fullText = segments.map((s) => s.text).join("");
  const ref = useRef<HTMLHeadingElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        let i = 0;
        const id = setInterval(() => {
          i += 1;
          setCount(i);
          if (i >= fullText.length) clearInterval(id);
        }, speed);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fullText.length, speed]);

  let remaining = count;

  return (
    <h2 ref={ref} className={className}>
      {segments.map((seg, i) => {
        const take = Math.max(0, Math.min(seg.text.length, remaining));
        remaining -= seg.text.length;
        return (
          <span key={i} className={seg.className}>
            {seg.text.slice(0, take)}
          </span>
        );
      })}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] animate-pulse bg-current align-middle"
        style={{ opacity: count < fullText.length ? 1 : 0 }}
      />
    </h2>
  );
}
