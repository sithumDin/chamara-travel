"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/types";
import { galleryCategories } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

export function GalleryExplorer({ images }: { images: GalleryImage[] }) {
  const [category, setCategory] = useState<GalleryImage["category"] | "all">("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (category === "all" ? images : images.filter((img) => img.category === category)),
    [images, category]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setCategory(cat.value)}
            aria-pressed={category === cat.value}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              category === cat.value
                ? "border-ink bg-ink text-paper"
                : "border-border bg-paper text-ink-soft hover:border-ink/40"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {filtered.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="relative mb-3 block w-full overflow-hidden rounded-2xl sm:mb-4"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <Lightbox
          images={filtered}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </div>
  );
}
