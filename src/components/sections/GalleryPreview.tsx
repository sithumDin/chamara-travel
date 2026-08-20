import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { galleryImages } from "@/data/gallery";

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse of what's waiting for you"
          description="Beaches, wildlife, ancient cities and the guests who've explored them with us."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {preview.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl ${index < 2 ? "aspect-[3/4] lg:col-span-1" : "aspect-square"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/gallery" variant="outline" size="md">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
