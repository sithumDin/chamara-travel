import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { TripAdvisorWidgetSlot } from "@/components/reviews/TripAdvisorWidgetSlot";
import { InquirySection } from "@/components/sections/InquirySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { reviewsSchema, breadcrumbSchema } from "@/lib/schema";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Guest Reviews",
  description:
    "Read reviews from travellers who've explored Sri Lanka with Chamara — private, driver-guided tours rated by real guests.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const { showManualReviews, showTripAdvisorWidget } = siteConfig.features;
  const { rating, reviewCount } = siteConfig.tripAdvisor;

  return (
    <>
      <Header />
      <JsonLd data={reviewsSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <main>
        <PageHero
          eyebrow="Reviews"
          title="What our guests are saying"
          description={`Rated ${rating} / 5 across TripAdvisor, Google and direct feedback.`}
          imageSrc="https://picsum.photos/seed/lk-reviews-hero/2000/1200"
          imageAlt="A traveller smiling on a Sri Lankan beach at sunset"
        />

        <section className="py-16 sm:py-20">
          <Container>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-ink text-ink" />
                ))}
              </div>
              <p className="text-lg font-medium text-ink">
                {rating} out of 5 — based on {reviewCount}+ reviews on TripAdvisor
              </p>
              <a
                href={siteConfig.tripAdvisor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink-soft"
              >
                Read All Reviews on TripAdvisor
              </a>
            </div>

            <div className="mt-14 space-y-10">
              {showManualReviews ? <ReviewsCarousel reviews={reviews} /> : null}
              {showTripAdvisorWidget ? <TripAdvisorWidgetSlot /> : null}
            </div>
          </Container>
        </section>

        <InquirySection />
      </main>
    </>
  );
}
