import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden sm:min-h-[52vh]">
      <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/35" />

      <Container className="relative z-10 pb-14 pt-28 sm:pb-16">
        {eyebrow ? (
          <Eyebrow className="border-white/30 bg-white/10 text-white/90">{eyebrow}</Eyebrow>
        ) : null}
        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-xl text-pretty text-base text-white/85 sm:text-lg">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
