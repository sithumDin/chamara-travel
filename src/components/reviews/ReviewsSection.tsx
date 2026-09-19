import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { TripAdvisorWidgetSlot } from "@/components/reviews/TripAdvisorWidgetSlot";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/data/site-config";

export function ReviewsSection({ showViewAll = true }: { showViewAll?: boolean }) {
  const { showManualReviews, showTripAdvisorWidget } = siteConfig.features;
  const { rating, reviewCount } = siteConfig.tripAdvisor;

  return (
    <section className="pt-16 pb-4 sm:pt-24 sm:pb-8">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our travellers say"
          description={`Rated ${rating} / 5 from ${reviewCount}+ verified reviews on TripAdvisor.`}
        />

        <div className="mt-12 space-y-10">
          {showManualReviews ? <ReviewsCarousel reviews={reviews} /> : null}
          {showTripAdvisorWidget ? <TripAdvisorWidgetSlot /> : null}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={siteConfig.tripAdvisor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4"
            style={{ color: "#34e0a1" }}
          >
            <span className="flex size-4 items-center justify-center rounded-full" style={{ backgroundColor: "#34e0a1" }}>
              <span className="size-1.5 rounded-full bg-white" />
            </span>
            Read all reviews on Tripadvisor
          </a>
          {showViewAll ? (
            <Button href="/reviews" variant="outline" size="md" className="mt-2">
              View All Reviews
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
