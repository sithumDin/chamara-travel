import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TourCard } from "@/components/tours/TourCard";
import { featuredTours } from "@/data/tours";

export function FeaturedTours() {
  const tours = featuredTours();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-lg text-balance text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            Leave the guesswork behind. Travel Sri Lanka with Chamara.
          </h2>
          <Button href="/tours" variant="primary" size="md" className="hidden sm:inline-flex">
            View All Packages
          </Button>
        </Reveal>

        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <Reveal key={tour.slug} delay={(index % 3) * 100}>
              <TourCard tour={tour} priority={index === 0} />
            </Reveal>
          ))}
        </div>

        <Button href="/tours" variant="primary" size="md" className="mt-10 w-full sm:hidden">
          View All Packages
        </Button>
      </Container>
    </section>
  );
}
