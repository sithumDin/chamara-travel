"use client";

import { useState } from "react";
import Image from "next/image";
import type { TourImage } from "@/types";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

export function TourGallery({ images, title }: { images: TourImage[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const galleryImages = images.map((img, i) => ({
    id: `${title}-${i}`,
    src: img.src,
    alt: img.alt,
    category: "guests" as const,
    width: 1600,
    height: 1067,
  }));

  return (
    <div>
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="relative block aspect-[16/10] w-full overflow-hidden rounded-3xl"
      >
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1000px"
          className="object-cover"
        />
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
