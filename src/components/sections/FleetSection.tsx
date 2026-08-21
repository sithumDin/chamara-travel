import { Car, CarFront, Van, Bus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const fleet = [
  { icon: Car, name: "Luxury Sedan", passengers: "1 - 4 Passengers" },
  { icon: Van, name: "Passenger Van", passengers: "8 - 12 Passengers" },
  { icon: CarFront, name: "SUV / Crossover", passengers: "4 - 7 Passengers" },
  { icon: Bus, name: "Coach Bus", passengers: "20 - 35 Passengers" },
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
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Fleet"
          title="A comfortable, well-maintained ride for any group size"
          description="Cars, vans, SUVs and buses available depending on your group size — all air-conditioned, seatbelt-equipped, regularly serviced and fully insured for private hire."
        />

        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {fleet.map((vehicle, index) => (
            <div key={vehicle.name} className="rounded-2xl border border-border bg-paper p-5 text-center">
              <span
                className={`mx-auto inline-flex size-11 items-center justify-center rounded-full ${badgeTones[index % badgeTones.length].bg}`}
              >
                <vehicle.icon className={`size-5 ${badgeTones[index % badgeTones.length].icon}`} aria-hidden="true" />
              </span>
              <h4 className="mt-3 text-[15px] font-semibold tracking-tight text-ink">{vehicle.name}</h4>
              <p className="mt-1 text-xs text-muted">{vehicle.passengers}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="accent" size="md">
            Ask About Availability
          </Button>
        </div>
      </Container>
    </section>
  );
}
