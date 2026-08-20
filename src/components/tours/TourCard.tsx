import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Gauge } from "lucide-react";
import type { Tour } from "@/types";
import { formatUsd } from "@/lib/utils";

const difficultyLabel: Record<Tour["difficulty"], string> = {
  easy: "Easy",
  moderate: "Moderate",
  challenging: "Challenging",
};

export function TourCard({ tour, priority = false }: { tour: Tour; priority?: boolean }) {
  const cover = tour.images[0];
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col rounded-2xl focus-visible:outline-none"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium text-ink">{tour.title}</h3>
        <p className="shrink-0 whitespace-nowrap text-lg font-medium text-ink">
          from {formatUsd(tour.fromPriceUsd)}
        </p>
      </div>

      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{tour.summary}</p>

      <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-4" aria-hidden="true" />
          {tour.durationLabel}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Users className="size-4" aria-hidden="true" />
          {tour.groupSize}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Gauge className="size-4" aria-hidden="true" />
          {difficultyLabel[tour.difficulty]}
        </span>
      </div>
    </Link>
  );
}
