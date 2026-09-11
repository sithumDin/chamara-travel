import { Compass, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/gallery/nine-arches-bridge-ella.jpg"
        aria-label="Sri Lanka travel highlights"
        className="absolute inset-0 size-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/65" />
      <div className="absolute inset-0 bg-black/35" />

      <Container className="relative z-10 py-28 sm:py-32">
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
          <div className="flex items-center gap-0.5 rounded-full bg-white px-2 py-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-[#FFB800] text-[#FFB800]" aria-hidden="true" />
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

      <a
        href="#destinations"
        aria-label="Scroll down to explore"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-white/85 transition-colors hover:text-white"
      >
        <span className="flex size-11 items-center justify-center rounded-full border border-white/50 motion-safe:animate-bounce">
          <ChevronDown className="size-5" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold tracking-[0.22em]">SCROLL</span>
      </a>
    </section>
  );
}
