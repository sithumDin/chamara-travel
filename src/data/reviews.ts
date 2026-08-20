// ---------------------------------------------------------------------------
// GUEST REVIEWS — clearly-labelled PLACEHOLDER content.
//
// TripAdvisor does not offer a free public API, so real reviews cannot be
// pulled in automatically. Two options, and they can run side by side:
//
//   1. Manually add real reviews here as you collect them (copy guest
//      permission text verbatim, do not paraphrase).
//   2. Paste the official TripAdvisor Widget Center embed script into
//      /src/components/sections/TripAdvisorWidgetSlot.tsx and flip
//      `features.showTripAdvisorWidget` to true in site-config.ts.
//
// DO NOT invent or leave fake-sounding reviews live on the real site —
// replace every entry below with genuine guest feedback before launch.
// ---------------------------------------------------------------------------

import type { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: "placeholder-1",
    guestName: "PLACEHOLDER — Guest Name",
    country: "United Kingdom",
    rating: 5,
    date: "2025-11-02",
    text: "PLACEHOLDER REVIEW TEXT. Replace with a real guest review — e.g. 'Chamara was an incredible guide, flexible with our plans and full of local knowledge. The vehicle was spotless and always on time.'",
    source: "tripadvisor",
    tourSlug: "ultimate-sri-lanka-round-trip",
  },
  {
    id: "placeholder-2",
    guestName: "PLACEHOLDER — Guest Name",
    country: "Australia",
    rating: 5,
    date: "2025-10-18",
    text: "PLACEHOLDER REVIEW TEXT. Replace with a real guest review — e.g. 'Best decision we made for our honeymoon. Everything was arranged perfectly and Chamara felt like a friend by the end of the trip.'",
    source: "google",
    tourSlug: "romantic-honeymoon-escape",
  },
  {
    id: "placeholder-3",
    guestName: "PLACEHOLDER — Guest Name",
    country: "Germany",
    rating: 5,
    date: "2025-09-27",
    text: "PLACEHOLDER REVIEW TEXT. Replace with a real guest review — e.g. 'We saw three leopards on our Yala safari! Chamara knew exactly where to look and the whole trip was seamless.'",
    source: "tripadvisor",
    tourSlug: "yala-wildlife-safari-escape",
  },
  {
    id: "placeholder-4",
    guestName: "PLACEHOLDER — Guest Name",
    country: "Canada",
    rating: 5,
    date: "2025-08-14",
    text: "PLACEHOLDER REVIEW TEXT. Replace with a real guest review — e.g. 'Safe driver, clean car, and genuinely warm hospitality throughout. Highly recommend for families travelling with kids.'",
    source: "direct",
  },
  {
    id: "placeholder-5",
    guestName: "PLACEHOLDER — Guest Name",
    country: "Netherlands",
    rating: 4,
    date: "2025-07-30",
    text: "PLACEHOLDER REVIEW TEXT. Replace with a real guest review — e.g. 'Great itinerary and pacing. Would have liked a bit more time in Ella but overall a fantastic trip.'",
    source: "google",
    tourSlug: "hill-country-tea-trails",
  },
  {
    id: "placeholder-6",
    guestName: "PLACEHOLDER — Guest Name",
    country: "United States",
    rating: 5,
    date: "2025-06-09",
    text: "PLACEHOLDER REVIEW TEXT. Replace with a real guest review — e.g. 'Chamara customized our trip after we changed our minds twice — nothing was too much trouble. Five stars all the way.'",
    source: "tripadvisor",
    tourSlug: "cultural-triangle-explorer",
  },
];
