"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Review } from "@/types";
import { getTourBySlug } from "@/data/tours";
import { cn } from "@/lib/utils";

const sourceLabel: Record<Review["source"], string> = {
  tripadvisor: "TripAdvisor",
  google: "Google",
  direct: "Direct Guest",
};

function reviewImage(review: Review) {
  const tour = review.tourSlug ? getTourBySlug(review.tourSlug) : undefined;
  return tour?.images[0] ?? { src: `https://picsum.photos/seed/review-${review.id}/900/1100`, alt: "" };
}

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const cardWidth = card ? card.offsetWidth + 20 : 360;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => {
          const image = reviewImage(review);
          return (
            <article
              key={review.id}
              data-review-card
              className="relative aspect-[4/5] w-[85%] shrink-0 snap-center overflow-hidden rounded-3xl sm:w-[60%] lg:w-[42%]"
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

              <span className="eyebrow absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1.5 text-white backdrop-blur">
                {sourceLabel[review.source]}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn("size-4", i < review.rating ? "fill-white text-white" : "text-white/30")}
                    />
                  ))}
                </div>
                <p className="text-pretty text-lg font-medium leading-snug text-white sm:text-xl">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-4 text-sm text-white/70">
                  {review.guestName} · {review.country}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous review"
          className="rounded-full border border-border p-2.5 text-ink hover:bg-surface"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next review"
          className="rounded-full border border-border p-2.5 text-ink hover:bg-surface"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
