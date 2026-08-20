import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { InquirySection } from "@/components/sections/InquirySection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse photos of Sri Lanka's beaches, wildlife, ancient cities and hill country, plus guests who've explored the island with Chamara.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <main>
        <PageHero
          eyebrow="Gallery"
          title="Sri Lanka, frame by frame"
          description="Beaches, wildlife, ancient cities, misty hills, and the guests who've explored them with us."
          imageSrc="https://picsum.photos/seed/lk-gallery-hero/2000/1200"
          imageAlt="Collage-style view of the Sri Lankan coastline"
        />
        <section className="py-16 sm:py-20">
          <Container>
            <GalleryExplorer images={galleryImages} />
          </Container>
        </section>
        <InquirySection />
      </main>
    </>
  );
}
