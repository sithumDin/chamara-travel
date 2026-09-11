import {
  BadgeCheck,
  Route,
  ShieldCheck,
  Headset,
  HandCoins,
  Compass,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
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

function ReasonCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof BadgeCheck;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl bg-accent-deep p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 group-hover:bg-white/15">
        <Icon className="size-7 text-white" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h4 className="mt-5 text-lg font-semibold text-white">{title}</h4>
      <p className="mt-3 text-sm italic leading-relaxed text-white/70">{description}</p>
    </div>
  );
}

export function ServiceHighlights({
  eyebrow = "Your Travel Partner",
  title = "Everything you need, from someone who knows the roads",
  description = "Not a call center, not a franchise — one licensed driver-guide, one comfortable vehicle, and a full range of transport and touring options built entirely around you.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-border/15 py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-16">
          <Reveal>
            <h3 className="eyebrow text-clay">Why Travel With Chamara</h3>
            <div className="mt-6 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <ReasonCard
                  key={reason.title}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
