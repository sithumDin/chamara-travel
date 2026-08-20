import Image from "next/image";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden sm:min-h-[92vh]">
      <Image
        src="/gallery/nine-arches-bridge-ella.jpg"
        alt="A blue train crossing the Nine Arches Bridge through the forest near Ella"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

      <Container className="relative z-10 pb-16 pt-32 sm:pb-24">
        <h1 className="max-w-2xl text-balance text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Discover Sri Lanka, your way.
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/tours" variant="white" size="lg">
            View Tour Packages
          </Button>
          <Button href="#inquiry" variant="accent" size="lg">
            <Compass className="size-4.5" aria-hidden="true" />
            Plan My Trip
          </Button>
        </div>

        <a
          href={siteConfig.tripAdvisor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pl-2 pr-4 backdrop-blur-sm transition-colors hover:bg-white/15"
        >
          <div className="flex items-center gap-1 rounded-full bg-white px-2 py-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="flex size-3.5 items-center justify-center rounded-full bg-[#34E0A1]">
                <span className="size-1.5 rounded-full bg-white" />
              </span>
            ))}
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">
              {siteConfig.tripAdvisor.rating.toFixed(1)} on TripAdvisor
            </p>
            <p className="text-xs text-white/70">{siteConfig.tripAdvisor.reviewCount} verified reviews</p>
          </div>
        </a>
      </Container>
    </section>
  );
}
