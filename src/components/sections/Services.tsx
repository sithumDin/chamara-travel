import { Plane, Hotel, Sun, RotateCw, PawPrint, Waves, Landmark } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/site-config";

const icons = [Plane, Hotel, Sun, RotateCw, PawPrint, Waves, Landmark];

export function Services() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Your transport and touring partner in Sri Lanka"
          description="From a single airport transfer to a full round tour of the island — one licensed driver-guide, one comfortable vehicle."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card key={service.title} className="flex flex-col gap-3 bg-paper">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-surface">
                  <Icon className="size-5 text-ink" aria-hidden="true" />
                </span>
                <h3 className="text-base font-medium text-ink">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
