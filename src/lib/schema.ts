// Schema.org JSON-LD builders. Each function returns a plain object ready
// to hand to <JsonLd data={...} /> — see src/components/seo/JsonLd.tsx.

import { siteConfig } from "@/data/site-config";
import { reviews as allReviews } from "@/data/reviews";
import type { Tour, FaqItem } from "@/types";

export function travelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.businessName,
    alternateName: siteConfig.shortName,
    description:
      "Private driver-guided Sri Lanka tour packages, custom itineraries and airport transfers led by a licensed local guide.",
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressCountry: "LK",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.youtube, siteConfig.tripAdvisor.url],
    // Reflects the real, published TripAdvisor rating (see site-config.ts) —
    // not the small placeholder review sample in reviews.ts.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.tripAdvisor.rating,
      reviewCount: siteConfig.tripAdvisor.reviewCount,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#local-business`,
    name: siteConfig.businessName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressCountry: "LK",
    },
  };
}

export function touristTripSchema(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.description,
    image: tour.images.map((i) => i.src),
    touristType: tour.themes.join(", "),
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: day.title,
        description: day.description,
      })),
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: tour.fromPriceUsd,
      url: `${siteConfig.url}/tours/${tour.slug}`,
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.businessName,
      url: siteConfig.url,
    },
  };
}

export function reviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.businessName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.tripAdvisor.rating,
      reviewCount: siteConfig.tripAdvisor.reviewCount,
    },
    review: allReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.guestName },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
    })),
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
