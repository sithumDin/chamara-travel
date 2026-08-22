import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquirySection } from "@/components/sections/InquirySection";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { generalFaq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Get in touch to plan your private Sri Lanka tour. Call, WhatsApp or send an inquiry — we reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <JsonLd data={faqPageSchema(generalFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let's plan your trip"
          description="Reach out directly or send an inquiry below — we typically reply within 24 hours."
          imageSrc="/gallery/155-guide-couple-golden-hour-ridge-selfie.jpg"
          imageAlt="Guide and guests taking a selfie on a ridge at golden hour"
        />

        <InquirySection />

        <section className="py-16 sm:py-24">
          <Container className="max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <Accordion
              className="mt-10"
              items={generalFaq.map((item, index) => ({
                id: String(index),
                trigger: item.question,
                content: item.answer,
              }))}
            />
          </Container>
        </section>
      </main>
    </>
  );
}
