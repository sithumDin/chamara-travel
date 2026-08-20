import { BadgeCheck, Route, ShieldCheck, Headset, HandCoins, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    icon: BadgeCheck,
    title: "Licensed Driver-Guide",
    description: "Chamara is a licensed, insured driver-guide with over a decade of experience showing travellers Sri Lanka.",
  },
  {
    icon: Route,
    title: "Custom Itineraries",
    description: "Every trip is built around your interests, pace and budget — not a rigid, one-size-fits-all package.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Comfortable Vehicle",
    description: "Travel in a well-maintained, air-conditioned vehicle serviced regularly for long, comfortable days on the road.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Reach Chamara directly by phone or WhatsApp at any point during your trip — day or night.",
  },
  {
    icon: HandCoins,
    title: "Fair, Transparent Pricing",
    description: "No hidden fees or last-minute add-ons. You'll know exactly what's included before you book.",
  },
  {
    icon: Compass,
    title: "Deep Local Knowledge",
    description: "From hidden viewpoints to the best time to visit each site, benefit from real on-the-ground experience.",
  },
];

// Cycled across the icon badges so the grid reads as varied and lively
// rather than one flat color repeated six times.
const iconStyles = [
  "bg-accent shadow-accent/30",
  "bg-clay shadow-clay/30",
  "bg-ink shadow-ink/30",
];

export function WhyChamara() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Travel With Chamara"
          title="A trip planned by someone who actually knows the roads"
          description="Not a call center, not a franchise — one guide, one vehicle, and a genuine commitment to getting your trip right."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 100}>
              <Card className="group flex h-full flex-col gap-4 rounded-3xl shadow-sm shadow-ink/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-ink/10">
                <span
                  className={`inline-flex size-14 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 ${iconStyles[index % iconStyles.length]}`}
                >
                  <feature.icon className="size-6 text-white" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-ink">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
