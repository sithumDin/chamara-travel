"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Review } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";

const TRIPADVISOR_GREEN = "#34e0a1";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function CircleRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="size-3.5 rounded-full border"
          style={
            i < rating
              ? { backgroundColor: TRIPADVISOR_GREEN, borderColor: TRIPADVISOR_GREEN }
              : { borderColor: "var(--color-border, #d9d9d9)", backgroundColor: "transparent" }
          }
        />
      ))}
    </div>
  );
}

function TripAdvisorBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: TRIPADVISOR_GREEN }}>
      <span className="flex size-4 items-center justify-center rounded-full" style={{ backgroundColor: TRIPADVISOR_GREEN }}>
        <span className="size-1.5 rounded-full bg-white" />
      </span>
      Tripadvisor
    </span>
  );
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
    <Reveal className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => {
          const href = review.source === "tripadvisor" ? review.link ?? siteConfig.tripAdvisor.url : review.link;
          const Card = href ? "a" : "div";
          return (
            <Card
              key={review.id}
              data-review-card
              {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex w-[85%] shrink-0 snap-center flex-col rounded-2xl border border-border bg-paper p-6 shadow-sm transition hover:shadow-md sm:w-[60%] sm:p-7 lg:w-[32%]"
            >
              <div className="flex items-center justify-between gap-3">
                <CircleRating rating={review.rating} />
                {review.source === "tripadvisor" ? <TripAdvisorBadge /> : null}
              </div>

              {review.title ? (
                <h3 className="mt-3 text-base font-semibold leading-snug text-ink">{review.title}</h3>
              ) : null}

              <p className="mt-2 line-clamp-6 text-pretty text-sm leading-relaxed text-muted">{review.text}</p>

              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                  {initials(review.guestName)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{review.guestName}</p>
                  <p className="truncate text-xs text-muted">
                    {review.contributions ? `${review.contributions} contribution${review.contributions === 1 ? "" : "s"}` : review.country}
                    {review.tripType ? ` · ${review.tripType}` : ""}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous review"
          className="rounded-full border border-border p-2.5 text-ink hover:bg-ink/5"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next review"
          className="rounded-full border border-border p-2.5 text-ink hover:bg-ink/5"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </Reveal>
  );
}
