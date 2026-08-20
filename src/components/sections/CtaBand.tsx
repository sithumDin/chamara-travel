import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBand({
  title = "Ready to see Sri Lanka your way?",
  description = "Tell us your dates and interests — we'll build a private itinerary around them.",
  ctaLabel = "Get In Touch",
  ctaHref = "/contact",
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden rounded-3xl sm:min-h-[65vh]">
        <Image
          src="https://picsum.photos/seed/lk-cta-villa-courtyard/1800/1200"
          alt="A tropical courtyard with palm leaves framing a private villa interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-balance text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-md text-pretty text-white/85">{description}</p>
          <Button href={ctaHref} variant="white" size="lg">
            {ctaLabel}
          </Button>
        </Container>
      </div>
    </section>
  );
}
