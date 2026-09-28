import Image from "next/image";
import { Car, CarFront, Van, Bus, Snowflake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

// The sedan and Honda Fit are real photos of our vehicles (full-bleed,
// `photo: true`); the rest are representative free-license cutouts — swap
// each for a real photo when available.
const fleet: {
  icon: typeof Car;
  name: string;
  passengers: string;
  image: string;
  alt: string;
  photo?: boolean;
}[] = [
  {
    icon: Car,
    name: "Sedan",
    passengers: "1 - 3 passengers",
    image: "/vehicles/prius-sedan.jpg",
    alt: "Our white Toyota Prius hybrid sedan parked on a tree-lined road",
    photo: true,
  },
  {
    icon: Van,
    name: "Passenger Van",
    passengers: "8 - 12 passengers",
    image: "/vehicles/passenger-van.jpg",
    alt: "White Toyota HiAce passenger van, representative of our tour van fleet vehicle",
  },
  {
    icon: CarFront,
    name: "Honda Fit",
    passengers: "1 - 3 passengers",
    image: "/vehicles/honda-fit.jpg",
    alt: "Front view of our white Honda Fit parked in a garden driveway",
    photo: true,
  },
  {
    icon: Bus,
    name: "Coach Bus",
    passengers: "20 - 35 passengers",
    image: "/vehicles/coach-bus.png",
    alt: "White coach bus, representative of our coach bus fleet vehicle",
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
          description="Cars, vans and buses available depending on your group size — all air-conditioned, seatbelt-equipped, regularly serviced and fully insured for private hire."
        />

        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {fleet.map((vehicle, index) => (
            <div key={vehicle.name} className="group overflow-hidden rounded-2xl border border-border bg-paper">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={vehicle.image}
                  alt={vehicle.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    vehicle.photo ? "object-cover object-[center_75%]" : "object-contain p-4"
                  }`}
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
