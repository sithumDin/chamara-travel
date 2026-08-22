"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { TourImage } from "@/types";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

const AUTO_SLIDE_INTERVAL_MS = 4500;

export function TourGallery({ images, title }: { images: TourImage[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [paused, setPaused] = useState(false);

  const galleryImages = images.map((img, i) => ({
    id: `${title}-${i}`,
    src: img.src,
    alt: img.alt,
    category: "guests" as const,
    width: 1600,
    height: 1067,
  }));

  useEffect(() => {
    if (images.length <= 1 || lightboxOpen || paused) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, AUTO_SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [images.length, lightboxOpen, paused]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative block aspect-[16/10] w-full overflow-hidden rounded-3xl"
      >
        {images.map((img, index) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 1000px"
            className={cn(
              "object-cover transition-opacity duration-700 ease-in-out",
              index === active ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </button>

      {images.length > 1 ? (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {images.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={active === index}
              className={cn(
                "relative size-20 shrink-0 overflow-hidden rounded-xl border-2 transition-colors",
                active === index ? "border-ink" : "border-transparent opacity-70 hover:opacity-100"
              )}
            >
              <Image src={img.src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}

      {lightboxOpen ? (
        <Lightbox
          images={galleryImages}
          activeIndex={active}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setActive}
        />
      ) : null}
    </div>
  );
}
