import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

const avatarSeeds = ["guest-avatar-1", "guest-avatar-2", "guest-avatar-3"];

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden sm:min-h-[92vh]">
      <Image
        src="https://picsum.photos/seed/lk-hero-jungle-villa/2000/1400"
        alt="A private villa overlooking lush Sri Lankan jungle at dusk"
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
        <p className="mt-6 max-w-xl text-pretty text-base text-white/85 sm:text-lg">
          Private, driver-guided tours across beaches, ancient cities, tea country and wildlife
          parks — planned around you, led by a licensed local guide.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/tours" variant="white" size="lg">
            View Tour Packages
          </Button>
          <Button href="#inquiry" variant="outline-white" size="lg">
            Plan My Trip
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatarSeeds.map((seed) => (
              <span
                key={seed}
                className="relative size-9 overflow-hidden rounded-full border-2 border-white/80"
              >
                <Image
                  src={`https://picsum.photos/seed/${seed}/80/80`}
                  alt=""
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-white text-white" />
              ))}
            </div>
            <p className="text-xs text-white/80">{siteConfig.trustStats[1].value} Happy Travellers</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
