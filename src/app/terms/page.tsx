// PLACEHOLDER LEGAL COPY — have a qualified professional review this page
// (and update the "Last updated" date) before launch.

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.businessName}.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-28 sm:py-32">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-medium tracking-tight text-ink">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted">Last updated: [PLACEHOLDER DATE]</p>

          <div className="mt-10 space-y-8 text-pretty leading-relaxed text-ink-soft">
            <section>
              <h2 className="text-xl font-medium text-ink">Bookings & Inquiries</h2>
              <p className="mt-3">
                This website is used to submit trip inquiries. Submitting an inquiry does not constitute a
                confirmed booking — bookings are confirmed once itinerary, pricing and payment terms have
                been agreed directly between you and {siteConfig.businessName}.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-medium text-ink">Pricing</h2>
              <p className="mt-3">
                Prices shown on tour pages are starting-from estimates per person and are confirmed once your
                exact dates, group size and inclusions are finalized.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-medium text-ink">Cancellations</h2>
              <p className="mt-3">
                Cancellation terms are confirmed at the time of booking and depend on how much notice is
                given before the tour date.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-medium text-ink">Liability</h2>
              <p className="mt-3">
                While every effort is made to ensure a safe, comfortable trip, travel inherently carries some
                risk. Travellers are encouraged to arrange appropriate travel insurance for their trip.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-medium text-ink">Contact</h2>
              <p className="mt-3">
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
