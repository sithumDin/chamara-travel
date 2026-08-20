// PLACEHOLDER LEGAL COPY — have a qualified professional review this page
// (and update the "Last updated" date) before launch.

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.businessName} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-28 sm:py-32">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-medium tracking-tight text-ink">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: [PLACEHOLDER DATE]</p>

          <div className="mt-10 space-y-8 text-pretty leading-relaxed text-ink-soft">
            <section>
              <h2 className="text-xl font-medium text-ink">Information We Collect</h2>
              <p className="mt-3">
                When you submit an inquiry through this website, we collect the information you provide —
                your name, email address, phone number, travel dates and any details you share about your
                trip. We also use analytics and advertising cookies (Google Analytics, Google Ads, Google Tag
                Manager) to understand how visitors use the site, subject to the choice you make in the
                cookie banner.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-medium text-ink">How We Use Your Information</h2>
              <p className="mt-3">
                We use the information you submit solely to respond to your inquiry, plan your trip, and — if
                you agree — follow up about your booking. We do not sell your personal information to third
                parties.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-medium text-ink">Cookies & Analytics</h2>
              <p className="mt-3">
                We use cookies for site analytics and, where consented, advertising measurement. You can
                accept or decline non-essential cookies via the banner shown on your first visit, and change
                your choice at any time by clearing your browser&apos;s local storage for this site.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-medium text-ink">Data Retention & Your Rights</h2>
              <p className="mt-3">
                We retain inquiry data for as long as needed to respond to you and maintain business records.
                You may request access to, correction of, or deletion of your personal information at any
                time by contacting us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
            <section>
              <h2 className="text-xl font-medium text-ink">Contact</h2>
              <p className="mt-3">
                Questions about this policy can be sent to{" "}
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
