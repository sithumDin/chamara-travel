import type { Metadata } from "next";
import Image from "next/image";
import { FileCheck, Coins, Languages, Smartphone, ShieldCheck, Backpack } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Sri Lanka",
  description:
    "A traveller's introduction to Sri Lanka — beaches, hill country, wildlife safaris, ancient cities, food and festivals, plus practical travel info on visas, currency and the best time to visit.",
  alternates: { canonical: "/about-sri-lanka" },
};

const regions = [
  {
    title: "Beaches",
    seed: "lk-about-beaches-full",
    text: "From the surf towns of the south coast to the quiet, palm-lined bays of the east, Sri Lanka's coastline shifts character with the monsoon — there's a calm beach somewhere on the island in every season.",
  },
  {
    title: "Hill Country",
    seed: "lk-about-hills-full",
    text: "Rolling tea estates, misty ridgelines, waterfalls and the cool climate of Nuwara Eliya and Ella make the central highlands feel like an entirely different country.",
  },
  {
    title: "Wildlife & Safari",
    seed: "lk-about-wildlife-full",
    text: "Yala, Udawalawe, Wilpattu and Minneriya put you eye to eye with leopards, elephant herds and prolific birdlife — some of the best wildlife viewing anywhere in Asia.",
  },
  {
    title: "Ancient Cities & Culture",
    seed: "lk-about-culture-full",
    text: "The Cultural Triangle's UNESCO sites — Sigiriya, Anuradhapura, Polonnaruwa and Kandy — trace over two thousand years of continuous Buddhist civilization.",
  },
  {
    title: "Food",
    seed: "lk-about-food-full",
    text: "Rice and curry built around coconut, chilli and curry leaf, hoppers for breakfast, and some of the best cinnamon, tea and seafood in the world.",
  },
  {
    title: "Festivals",
    seed: "lk-about-festivals-full",
    text: "From the Kandy Esala Perahera's torchlit elephant procession to the island-wide Sinhala and Tamil New Year in April, festivals offer a window into daily Sri Lankan life.",
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
          imageSrc="https://picsum.photos/seed/lk-about-hero/2000/1200"
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
                <div key={region.title} className="overflow-hidden rounded-2xl border border-border">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={`https://picsum.photos/seed/${region.seed}/900/700`}
                      alt={region.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-ink">{region.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{region.text}</p>
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
