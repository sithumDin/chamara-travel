import Image from "next/image";
import { Car, CarFront, Van, Bus, Snowflake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

// PLACEHOLDER vehicle photos (free-license stock via Unsplash — not our
// actual fleet). Swap each `image` for a real photo of the vehicle before
// launch; see FleetSection usage below.
const fleet = [
  {
    icon: Car,
    name: "Luxury Sedan",
    passengers: "1 - 4 passengers",
    image:
      "https://images.unsplash.com/photo-1573710459621-bb101783ca0f?q=80&w=1200&auto=format&fit=crop",
    alt: "White sedan car, representative of our luxury sedan fleet vehicle",
  },
  {
    icon: Van,
    name: "Passenger Van",
    passengers: "8 - 12 passengers",
    image:
      "https://images.unsplash.com/photo-1563010502-4714d64a19b8?q=80&w=1200&auto=format&fit=crop",
    alt: "White passenger van, representative of our tour van fleet vehicle",
  },
  {
    icon: CarFront,
    name: "SUV / Crossover",
    passengers: "4 - 7 passengers",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    alt: "White SUV, representative of our SUV/crossover fleet vehicle",
  },
  {
    icon: Bus,
    name: "Coach Bus",
    passengers: "20 - 35 passengers",
    image:
      "https://images.unsplash.com/photo-1574538202212-8788e515a078?q=80&w=1200&auto=format&fit=crop",
    alt: "White tour coach bus, representative of our coach bus fleet vehicle",
  },
];

// Cycled across cards, matching the tone system used on the "Your Travel
// Partner" section for a consistent site-wide badge style.
const badgeTones = [
  { bg: "bg-accent/10", icon: "text-accent-deep" },
  { bg: "bg-clay/10", icon: "text-clay" },
  { bg: "bg-ink/10", icon: "text-ink" },
];

export function FleetSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Fleet"
          title="A comfortable, well-maintained ride for any group size"
          description="Cars, vans, SUVs and buses available depending on your group size — all air-conditioned, seatbelt-equipped, regularly serviced and fully insured for private hire."
        />

        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {fleet.map((vehicle, index) => (
            <div key={vehicle.name} className="group overflow-hidden rounded-2xl border border-border bg-paper">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm ${badgeTones[index % badgeTones.length].icon}`}
                >
                  <vehicle.icon className="size-4" aria-hidden="true" />
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="text-[15px] font-semibold tracking-tight text-ink">{vehicle.name}</h4>
                <p className="mt-1 text-xs text-muted">{vehicle.passengers}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted sm:gap-x-8">
          <span className="inline-flex items-center gap-2"><Snowflake className="size-4 text-accent-deep" aria-hidden="true" />Air-conditioned</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-accent-deep" aria-hidden="true" />Fully insured</span>
          <span className="inline-flex items-center gap-2"><Car className="size-4 text-accent-deep" aria-hidden="true" />Regularly serviced</span>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="accent" size="md">
            Ask About Availability
          </Button>
        </div>
      </Container>
    </section>
  );
}
