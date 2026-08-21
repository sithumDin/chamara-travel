import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { SriLankaStatement } from "@/components/sections/SriLankaStatement";
import { TrustBar } from "@/components/sections/TrustBar";
import { DestinationsCarousel } from "@/components/sections/DestinationsCarousel";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { FleetSection } from "@/components/sections/FleetSection";
import { FeaturedTours } from "@/components/sections/FeaturedTours";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { InquirySection } from "@/components/sections/InquirySection";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Private Sri Lanka Tour Packages`,
  description:
    "Book a private, driver-guided Sri Lanka tour with a licensed local guide. Custom itineraries, safaris, hill country, beaches and ancient cities — fair pricing, 24/7 support.",
  alternates: { canonical: "/" },
  openGraph: {
    url: siteConfig.url,
    title: `${siteConfig.businessName} | Private Sri Lanka Tour Packages`,
    description:
      "Book a private, driver-guided Sri Lanka tour with a licensed local guide. Custom itineraries, safaris, hill country, beaches and ancient cities.",
  },
};

export default function HomePage() {
  return (
    <>
      <Header transparent />
      <main>
        <Hero />
        <DestinationsCarousel />
        <TrustBar />
        <FeaturedTours />
        <SriLankaStatement />
        <ServiceHighlights />
        <FleetSection />
        <GalleryPreview />
        <ReviewsSection />
        <InquirySection />
      </main>
    </>
  );
}
