// ---------------------------------------------------------------------------
// GUEST REVIEWS — manually curated real guest feedback.
//
// TripAdvisor does not offer a free public API, so reviews are copied in
// manually as they're collected. Copy guest text verbatim (trimmed to an
// excerpt where the original is long), never paraphrase or invent.
//
// Source page for all "tripadvisor" entries below:
// https://www.tripadvisor.co.uk/Attraction_Review-g644047-d12338515-Reviews-Sri_Lanka_Tours_With_Chamara-Unawatuna_Galle_District_Southern_Province.html
// ---------------------------------------------------------------------------

import type { Review } from "@/types";

const TRIPADVISOR_URL =
  "https://www.tripadvisor.co.uk/Attraction_Review-g644047-d12338515-Reviews-Sri_Lanka_Tours_With_Chamara-Unawatuna_Galle_District_Southern_Province.html";

export const reviews: Review[] = [
  {
    id: "farwaz-h",
    guestName: "Farwaz H",
    country: "TripAdvisor Reviewer",
    rating: 5,
    date: "2026-01-19",
    title: "Recommend",
    contributions: 3,
    text: "This comes with a straight, wholehearted recommendation. From the moment the Sri Lanka tour began, everything felt well thought out and completely taken care of, leaving no room for worry.",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
  {
    id: "ute-s",
    guestName: "Ute S",
    country: "TripAdvisor Reviewer",
    rating: 5,
    date: "2026-01-03",
    title: "Travelling with Chamara was a pleasure",
    contributions: 1,
    text: "Travelling with Chamara was a pleasure! to travel in the airconditioned van was very comfortable. The driver handled the challenging drive to Kumbuk River Resort through Yala National Park exceptionally well! We felt very secure. Highly recommended!",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
  {
    id: "beata-k",
    guestName: "Beata K",
    country: "TripAdvisor Reviewer",
    rating: 5,
    date: "2025-10-15",
    title: "Girls trip!!! 🐒🌴🌊♥️",
    contributions: 2,
    tripType: "Friends",
    text: "Amazing time with such helpful and professional driver! We spent 7 days together. Bussy time with lots of excellent experiences, beautiful views, flavors and food. Chamara is patient, warm and happy person.",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
  {
    id: "coastal21777299492",
    guestName: "Coastal21777299492",
    country: "TripAdvisor Reviewer",
    rating: 5,
    date: "2025-10-12",
    title: "Transfer Unawatuna to Colombo with Lakshan",
    contributions: 2,
    tripType: "Solo",
    text: "Thank you so much to Lakshan for the transfer. Very courteous, professional & safe. He went above & beyond and even stopped at a super market for me to purchase some spices. Highly recommend.",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
  {
    id: "kossa1993",
    guestName: "Kossa1993",
    country: "TripAdvisor Reviewer",
    rating: 5,
    date: "2025-09-24",
    title: "Safe, reliable and warm - highly recommended!",
    contributions: 19,
    tripType: "Couples",
    text: "We spent 12 days with Chamara in Sri Lanka and we really liked it. Chamara is a very safe driver and an attentive guide. He took us reliably from place to place, pointed out highlights on the way and always gladly made a stop if necessary.",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
  {
    id: "wegibernstein",
    guestName: "wegibernstein",
    country: "Hamburg, Germany",
    rating: 5,
    date: "2025-09-22",
    title: "Varied, sometimes deeper dive",
    contributions: 36,
    tripType: "Solo",
    text: "Wonderful tour with many incredibly beautiful experiences, very varied and interesting. Mountain scenery, nature, animals, coastline, beach sea ... what more could you want.",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
  {
    id: "heidel-kaye-s",
    guestName: "Heidel Kaye S",
    country: "TripAdvisor Reviewer",
    rating: 5,
    date: "2025-09-22",
    title: "Awesome Tour",
    contributions: 1,
    text: "The tour is very good and we saw the animals from Yala because our visit is on time. Our driver also is kind and communicates well with us.",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
  {
    id: "sophie",
    guestName: "sophie",
    country: "Hoorn, The Netherlands",
    rating: 5,
    date: "2025-09-10",
    title: "Top driver!",
    contributions: 1,
    tripType: "Couples",
    text: "Very nice driver who is happy to take you everywhere! He arrives on time and the communication runs super smooth.",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
  {
    id: "hira-k",
    guestName: "Hira K",
    country: "United Arab Emirates",
    rating: 5,
    date: "2025-08-30",
    title: "SIMPLY AMAZING",
    contributions: 6,
    text: "I had the most amazing solo day trip in Ella with my guide Chamara. He is not just a guide, but also a wonderful photographer capturing all the best moments along the way. I felt completely safe and comfortable throughout the trip.",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
  {
    id: "compass42654354334",
    guestName: "Compass42654354334",
    country: "TripAdvisor Reviewer",
    rating: 5,
    date: "2025-07-12",
    title: "Thank you Chamara for this wonderful trip",
    contributions: 2,
    text: "10 days of amazing tours. Chamara was an exceptional travel companion, took care of every detail and always made himself available. Sri Lanka has given us great emotions that we will cherish in our hearts.",
    source: "tripadvisor",
    link: TRIPADVISOR_URL,
  },
];
