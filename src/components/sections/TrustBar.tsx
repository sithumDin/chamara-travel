import { StatCard } from "@/components/ui/StatCard";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export function TrustBar() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {siteConfig.trustStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
