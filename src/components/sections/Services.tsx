import { Plane, Hotel, Sun, RotateCw, PawPrint, Waves, Landmark, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";

const icons = [Plane, Hotel, Sun, RotateCw, PawPrint, Waves, Landmark, Sparkles];

// Cycled across the icon badges so the grid reads as varied and lively
// rather than one flat color repeated eight times.
const iconStyles = [
  "bg-accent shadow-accent/30",
  "bg-clay shadow-clay/30",
  "bg-ink shadow-ink/30",
];

export function Services() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Your transport and touring partner in Sri Lanka"
          description="From a single airport transfer to a full round tour of the island — one licensed driver-guide, one comfortable vehicle."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={service.title} delay={(index % 4) * 90}>
                <Card className="group flex h-full flex-col gap-4 rounded-3xl bg-paper shadow-sm shadow-ink/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-ink/10">
                  <span
                    className={`inline-flex size-14 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 ${iconStyles[index % iconStyles.length]}`}
                  >
                    <Icon className="size-6 text-white" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
