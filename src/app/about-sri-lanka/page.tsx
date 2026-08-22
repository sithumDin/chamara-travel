import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileCheck, Coins, Languages, Smartphone, ShieldCheck, Backpack, CalendarDays, CloudSun, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { destinations } from "@/data/destinations";
import { RegionSlideshowCard } from "@/components/sections/RegionSlideshowCard";

export const metadata: Metadata = {
  title: "About Sri Lanka",
  description:
    "A traveller's introduction to Sri Lanka — beaches, hill country, wildlife safaris, ancient cities, food and festivals, plus practical travel info on visas, currency and the best time to visit.",
  alternates: { canonical: "/about-sri-lanka" },
};

const regions = [
  {
    title: "Beaches",
    text: "From the surf towns of the south coast to the quiet, palm-lined bays of the east, Sri Lanka's coastline shifts character with the monsoon — there's a calm beach somewhere on the island in every season.",
    images: [
      { src: "/gallery/golden-sand-beach-rocky-shoreline.jpg", alt: "Golden sand beach along a rocky shoreline" },
      { src: "/gallery/palm-fringed-turquoise-bay-coast.jpg", alt: "Palm-fringed turquoise bay coastline" },
      { src: "/gallery/fishing-boats-beach-sunset.jpg", alt: "Fishing boats on the beach at sunset" },
    ],
  },
  {
    title: "Hill Country",
    text: "Rolling tea estates, misty ridgelines, waterfalls and the cool climate of Nuwara Eliya and Ella make the central highlands feel like an entirely different country.",
    images: [
      { src: "/gallery/misty-tea-plantation-hillside.jpg", alt: "Misty tea plantation hillside" },
      { src: "/gallery/tall-cascading-waterfall-cliff.jpg", alt: "Tall cascading waterfall down a cliff face" },
      { src: "/gallery/horton-plains-grassland-mountain-view.jpg", alt: "Horton Plains grassland with mountain views" },
    ],
  },
  {
    title: "Wildlife & Safari",
    text: "Yala, Udawalawe, Wilpattu and Minneriya put you eye to eye with leopards, elephant herds and prolific birdlife — some of the best wildlife viewing anywhere in Asia.",
    images: [
      { src: "/gallery/048-leopard-resting-tree-branch.jpg", alt: "Leopard resting on a tree branch" },
      { src: "/gallery/men-bathing-elephants-river.jpg", alt: "Men bathing elephants in the river" },
      { src: "/gallery/sambar-deer-antlers-hillside.jpg", alt: "Sambar deer with antlers on a grassy hillside" },
    ],
  },
  {
    title: "Ancient Cities & Culture",
    text: "The Cultural Triangle's UNESCO sites — Sigiriya, Anuradhapura, Polonnaruwa and Kandy — trace over two thousand years of continuous Buddhist civilization.",
    images: [
      { src: "/gallery/073-couple-sigiriya-rock-fortress-view.jpg", alt: "Couple with a view of Sigiriya rock fortress" },
      { src: "/gallery/polonnaruwa-ancient-staircase-moonstone.jpg", alt: "Ancient staircase and moonstone carving at Polonnaruwa" },
      { src: "/gallery/dambulla-cave-temple-golden-buddha.jpg", alt: "Golden Buddha statue at Dambulla cave temple" },
    ],
  },
  {
    title: "Food",
    text: "Rice and curry built around coconut, chilli and curry leaf, hoppers for breakfast, and some of the best cinnamon, tea and seafood in the world.",
    images: [
      { src: "/gallery/058-sri-lankan-curry-rice-spread.jpg", alt: "Sri Lankan curry and rice spread" },
      { src: "/gallery/village-clay-pot-rice-curry-spread.jpg", alt: "Traditional village clay pot rice and curry spread" },
      { src: "/gallery/039-tropical-fruit-platter-jackfruit-banana.jpg", alt: "Tropical fruit platter with jackfruit and banana" },
    ],
  },
  {
    title: "Festivals",
    text: "From the Kandy Esala Perahera's torchlit elephant procession to the island-wide Sinhala and Tamil New Year in April, festivals offer a window into daily Sri Lankan life.",
    images: [
      { src: "/gallery/046-friends-temple-flower-offering-kandy.jpg", alt: "Friends making a flower offering at a Kandy temple" },
      { src: "/gallery/072-temple-tooth-relic-kandy.jpg", alt: "The Temple of the Tooth Relic in Kandy" },
      { src: "/gallery/woman-reclining-buddha-statue-prayer.jpg", alt: "Woman in prayer before a reclining Buddha statue" },
    ],
  },
];

