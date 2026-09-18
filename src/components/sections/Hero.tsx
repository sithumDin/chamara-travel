import Link from "next/link";
import { ArrowRight, Compass, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative flex h-[100dvh] items-end overflow-hidden sm:h-auto sm:min-h-[100dvh] sm:items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/gallery/tall-cascading-waterfall-cliff.jpg"
        aria-label="A cascading waterfall in Sri Lanka's hill country"
        className="absolute inset-0 size-full object-cover"
      >
        <source src="/videos/hero-sri-lanka-mobile.mp4" type="video/mp4" media="(max-width: 639px)" />
        <source src="/videos/hero-sri-lanka-beach.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/65" />
      <div className="absolute inset-0 bg-black/35" />
      {/* Extra bottom scrim on mobile so text stays legible over busier
          footage, without darkening the desktop crop where text is centered. */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/55 to-transparent sm:hidden" />

      <Container className="relative z-10 py-10 pb-24 sm:py-32">
        {/* Eyebrow — mobile only, matches the compact mobile hero layout */}
        <div className="mb-4 sm:hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">Explore Sri Lanka</p>
          <div className="mt-2 h-0.5 w-8 bg-white/60" />
        </div>

        <h1 className="max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="sm:hidden">Discover Sri Lanka.</span>
          <span className="hidden sm:inline">Discover Sri Lanka, your way.</span>
        </h1>

        <div className="mt-8">
          {/* Desktop buttons — unchanged */}
          <div className="hidden flex-wrap items-center gap-4 sm:flex">
            <Button href="/tours" variant="white" size="lg">
              View Tour Packages
            </Button>
            <Button href="#inquiry" variant="accent" size="lg">
              <Compass className="size-4.5" aria-hidden="true" />
              Plan My Trip
            </Button>
          </div>

          {/* Mobile buttons — solid pill primary + plain text secondary */}
          <div className="flex flex-col items-start gap-4 sm:hidden">
            <Button href="#inquiry" variant="accent" size="lg">
              Plan My Trip
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </Button>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/50 underline-offset-4"
            >
              View Tours
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <a
          href={siteConfig.tripAdvisor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 hidden items-center gap-3 rounded-full bg-white/10 py-2 pl-2 pr-4 backdrop-blur-sm transition-colors hover:bg-white/15 sm:inline-flex"
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
        className="absolute inset-x-0 bottom-8 z-10 mx-auto hidden w-fit flex-col items-center gap-2 text-white/85 transition-colors hover:text-white sm:flex"
      >
        <span className="flex size-11 items-center justify-center rounded-full border border-white/50 motion-safe:animate-bounce">
          <Compass className="size-5" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold tracking-[0.22em]">SCROLL</span>
      </a>
    </section>
  );
}
