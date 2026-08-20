import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";

// Best-of Sri Lanka destinations, mapped to existing placeholder gallery photos.
const destinationIds = [
  ["g-culture-1", "Sigiriya Rock Fortress"],
  ["g-hills-2", "Nine Arches Bridge, Ella"],
  ["g-hills-1", "Tea Country, Nuwara Eliya"],
  ["g-wildlife-1", "Yala National Park"],
  ["g-beach-1", "Mirissa Beach"],
  ["g-culture-4", "Polonnaruwa Ancient City"],
  ["g-culture-2", "Dambulla Cave Temple"],
  ["g-beach-4", "Stilt Fishermen, Weligama"],
] as const;

const destinations = destinationIds.map(([id, name]) => ({
  ...galleryImages.find((image) => image.id === id)!,
  name,
}));

// Duplicated so the track can loop seamlessly at a -50% transform.
const track = [...destinations, ...destinations];

export function DestinationsCarousel() {
  return (
    <section className="overflow-hidden py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sri Lanka"
          title="Sri Lanka's best destinations"
          description="A slow scroll through the island's most-loved places — the ones every itinerary should include."
        />
      </Container>

      <div className="mt-10 overflow-hidden">
        <div className="animate-marquee-x flex w-max gap-4 sm:gap-6">
          {track.map((destination, index) => (
            <div
              key={`${destination.id}-${index}`}
              className="relative h-[340px] w-[80vw] shrink-0 overflow-hidden rounded-2xl sm:h-[440px] sm:w-[46vw] lg:h-[540px] lg:w-[32vw]"
            >
              <Image
                src={destination.src}
                alt={destination.alt}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 32vw"
                className="object-cover"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <p className="eyebrow absolute bottom-5 left-5 text-white">{destination.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
