// PLACEHOLDER LEGAL COPY — have a qualified professional review this page
// (including the specific notice windows and percentages below) and update
// the "Last updated" date before launch.

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund and cancellation policy for ${siteConfig.businessName}.`,
  alternates: { canonical: "/refund-policy" },
  robots: { index: false, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-28 sm:py-32">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-medium tracking-tight text-ink">Refund Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: [PLACEHOLDER DATE]</p>

          <div className="mt-10 space-y-8 text-pretty leading-relaxed text-ink-soft">
            <section>
              <h2 className="text-xl font-medium text-ink">Deposits &amp; Payment</h2>
              <p className="mt-3">
                A booking is confirmed once a deposit has been received and the itinerary, dates and pricing
                have been agreed directly between you and {siteConfig.businessName}. The remaining balance is
                due ahead of or on arrival, as agreed at the time of booking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-ink">Cancellations by You</h2>
              <p className="mt-3">
                We understand plans change, and we&apos;ll always work with you on a fair outcome. As a general
                guide:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>30+ days before arrival: full refund of your deposit, less any non-refundable costs already committed on your behalf (see below).</li>
                <li>14–29 days before arrival: partial refund of your deposit.</li>
                <li>Less than 14 days before arrival: deposits become non-refundable, as vehicles, guides and bookings have already been arranged.</li>
              </ul>
              <p className="mt-3">
                These windows and percentages are confirmed with you in writing at the time of booking, and may
                vary for custom or peak-season itineraries.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-ink">Non-Refundable Items</h2>
              <p className="mt-3">
                Some costs are paid to third parties on your behalf ahead of your trip — national park entry
                permits, train tickets, hotel deposits and similar bookings — and are non-refundable once paid,
                regardless of notice given, unless the third party itself offers a refund.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-ink">Changes or Cancellations by Us</h2>
              <p className="mt-3">
                If a tour has to be changed or cancelled on our side — for safety reasons, extreme weather, or
                other circumstances beyond our control — we&apos;ll offer a full refund or help you reschedule,
                whichever you prefer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-ink">How Refunds Are Processed</h2>
              <p className="mt-3">
                Approved refunds are returned using the same payment method used to book, and are typically
                processed within 7–14 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-ink">Contact</h2>
              <p className="mt-3">
                To request a cancellation or refund, or if you have questions about this policy, reach out to{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                  {siteConfig.email}
                </a>{" "}
                or on WhatsApp at {siteConfig.phone}.
              </p>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
