"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AUTO_SLIDE_INTERVAL_MS = 4000;

// Portrait photos (`portrait: true`) are shown uncropped over a blurred copy of
// themselves, so the car isn't cut off by the wide banner.
const slides = [
  {
    src: "/vehicles/prius-sedan.jpg",
    alt: "Our white Toyota Prius transfer car parked on a tree-lined road",
  },
  {
    src: "/vehicles/prius-sedan-rear.jpg",
    alt: "Rear view of our white Toyota Prius transfer car on a hill-country road",
    portrait: true,
  },
];

export function TransferSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTO_SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-ink sm:aspect-[21/9]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== active}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            index === active ? "opacity-100" : "opacity-0"
          )}
        >
          {slide.portrait ? (
            <>
              <Image
                src={slide.src}
                alt=""
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="scale-110 object-cover opacity-60 blur-2xl"
              />
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 1280px) 60vw, 600px"
                className="object-contain"
              />
            </>
          ) : (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-[center_75%]"
            />
          )}
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show photo ${index + 1} of ${slides.length}`}
            aria-current={index === active}
            className={cn(
              "h-1.5 rounded-full bg-white transition-all duration-300",
              index === active ? "w-5 opacity-100" : "w-1.5 opacity-50 hover:opacity-80"
            )}
          />
        ))}
      </div>
    </div>
  );
}
