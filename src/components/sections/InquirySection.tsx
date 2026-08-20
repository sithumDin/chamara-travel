import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { siteConfig, whatsappLink } from "@/data/site-config";

export function InquirySection({ defaultTour }: { defaultTour?: string }) {
  return (
    <section id="inquiry" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Plan My Trip"
          title="Tell us about your trip"
          description={siteConfig.responseTimePromise}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="size-4.5 text-accent-deep" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-muted">Call or WhatsApp</p>
                  <a href={siteConfig.phoneHref} className="text-sm font-medium text-ink">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-clay/10">
                  <Mail className="size-4.5 text-clay" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-ink">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-ink/10">
                  <Clock className="size-4.5 text-ink" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-muted">Response Time</p>
                  <p className="text-sm font-medium text-ink">Within 24 hours</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink("Hi! I'd like to know more about a Sri Lanka tour.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-4 text-sm font-medium text-white hover:bg-ink-soft"
            >
              <MessageCircle className="size-4.5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={120} className="rounded-3xl border border-border bg-paper p-6 sm:p-8">
            <InquiryForm defaultTour={defaultTour} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
