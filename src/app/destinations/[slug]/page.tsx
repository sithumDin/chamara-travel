import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, CloudSun, Backpack, ArrowRight, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { TourGallery } from "@/components/tours/TourGallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { destinations, getDestinationBySlug, relatedDestinations } from "@/data/destinations";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};

  return {
    title: destination.name,
    description: destination.summary,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: destination.name,
      description: destination.summary,
      images: [{ url: destination.src, width: destination.width, height: destination.height, alt: destination.alt }],
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const related = relatedDestinations(destination.slug);
  const galleryImages = [{ src: destination.src, alt: destination.alt }, ...destination.images];

  return (
    <>
      <Header />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Sri Lanka", path: "/about-sri-lanka" },
          { name: destination.name, path: `/destinations/${destination.slug}` },
        ])}
      />

      <main>
        <Container className="pt-28 sm:pt-32">
          <Link
            href="/about-sri-lanka"
            className="flex w-fit items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to About Sri Lanka
          </Link>

          <Eyebrow className="mt-6">Sri Lanka</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            {destination.name}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted">{destination.summary}</p>

          <div className="mt-10">
            <TourGallery images={galleryImages} title={destination.name} />
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <CalendarDays className="size-5 text-ink" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{destination.bestTime}</p>
              <p className="text-xs text-muted">Best Time</p>
            </div>
            <div className="flex flex-col items-center gap-2 border-x border-border text-center">
              <CloudSun className="size-5 text-ink" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{destination.weather}</p>
              <p className="text-xs text-muted">Weather</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Backpack className="size-5 text-ink" aria-hidden="true" />
              <p className="text-sm font-medium text-ink">{destination.essentials}</p>
              <p className="text-xs text-muted">Bring</p>
            </div>
          </div>

          <div className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-medium tracking-tight text-ink">Overview</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted">{destination.description}</p>

            <a
              href="#inquiry"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white hover:bg-ink-soft"
            >
              Plan a Trip to {destination.name}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Container>

        {related.length > 0 ? (
          <section className="mt-20 py-16 sm:py-24">
            <Container>
              <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">More destinations</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/destinations/${d.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border transition-shadow hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={d.src}
                        alt={d.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-medium text-ink">{d.name}</h3>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{d.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <CtaBand
          title={`Ready to visit ${destination.name}?`}
          description="Tell us what you'd like to experience and we'll build a route around it."
          ctaLabel="Plan My Trip"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
