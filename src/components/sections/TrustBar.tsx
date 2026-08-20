import { StatCard } from "@/components/ui/StatCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";

const icons = ["users", "backpack", "globe", "star"] as const;
const tones = ["ink", "accent", "accent", "clay"] as const;

export function TrustBar() {
  return (
    <section>
      <div className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <p className="eyebrow text-accent-deep">Our Journey in Numbers</p>
              <span className="h-0.5 w-8 rounded-full bg-accent" aria-hidden="true" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                Trusted by Travellers. Proven by Experience.
              </h2>
              <span className="h-0.5 w-8 rounded-full bg-accent" aria-hidden="true" />
            </div>
            <p className="max-w-xl text-pretty text-base text-muted sm:text-lg">
              Delivering unforgettable Sri Lankan adventures with care and passion.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {siteConfig.trustStats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} icon={icons[index % icons.length]} tone={tones[index % tones.length]} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
