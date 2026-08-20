// NOTE: The first-person copy below (bio, timeline, vehicle details) is
// realistic PLACEHOLDER content written in Chamara's voice. Replace it with
// Chamara's real story, real photos, and real license/certification details
// before launch.

import type { Metadata } from "next";
import Image from "next/image";
import { Languages, ShieldCheck, Car, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "My Experience",
  description:
    "Meet Chamara — a licensed Sri Lankan driver-guide with over a decade of experience showing travellers the island, in his own words.",
  alternates: { canonical: "/my-experience" },
};

const milestones = [
  { year: "2013", text: "Started as a tour driver for a Colombo-based travel company, learning the roads and the routines of long private tours." },
  { year: "2016", text: "Completed formal tourist-guide licensing and certification, and began leading multi-day itineraries independently." },
  { year: "2019", text: "Launched Sri Lanka Tours with Chamara to offer travellers a more personal, flexible alternative to fixed group tours." },
  { year: "2023", text: "Crossed 500 completed private tours, with returning guests and referrals now making up a large share of bookings." },
];

const guestQuotes = reviews.slice(0, 3);

export default function MyExperiencePage() {
  return (
    <>
      <Header />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "My Experience", path: "/my-experience" },
        ])}
      />
      <main>
        <PageHero
          eyebrow="My Experience"
          title="Hi, I'm Chamara"
          description="A little about me, my vehicle, and how I've spent the last decade showing travellers Sri Lanka."
          imageSrc="https://picsum.photos/seed/lk-experience-hero/2000/1200"
          imageAlt="Chamara's tour vehicle parked at a scenic viewpoint in Sri Lanka"
        />

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image
                  src="https://picsum.photos/seed/lk-chamara-portrait/900/1125"
                  alt="Portrait of Chamara, your driver-guide in Sri Lanka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">My story</h2>
                <div className="mt-4 space-y-4 text-pretty leading-relaxed text-muted">
                  <p>
                    I grew up in the hill country, and some of my earliest memories are of long bus rides
                    between towns, watching the landscape change from tea estate to jungle to coastline. That
                    curiosity about the island never really left me — it&apos;s why I became a driver-guide
                    instead of taking a desk job after school.
                  </p>
                  <p>
                    Over the past ten-plus years I&apos;ve driven guests through almost every corner of Sri
                    Lanka — from sunrise safaris in Yala to quiet temple mornings in Anuradhapura, honeymoon
                    trips down the south coast, and family holidays with three generations packed into one
                    vehicle. Every trip is different, and I still enjoy building each one from scratch.
                  </p>
                  <p>
                    What I care about most is that you actually get to relax. That means a reliable vehicle,
                    an itinerary that isn&apos;t rushed, and someone who tells you honestly when a site
                    isn&apos;t worth the detour — not just where the guidebook says to go.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-surface p-5">
                    <p className="text-2xl font-medium text-ink">10+</p>
                    <p className="mt-1 text-xs text-muted">Years Guiding</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-surface p-5">
                    <p className="text-2xl font-medium text-ink">500+</p>
                    <p className="mt-1 text-xs text-muted">Tours Completed</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-surface p-5">
                    <p className="text-2xl font-medium text-ink">3</p>
                    <p className="mt-1 text-xs text-muted">Languages Spoken</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-ink-soft">
                    <ShieldCheck className="size-4" aria-hidden="true" />
                    Government-Registered Driver &amp; Guide
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-ink-soft">
                    <Languages className="size-4" aria-hidden="true" />
                    English, Sinhala, conversational German
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="The Fleet" title="A comfortable, well-maintained ride for any group size" align="left" />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://picsum.photos/seed/lk-vehicle-exterior/1000/750"
                  alt="One of our air-conditioned tour vehicles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://picsum.photos/seed/lk-vehicle-interior/1000/750"
                  alt="Interior of one of our tour vehicles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-paper p-5">
              <Car className="size-5 shrink-0 text-ink" aria-hidden="true" />
              <p className="text-sm text-ink-soft">
                Cars, vans, SUVs and buses available depending on your group size — all air-conditioned,
                seatbelt-equipped, regularly serviced and fully insured for private hire.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Milestones" title="A decade on the road" align="left" />
            <div className="mt-10 space-y-8 border-l border-border pl-6 sm:pl-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                  <span className="absolute -left-[31px] top-1 size-2.5 rounded-full bg-ink sm:-left-[39px]" />
                  <p className="text-sm font-medium text-ink">{m.year}</p>
                  <p className="mt-1 text-pretty text-muted">{m.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {guestQuotes.length > 0 ? (
          <section className="bg-surface py-16 sm:py-20">
            <Container>
              <SectionHeading eyebrow="In Their Words" title="A few notes from past guests" align="left" />
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {guestQuotes.map((q) => (
                  <div key={q.id} className="rounded-2xl bg-paper p-6">
                    <div className="flex items-center gap-0.5" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`size-3.5 ${i < q.rating ? "fill-ink text-ink" : "text-border"}`} />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">&ldquo;{q.text}&rdquo;</p>
                    <p className="mt-3 text-xs text-muted">
                      {q.guestName}, {q.country}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <CtaBand
          title="Let's plan your trip together"
          description="I'll reply personally within 24 hours with a first draft of your itinerary."
          ctaLabel="Get In Touch"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
