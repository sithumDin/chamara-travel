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
    <section className="py-16 sm:py-24">
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
            className="text-sm font-medium text-ink underline underline-offset-4"
          >
            Read all reviews on TripAdvisor
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
