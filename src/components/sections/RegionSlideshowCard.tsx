"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AUTO_SLIDE_INTERVAL_MS = 3200;

export function RegionSlideshowCard({
  title,
  text,
  images,
  icon,
}: {
  title: string;
  text: string;
  images: { src: string; alt: string }[];
  icon?: ReactNode;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, AUTO_SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [images.length, paused]);

  return (
    <div className="group overflow-hidden rounded-2xl border border-border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div
        className="relative aspect-[4/3] w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={cn(
              "object-cover transition-all duration-700 ease-in-out group-hover:scale-105",
              index === active ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        {icon ? (
          <span className="absolute left-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-white/90 text-accent-deep backdrop-blur-sm">
            {icon}
          </span>
        ) : null}

        {images.length > 1 ? (
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
            {images.map((image, index) => (
              <span
                key={image.src}
                className={cn(
                  "h-1.5 rounded-full bg-white transition-all duration-300",
                  index === active ? "w-5 opacity-100" : "w-1.5 opacity-50"
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
      </div>
    </div>
  );
}
