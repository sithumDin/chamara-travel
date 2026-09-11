import { Plane, Hotel, Sun, RotateCw, PawPrint, Waves, Landmark, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";

const serviceIcons = [Plane, Hotel, Sun, RotateCw, PawPrint, Waves, Landmark, Sparkles];

const badgeTones = [
  { bg: "bg-accent/10", icon: "text-accent-deep" },
  { bg: "bg-clay/10", icon: "text-clay" },
  { bg: "bg-ink/10", icon: "text-ink" },
];

export function AboutIntro() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <p className="eyebrow text-accent-deep">Who We Are</p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A one-person, one-vehicle alternative to the tour-bus circuit
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
            {siteConfig.businessName} is a private, driver-guided tour service run personally by Chamara out of
            Unawatuna on Sri Lanka&apos;s south coast. No call centre, no fleet of subcontracted drivers — every
            guest travels with the same licensed guide from pick-up to drop-off, on an itinerary built around them
            rather than a fixed group schedule.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <h3 className="eyebrow text-clay">What We Do</h3>
          <div className="mt-6 grid grid-cols-2 items-start gap-3 sm:grid-cols-4 sm:gap-4">
            {siteConfig.services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              const tone = badgeTones[index % badgeTones.length];
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-border bg-paper p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-transparent hover:shadow-lg"
                >
                  <span
                    className={`inline-flex size-11 items-center justify-center rounded-xl transition-colors duration-200 ${tone.bg} group-hover:bg-ink`}
                  >
                    <Icon className={`size-5 transition-colors duration-200 ${tone.icon} group-hover:text-white`} aria-hidden="true" />
                  </span>
                  <h4 className="mt-3 text-sm font-semibold tracking-tight text-ink">{service.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{service.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
