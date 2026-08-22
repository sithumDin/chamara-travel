import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ToursExplorer } from "@/components/tours/ToursExplorer";
import { InquirySection } from "@/components/sections/InquirySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Sri Lanka Tour Packages",
  description:
    "Browse private, driver-guided Sri Lanka tour packages — beach escapes, wildlife safaris, cultural triangle tours, hill country trips and honeymoon itineraries. Filter by duration and theme.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <>
      <Header />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tour Packages", path: "/tours" },
        ])}
      />
      <main>
        <PageHero
          eyebrow="Tour Packages"
          title="Find your Sri Lanka itinerary"
          description="From half-day city tours to two-week round trips — every package is private and fully customizable."
          imageSrc="/gallery/tour-packages-hero-bg.jpg"
          imageAlt="A convoy of tuk-tuks on the misty 16 Bends road through the Knuckles Range"
        />
        <section className="py-16 sm:py-20">
          <Container>
            <ToursExplorer tours={tours} />
          </Container>
        </section>
        <InquirySection />
      </main>
    </>
  );
}
