// Shared domain types for the site. Keep these in sync with the shape of
// the data files under /src/data/ — the data files are typed against these.

export type TourTheme =
  | "beach"
  | "culture"
  | "wildlife"
  | "adventure"
  | "honeymoon"
  | "hill-country";

export type TourDifficulty = "easy" | "moderate" | "challenging";

export interface TourImage {
  src: string;
  alt: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  overnightAt?: string;
}

export interface PriceTier {
  groupSize: string; // e.g. "1 traveller", "2 travellers", "5+ travellers"
  pricePerPersonUsd: number;
}

export interface Tour {
  slug: string;
  title: string;
  summary: string;
  description: string;
  images: TourImage[];
  durationDays: number;
  durationLabel: string; // e.g. "6 Days / 5 Nights"
  themes: TourTheme[];
  groupSize: string; // e.g. "2 - 8 travellers"
  difficulty: TourDifficulty;
  fromPriceUsd: number;
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  priceTiers: PriceTier[];
  mapImage?: TourImage;
  highlights: string[];
  featured?: boolean;
}

export type ReviewSource = "tripadvisor" | "google" | "direct";

export interface Review {
  id: string;
  guestName: string;
  country: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // ISO date
  text: string;
  source: ReviewSource;
  tourSlug?: string;
  link?: string;
}

export type GalleryCategory =
  | "beaches"
  | "wildlife"
  | "culture"
  | "hill-country"
  | "guests";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InquiryPayload {
  fullName: string;
  email: string;
  phone?: string;
  country: string;
  interestedTour: string;
  arrivalDate?: string;
  numberOfDays?: number;
  adults: number;
  children: number;
  message: string;
  consent: boolean;
  honeypot?: string;
}
