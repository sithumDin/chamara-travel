import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TypewriterHeading } from "@/components/ui/TypewriterHeading";

const strip = [
  { caption: "Ancient Wonders", seed: "lk-about-culture", alt: "Ancient stupa framed by jungle at sunrise" },
  { caption: "Wild Encounters", seed: "lk-about-wildlife", alt: "Elephants gathered at a watering hole" },
  { caption: "Coastal Escapes", seed: "lk-about-beach", alt: "Palm trees over a quiet golden beach" },
  { caption: "Misty Highlands", seed: "lk-about-hills", alt: "Tea plantations rolling into the mist" },
];

export function AboutTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>About Sri Lanka</Eyebrow>
          <TypewriterHeading
            className="max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
            segments={[
              { text: "An island of ancient kingdoms, wild coastlines and misty tea country — ", className: "text-ink" },
              { text: "small enough to cross in a day, rich enough to fill a lifetime.", className: "text-muted" },
            ]}
          />
          <Button href="/about-sri-lanka" variant="outline" size="md">
            Explore Sri Lanka
          </Button>
        </div>

        <div className="mt-12 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:overflow-visible">
          {strip.map((item) => (
            <Link
              key={item.caption}
              href="/about-sri-lanka"
              className="group relative aspect-[3/4] w-56 shrink-0 overflow-hidden rounded-2xl sm:w-auto"
            >
              <Image
                src={`https://picsum.photos/seed/${item.seed}/700/950`}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 224px, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="eyebrow absolute left-4 top-4 text-white">{item.caption}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
