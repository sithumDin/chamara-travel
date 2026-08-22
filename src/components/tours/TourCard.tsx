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
  const relatedPhotos = tour.images.slice(1, 4);
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
          className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:blur-md"
        />
        <div className="absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {relatedPhotos.length > 0 ? (
          <div className="absolute inset-0 flex translate-y-2 flex-col justify-end p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="line-clamp-3 text-sm leading-relaxed text-white/90">{tour.summary}</p>
            <p className="mt-4 text-[10px] font-medium uppercase tracking-wider text-white/60">
              From the gallery
            </p>
            <div className="mt-2 flex gap-2">
              {relatedPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="group/thumb relative aspect-square w-1/3 overflow-hidden rounded-lg shadow-lg ring-1 ring-white/25"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium text-ink">{tour.title}</h3>
        <p className="shrink-0 whitespace-nowrap text-lg font-medium text-clay">
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
