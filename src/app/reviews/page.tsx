import type { Metadata } from "next";
import { Star, MessageSquareHeart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { TripAdvisorWidgetSlot } from "@/components/reviews/TripAdvisorWidgetSlot";
import { ReviewForm } from "@/components/forms/ReviewForm";
import { InquirySection } from "@/components/sections/InquirySection";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { reviewsSchema, breadcrumbSchema } from "@/lib/schema";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About Us & Guest Reviews",
  description:
    "Meet Sri Lanka Tours with Chamara — who we are, what we do, and why travellers choose us — plus reviews from guests who've explored Sri Lanka with us.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const { showTripAdvisorWidget } = siteConfig.features;
  const { rating, reviewCount } = siteConfig.tripAdvisor;

  // Reviews still marked PLACEHOLDER haven't been replaced with real guest
  // feedback yet — never show those on the live site (see src/data/reviews.ts).
  const realReviews = reviews.filter((r) => !r.guestName.toUpperCase().includes("PLACEHOLDER"));

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
          eyebrow="About Us"
          title="Who we are, and why travellers choose us"
          description={`A private driver-guided tour service, rated ${rating} / 5 across TripAdvisor, Google and direct feedback.`}
          imageSrc="/gallery/153-women-waving-safari-jeep-roof.jpg"
          imageAlt="Guests waving from the roof of a safari jeep"
        />

        <AboutIntro />

        <TrustBar />

        <ServiceHighlights
          eyebrow="Why Choose Us"
          title="What makes a trip with us different"
          description="Not a call center, not a franchise — one licensed driver-guide, one comfortable vehicle, and a full range of transport and touring options built entirely around you."
        />

        <section id="write-a-review" className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              <Reveal>
                <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">Our Reviews</h2>
                <p className="mt-3 text-pretty text-muted">Feedback shared directly with us by guests, right here on our site.</p>

                {realReviews.length > 0 ? (
                  <div className="mt-6">
                    <ReviewsCarousel reviews={realReviews} />
                  </div>
                ) : (
                  <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl border border-dashed border-border bg-surface px-6 py-10 text-center">
                    <MessageSquareHeart className="size-6 text-muted" aria-hidden="true" />
                    <p className="text-sm text-muted">No website reviews yet — be the first to share how your trip went.</p>
                  </div>
                )}

                <div className="mt-14">
                  <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">Been on a trip with us?</h2>
                  <p className="mt-3 text-pretty text-muted">
                    We&apos;d love to hear how it went — your review helps other travellers planning their own Sri
                    Lanka trip.
                  </p>
                  <div className="mt-8 rounded-3xl border border-border bg-paper p-6 sm:p-8">
                    <ReviewForm />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100} className="lg:border-l lg:border-border lg:pl-16">
                <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">What travellers are saying</h2>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-5 fill-ink text-ink" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-ink">
                    {rating} / 5 — based on {reviewCount}+ reviews on TripAdvisor
                  </p>
                </div>

                <a
                  href={siteConfig.tripAdvisor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-ink-soft"
                >
                  Read All Reviews on TripAdvisor
                </a>

                {showTripAdvisorWidget ? (
                  <div className="mt-10">
                    <TripAdvisorWidgetSlot />
                  </div>
                ) : null}
              </Reveal>
            </div>
          </Container>
        </section>

        <InquirySection />
      </main>
    </>
  );
}
