import { MapPin, ArrowRight, Car, ShieldCheck, Wallet } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { transferRoutes } from "@/data/transfers";
import { formatUsd } from "@/lib/utils";

const perks = [
  { icon: Car, label: "Air-conditioned, private vehicle" },
  { icon: Wallet, label: "Fixed fare — no meter, no surprises" },
  { icon: ShieldCheck, label: "Licensed, experienced driver" },
];

function RouteCard({
  from,
  to,
  priceUsd,
  delay,
}: {
  from: string;
  to: string;
  priceUsd: number;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-paper p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
        <span className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-accent/5 transition-transform duration-300 group-hover:scale-125" />

        <div className="relative flex items-center gap-2.5 text-sm font-medium text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-muted" aria-hidden="true" />
            {from}
          </span>
          <ArrowRight className="size-4 shrink-0 text-muted-light" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-accent-deep" aria-hidden="true" />
            {to}
          </span>
        </div>

        <div className="relative mt-6 flex items-end justify-between">
          <div>
            <p className="text-3xl font-medium tracking-tight text-ink">{formatUsd(priceUsd)}</p>
            <p className="text-xs text-muted">per vehicle, one-way</p>
          </div>
          <Car className="size-8 text-accent/30" strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>
    </Reveal>
  );
}

export function TaxiTransfers() {
  return (
    <section className="bg-border/15 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Airport & Private Transfers"
          title="Private taxi transfer rates"
          description="Prefer a one-way transfer instead of a full tour? Book a private, air-conditioned taxi at these fixed rates."
        />

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {perks.map((perk) => (
            <span key={perk.label} className="inline-flex items-center gap-2 text-sm text-ink-soft">
              <perk.icon className="size-4 text-accent-deep" aria-hidden="true" />
              {perk.label}
            </span>
          ))}
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {transferRoutes.map((route, index) => (
            <RouteCard
              key={`${route.from}-${route.to}`}
              from={route.from}
              to={route.to}
              priceUsd={route.priceUsd}
              delay={(index % 3) * 90}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted">Other routes available on request.</p>

        <div className="mt-8 flex justify-center">
          <Button href="#inquiry" variant="primary" size="md">
            Book a Transfer
          </Button>
        </div>
      </Container>
    </section>
  );
}
