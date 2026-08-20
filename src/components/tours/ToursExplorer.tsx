"use client";

import { useMemo, useState } from "react";
import type { Tour, TourTheme } from "@/types";
import { TourCard } from "@/components/tours/TourCard";
import { cn } from "@/lib/utils";

type DurationFilter = "all" | "1-day" | "3-5-days" | "7-plus-days";

const durationFilters: { value: DurationFilter; label: string }[] = [
  { value: "all", label: "Any Duration" },
  { value: "1-day", label: "1 Day" },
  { value: "3-5-days", label: "3 - 5 Days" },
  { value: "7-plus-days", label: "7+ Days" },
];

const themeFilters: { value: TourTheme | "all"; label: string }[] = [
  { value: "all", label: "All Themes" },
  { value: "beach", label: "Beach" },
  { value: "culture", label: "Culture" },
  { value: "wildlife", label: "Wildlife" },
  { value: "adventure", label: "Adventure" },
  { value: "honeymoon", label: "Honeymoon" },
  { value: "hill-country", label: "Hill Country" },
];

function matchesDuration(tour: Tour, filter: DurationFilter) {
  if (filter === "all") return true;
  if (filter === "1-day") return tour.durationDays === 1;
  if (filter === "3-5-days") return tour.durationDays >= 3 && tour.durationDays <= 5;
  return tour.durationDays >= 7;
}

function FilterPill<T extends string>({
  value,
  label,
  active,
  onClick,
}: {
  value: T;
  label: string;
  active: boolean;
  onClick: (value: T) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active ? "border-ink bg-ink text-white" : "border-border bg-paper text-ink-soft hover:border-ink/40"
      )}
    >
      {label}
    </button>
  );
}

export function ToursExplorer({ tours }: { tours: Tour[] }) {
  const [duration, setDuration] = useState<DurationFilter>("all");
  const [theme, setTheme] = useState<TourTheme | "all">("all");

  const filtered = useMemo(
    () =>
      tours.filter(
        (tour) => matchesDuration(tour, duration) && (theme === "all" || tour.themes.includes(theme))
      ),
    [tours, duration, theme]
  );

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-border pb-8">
        <div>
          <p className="mb-2 text-xs font-medium text-muted">Duration</p>
          <div className="flex flex-wrap gap-2">
            {durationFilters.map((f) => (
              <FilterPill key={f.value} value={f.value} label={f.label} active={duration === f.value} onClick={setDuration} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium text-muted">Theme</p>
          <div className="flex flex-wrap gap-2">
            {themeFilters.map((f) => (
              <FilterPill key={f.value} value={f.value} label={f.label} active={theme === f.value} onClick={setTheme} />
            ))}
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour, index) => (
            <TourCard key={tour.slug} tour={tour} priority={index === 0} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-muted">
          No tours match those filters yet. Try a different combination, or{" "}
          <a href="/contact" className="underline underline-offset-2">
            ask us for a custom trip
          </a>
          .
        </p>
      )}
    </div>
  );
}
