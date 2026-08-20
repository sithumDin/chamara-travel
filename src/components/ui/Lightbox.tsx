"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const active = images[activeIndex];

  const goPrev = useCallback(
    () => onNavigate((activeIndex - 1 + images.length) % images.length),
    [activeIndex, images.length, onNavigate]
  );
  const goNext = useCallback(
    () => onNavigate((activeIndex + 1) % images.length),
    [activeIndex, images.length, onNavigate]
  );

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [goPrev, goNext, onClose]);

  if (!active) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-8 sm:top-8"
      >
        <X className="size-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft className="size-6" aria-hidden="true" />
      </button>

      <div
        className="relative h-[70vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={active.src}
          alt={active.alt}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-contain"
          priority
        />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next image"
        className="absolute right-3 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-6"
      >
        <ChevronRight className="size-6" aria-hidden="true" />
      </button>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-white/70">
        {active.alt} — {activeIndex + 1} / {images.length}
      </p>
    </div>
  );
}
