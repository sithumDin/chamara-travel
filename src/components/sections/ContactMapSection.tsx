import { MessageCircle, Navigation } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, whatsappLink } from "@/data/site-config";

export function ContactMapSection() {
  const query = `${siteConfig.address.line1}, ${siteConfig.address.city}, ${siteConfig.address.country}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-4 overflow-hidden rounded-3xl border border-border lg:grid-cols-[1.3fr_1fr]">
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[22rem]">
              <iframe
                src={mapEmbedSrc}
                title={`Map showing ${siteConfig.businessName} based in ${siteConfig.address.line1}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0 grayscale-[15%]"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 bg-ink p-6 text-white sm:p-8">
              <div>
                <p className="eyebrow text-white/60">Where To Find Us</p>
                <h3 className="mt-2 text-xl font-medium">{query}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Based on the south coast and happy to arrange pick-up from anywhere on the island.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Navigation className="size-4.5" aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={whatsappLink("Hi! I'd like to know more about a Sri Lanka tour.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
                >
                  <MessageCircle className="size-4.5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
