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

// Cycled across row icons so the two lists read as varied rather than one
// flat color repeated down the column.
const iconTones = ["text-accent-deep", "text-clay", "text-ink"];

function IconRow({
  icon: Icon,
  title,
  description,
  tone,
}: {
  icon: typeof Plane;
  title: string;
  description: string;
  tone: string;
}) {
  return (
    <div className="flex items-start gap-4 py-5">
      <Icon className={`mt-0.5 size-5 shrink-0 ${tone}`} aria-hidden="true" />
      <div>
        <h4 className="text-[15px] font-semibold tracking-tight text-ink">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
      </div>
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

        <div className="mt-16 grid gap-x-16 gap-y-14 lg:grid-cols-2">
          <Reveal>
            <h3 className="eyebrow text-accent-deep">What We Offer</h3>
            <div className="mt-6 divide-y divide-border">
              {siteConfig.services.map((service, index) => (
                <IconRow
                  key={service.title}
                  icon={serviceIcons[index % serviceIcons.length]}
                  title={service.title}
                  description={service.description}
                  tone={iconTones[index % iconTones.length]}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="eyebrow text-clay">Why Travel With Chamara</h3>
            <div className="mt-6 divide-y divide-border">
              {reasons.map((reason, index) => (
                <IconRow
                  key={reason.title}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                  tone={iconTones[index % iconTones.length]}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