const bestTimeToVisit = [
  { months: "December – March", note: "Peak season on the west and south coasts; dry, sunny weather island-wide is best in this window." },
  { months: "April", note: "Sinhala & Tamil New Year — a festive time to visit, though transport and hotels get busy." },
  { months: "May – September", note: "Best time for the east coast (Trincomalee, Arugam Bay); the south-west sees more rain." },
  { months: "October – November", note: "Inter-monsoon transition — showers are possible island-wide, but crowds and prices are lower." },
];

const practicalInfo = [
  {
    icon: FileCheck,
    title: "Visa (ETA)",
    text: "Most nationalities need an Electronic Travel Authorization before arrival — apply online in advance, it typically takes a few minutes.",
  },
  {
    icon: Coins,
    title: "Currency",
    text: "The Sri Lankan Rupee (LKR). Cards are widely accepted in cities and hotels; carry cash for rural areas and small vendors.",
  },
  {
    icon: Languages,
    title: "Language",
    text: "Sinhala and Tamil are the official languages. English is widely spoken in tourism, hospitality and by your driver-guide.",
  },
  {
    icon: Smartphone,
    title: "SIM Cards",
    text: "Prepaid tourist SIMs are available at the airport and are inexpensive — handy for maps, translation and staying in touch.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Sri Lanka is generally very safe for travellers. Standard precautions apply — usual road, water and sun-safety awareness.",
  },
  {
    icon: Backpack,
    title: "What to Pack",
    text: "Light, breathable clothing, a rain jacket in the wetter months, comfortable walking shoes, and modest clothing for temple visits.",
  },
];

export default function AboutSriLankaPage() {
  return (
    <>
      <Header />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Sri Lanka", path: "/about-sri-lanka" },
        ])}
      />
      <main>
        <PageHero
          eyebrow="About Sri Lanka"
          title="One island, every kind of landscape"
          description="We believe every trip should feel personal, not packaged. From ancient cities carved into rock to wild coastlines and misty tea country, each journey is built around the traveller, not a fixed itinerary."
          imageSrc="/gallery/about-sri-lanka-hero-bg.jpg"
          imageAlt="Aerial view of Sri Lanka's coastline meeting the hills"
        />

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="The Island"
              title="Everything Sri Lanka is known for, close together"
              description="At just 65,000 square kilometres, Sri Lanka packs beaches, rainforest, highland tea country and ancient cities into distances you can cover comfortably by road in a single trip."
              align="left"
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regions.map((region) => (
                <RegionSlideshowCard
                  key={region.title}
                  title={region.title}
                  text={region.text}
                  images={region.images}
                />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Sri Lanka"
              title="Best destinations"
              description="The places every itinerary should include, at a glance."
              align="left"
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-paper shadow-sm transition-shadow hover:shadow-lg"
                >
                  <Link href={`/destinations/${destination.slug}`} className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={destination.src}
                      alt={destination.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-medium text-ink">
                      <Link href={`/destinations/${destination.slug}`} className="hover:underline">
                        {destination.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{destination.summary}</p>

                    <div className="mt-4 space-y-1.5 text-sm text-muted">
                      <div className="flex items-start gap-2.5">
                        <CalendarDays className="mt-0.5 size-4 shrink-0 text-ink/60" aria-hidden="true" />
                        <p>
                          <span className="text-ink/60">Best time:</span> {destination.bestTime}
                        </p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CloudSun className="mt-0.5 size-4 shrink-0 text-ink/60" aria-hidden="true" />
                        <p>
                          <span className="text-ink/60">Weather:</span> {destination.weather}
                        </p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Backpack className="mt-0.5 size-4 shrink-0 text-ink/60" aria-hidden="true" />
                        <p>
                          <span className="text-ink/60">Bring:</span> {destination.essentials}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/destinations/${destination.slug}`}
                      className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink hover:underline"
                    >
                      Read more
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Planning" title="Best time to visit" align="left" />
            <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-paper">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="px-5 py-4 font-medium text-ink">
                      Months
                    </th>
                    <th scope="col" className="px-5 py-4 font-medium text-ink">
                      What to expect
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {bestTimeToVisit.map((row) => (
                    <tr key={row.months}>
                      <td className="whitespace-nowrap px-5 py-4 font-medium text-ink">{row.months}</td>
                      <td className="px-5 py-4 text-muted">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading eyebrow="Before You Go" title="Practical travel info" align="left" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {practicalInfo.map((item) => (
                <Card key={item.title} className="flex flex-col gap-3">
                  <item.icon className="size-5 text-ink" aria-hidden="true" />
                  <h3 className="text-base font-medium text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <CtaBand
          title="Ready to see it for yourself?"
          description="Tell us what you'd like to experience and we'll build a route around it."
          ctaLabel="Plan My Trip"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
