import {
  Plane,
  Hotel,
  Sun,
  RotateCw,
  PawPrint,
  Waves,
  Landmark,
  Sparkles,
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
import { siteConfig } from "@/data/site-config";

const serviceIcons = [Plane, Hotel, Sun, RotateCw, PawPrint, Waves, Landmark, Sparkles];

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

// Cycled across cards so the grids read as varied rather than one flat
// color repeated down the list.
const badgeTones = [
  { bg: "bg-accent/10", icon: "text-accent-deep" },
  { bg: "bg-clay/10", icon: "text-clay" },
  { bg: "bg-ink/10", icon: "text-ink" },
];

function IconCard({
  icon: Icon,
  title,
  description,
  tone,
  compact,
}: {
  icon: typeof Plane;
  title: string;
  description: string;
  tone: (typeof badgeTones)[number];
  compact?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <span className={`inline-flex size-10 items-center justify-center rounded-full ${tone.bg}`}>
        <Icon className={`size-4.5 ${tone.icon}`} aria-hidden="true" />
      </span>
      <h4 className={`font-semibold tracking-tight text-ink ${compact ? "mt-3 text-sm" : "mt-4 text-[15px]"}`}>
        {title}
      </h4>
      <p className={`text-muted ${compact ? "mt-1 text-xs leading-relaxed" : "mt-1.5 text-sm leading-relaxed"}`}>
        {description}
      </p>
    </div>
  );
}

export function ServiceHighlights() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Your Travel Partner"
          title="Everything you need, from someone who knows the roads"
          description="Not a call center, not a franchise — one licensed driver-guide, one comfortable vehicle, and a full range of transport and touring options built entirely around you."
        />

        <div className="mt-16">
          <Reveal>
            <h3 className="eyebrow text-accent-deep">What We Offer</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {siteConfig.services.map((service, index) => (
                <IconCard
                  key={service.title}
                  icon={serviceIcons[index % serviceIcons.length]}
                  title={service.title}
                  description={service.description}
                  tone={badgeTones[index % badgeTones.length]}
                  compact
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <h3 className="eyebrow text-clay">Why Travel With Chamara</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, index) => (
                <IconCard
                  key={reason.title}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                  tone={badgeTones[index % badgeTones.length]}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
