"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CloudSun, Backpack, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

const IDLE_SPEED_PX = 0.35; // slow auto-drift when the cursor isn't near an edge
const EDGE_SPEED_PX = 2.2; // faster nudge while hovering the left/right edge zone
const EDGE_ZONE = 0.16; // fraction of the track width treated as an edge hover zone
const STEP_PX = 420; // distance an arrow-button click scrolls

export function DestinationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"idle" | "left" | "right" | "paused">("idle");

  useEffect(() => {
    const track = trackRef.current;
    if (!track || direction === "paused") return;

    let frame: number;
    const step = () => {
      const speed = direction === "left" || direction === "right" ? EDGE_SPEED_PX : IDLE_SPEED_PX;
      const delta = direction === "left" ? -speed : speed;

      const maxScroll = track.scrollWidth - track.clientWidth;
      let next = track.scrollLeft + delta;
      if (next >= maxScroll) next = 0;
      if (next < 0) next = maxScroll;
      track.scrollLeft = next;

      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [direction]);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const fraction = (e.clientX - bounds.left) / bounds.width;
    if (fraction < EDGE_ZONE) setDirection("left");
    else if (fraction > 1 - EDGE_ZONE) setDirection("right");
    else setDirection("paused");
  };

  const scrollByStep = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * STEP_PX, behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sri Lanka"
          title="Sri Lanka's best destinations"
          description="A slow scroll through the island's most-loved places — the ones every itinerary should include. Hover a photo for the essentials."
        />
      </Container>

      <div className="relative mt-10">
        <div
          ref={trackRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setDirection("idle")}
          className="flex gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:gap-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
        >
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative h-[340px] w-[80vw] shrink-0 overflow-hidden rounded-2xl sm:h-[440px] sm:w-[46vw] lg:h-[540px] lg:w-[32vw]"
            >
              <Image
                src={destination.src}
                alt={destination.alt}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 32vw"
                className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:blur-md"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <p className="eyebrow absolute bottom-5 left-5 text-white transition-opacity duration-300 group-hover:opacity-0">
                {destination.name}
              </p>

              <div className="absolute inset-0 flex translate-y-2 flex-col justify-between p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-7">
                <p className="text-lg font-medium tracking-tight text-white sm:text-xl">{destination.name}</p>

                <p className="text-sm leading-relaxed text-white/90 sm:text-base">{destination.summary}</p>

                <div className="space-y-2 text-sm text-white/85">
                  <div className="flex items-start gap-2.5">
                    <CalendarDays className="mt-0.5 size-4 shrink-0 text-white/70" aria-hidden="true" />
                    <p>
                      <span className="text-white/60">Best time to visit:</span> {destination.bestTime}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CloudSun className="mt-0.5 size-4 shrink-0 text-white/70" aria-hidden="true" />
                    <p>
                      <span className="text-white/60">Weather:</span> {destination.weather}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Backpack className="mt-0.5 size-4 shrink-0 text-white/70" aria-hidden="true" />
                    <p>
                      <span className="text-white/60">Bring:</span> {destination.essentials}
                    </p>
                  </div>
                </div>

                <Link
                  href="/about-sri-lanka"
                  className="inline-flex w-fit items-center gap-1 text-xs font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
                >
                  Read more
                  <ArrowRight className="size-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll destinations left"
          onClick={() => scrollByStep(-1)}
          className={cn(
            "absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full",
            "size-10 bg-white/90 text-ink shadow-lg backdrop-blur transition-colors hover:bg-white sm:flex"
          )}
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Scroll destinations right"
          onClick={() => scrollByStep(1)}
          className={cn(
            "absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full",
            "size-10 bg-white/90 text-ink shadow-lg backdrop-blur transition-colors hover:bg-white sm:flex"
          )}
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
