import { Phone, Mail, MessageCircle, Clock, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { siteConfig, whatsappLink } from "@/data/site-config";

const contactRows = [
  {
    icon: Phone,
    label: "Call or WhatsApp",
    valueHref: siteConfig.phoneHref,
    value: siteConfig.phone,
  },
  {
    icon: Mail,
    label: "Email",
    valueHref: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
  },
];

export function InquirySection({ defaultTour }: { defaultTour?: string }) {
  return (
    <section id="inquiry" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Plan My Trip"
          title="Tell us about your trip"
          description={siteConfig.responseTimePromise}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
          <Reveal>
            <div className="flex h-full flex-col gap-8 rounded-3xl bg-ink p-6 text-white sm:p-8 lg:sticky lg:top-24">
              <div>
                <h3 className="text-xl font-medium">Get in touch</h3>
                <p className="mt-1.5 text-sm text-white/60">
                  Speak directly with the person planning your trip — no call centre, no middlemen.
                </p>
              </div>

              <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                {contactRows.map(({ icon: Icon, label, valueHref, value }) => (
                  <a
                    key={label}
                    href={valueHref}
                    className="group flex items-center gap-4 py-4 transition-colors first:pt-0 last:pb-0"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-accent/20">
                      <Icon className="size-4.5 text-white/90 transition-colors group-hover:text-accent" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-white/50">{label}</p>
                      <p className="truncate text-sm font-medium text-white">{value}</p>
                    </div>
                  </a>
                ))}

                <div className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Clock className="size-4.5 text-white/90" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-white/50">Response Time</p>
                    <p className="text-sm font-medium text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappLink("Hi! I'd like to know more about a Sri Lanka tour.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
              >
                <MessageCircle className="size-4.5" aria-hidden="true" />
                Chat on WhatsApp
              </a>

              <div className="mt-auto flex items-center gap-2 text-sm text-white/70">
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-[#FFB800] text-[#FFB800]" aria-hidden="true" />
                  ))}
                </span>
                <span>
                  {siteConfig.tripAdvisor.rating.toFixed(1)} rated by {siteConfig.tripAdvisor.reviewCount}+ travellers
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-3xl border border-border bg-paper p-6 shadow-sm sm:p-8">
            <InquiryForm defaultTour={defaultTour} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
