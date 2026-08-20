import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, Users, Gauge, Check, X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { TourGallery } from "@/components/tours/TourGallery";
import { TourCard } from "@/components/tours/TourCard";
import { InquirySection } from "@/components/sections/InquirySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { touristTripSchema, breadcrumbSchema } from "@/lib/schema";
import { tours, getTourBySlug, relatedTours } from "@/data/tours";
import { formatUsd } from "@/lib/utils";
import type { Tour } from "@/types";

const difficultyLabel: Record<Tour["difficulty"], string> = {
  easy: "Easy",
  moderate: "Moderate",
  challenging: "Challenging",
};

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  return {
    title: `${tour.title} — ${tour.durationLabel}`,
    description: tour.summary,
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: {
      title: `${tour.title} — ${tour.durationLabel}`,
      description: tour.summary,
      images: [{ url: tour.images[0].src, width: 1600, height: 1067, alt: tour.images[0].alt }],
    },
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const related = relatedTours(tour.slug);

  return (
    <>
      <Header />
      <JsonLd data={touristTripSchema(tour)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tour Packages", path: "/tours" },
          { name: tour.title, path: `/tours/${tour.slug}` },
        ])}
      />

      <main>
        <Container className="pt-28 sm:pt-32">
          <Eyebrow>{tour.themes.join(" · ")}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            {tour.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted">{tour.summary}</p>

          <div className="mt-10">
            <TourGallery images={tour.images} title={tour.title} />
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <Clock className="size-5 text-ink" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{tour.durationLabel}</p>
              <p className="text-xs text-muted">Duration</p>
            </div>
            <div className="flex flex-col items-center gap-2 border-x border-border text-center">
              <Users className="size-5 text-ink" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{tour.groupSize}</p>
              <p className="text-xs text-muted">Group Size</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Gauge className="size-5 text-ink" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{difficultyLabel[tour.difficulty]}</p>
              <p className="text-xs text-muted">Difficulty</p>
            </div>
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1.6fr_1fr]">
            <div className="min-w-0">
              <h2 className="text-2xl font-medium tracking-tight text-ink">Overview</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted">{tour.description}</p>

              <h2 className="mt-12 text-2xl font-medium tracking-tight text-ink">Highlights</h2>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-medium tracking-tight text-ink">Day-by-Day Itinerary</h2>
              <Accordion
                className="mt-4"
                items={tour.itinerary.map((day) => ({
                  id: String(day.day),
                  trigger: `Day ${day.day} — ${day.title}`,
                  content: (
                    <div>
                      <p>{day.description}</p>
                      {day.overnightAt ? (
                        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-light">
                          Overnight: {day.overnightAt}
                        </p>
                      ) : null}
                    </div>
                  ),
                }))}
              />

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-ink">What&apos;s Included</h3>
                  <ul className="mt-3 space-y-2.5">
                    {tour.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <Check className="mt-0.5 size-4 shrink-0 text-green-700" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-ink">What&apos;s Not Included</h3>
                  <ul className="mt-3 space-y-2.5">
                    {tour.excluded.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <X className="mt-0.5 size-4 shrink-0 text-red-600" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {tour.mapImage ? (
                <div className="mt-12">
                  <h2 className="text-2xl font-medium tracking-tight text-ink">Route Map</h2>
                  <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={tour.mapImage.src}
                      alt={tour.mapImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-2xl border border-border bg-paper p-6">
                <p className="eyebrow text-muted">Pricing</p>
                <p className="mt-3 text-3xl font-medium tracking-tight text-ink">
                  from {formatUsd(tour.fromPriceUsd)}
                  <span className="text-sm font-normal text-muted"> / person</span>
                </p>
                <div className="mt-5 divide-y divide-border border-y border-border">
                  {tour.priceTiers.map((tier) => (
                    <div key={tier.groupSize} className="flex items-center justify-between py-3 text-sm">
                      <span className="text-ink-soft">{tier.groupSize}</span>
                      <span className="font-medium text-ink">{formatUsd(tier.pricePerPersonUsd)} pp</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#inquiry"
                  className="mt-6 flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white hover:bg-ink-soft"
                >
                  Inquire About This Tour
                </a>
              </div>
            </aside>
          </div>
        </Container>

        {related.length > 0 ? (
          <section className="mt-20 py-16 sm:py-24">
            <Container>
              <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">You might also like</h2>
              <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((t) => (
                  <TourCard key={t.slug} tour={t} />
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <InquirySection defaultTour={tour.title} />
      </main>
    </>
  );
}
