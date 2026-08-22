"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AUTO_SLIDE_INTERVAL_MS = 3200;

export function RegionSlideshowCard({
  title,
  text,
  images,
}: {
  title: string;
  text: string;
  images: { src: string; alt: string }[];
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
    <div className="overflow-hidden rounded-2xl border border-border">
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
              "object-cover transition-opacity duration-700 ease-in-out",
              index === active ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
      </div>
    </div>
  );
}
