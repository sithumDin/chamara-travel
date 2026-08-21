import Image from "next/image";
import { CalendarDays, CloudSun, Backpack } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";

// Best-of Sri Lanka destinations, mapped to real gallery photos.
const destinationInfo = [
  {
    id: "g-073-couple-sigiriya-rock-fortress-view",
    name: "Sigiriya Rock Fortress",
    summary:
      "Climb the ancient rock fortress rising from the jungle, past 5th-century frescoes, to a summit with sweeping views across the plains.",
    bestTime: "Jan – Mar",
    weather: "Hot & humid, 26–32°C",
    essentials: "Sun hat, water, sturdy shoes for the climb",
  },
  {
    id: "g-hills-nine-arches",
    name: "Nine Arches Bridge, Ella",
    summary:
      "Watch the blue train wind across this colonial-era viaduct, framed by mist and jungle in the cool hills above Ella.",
    bestTime: "Dec – Mar",
    weather: "Mild & misty, 15–25°C",
    essentials: "Light jacket, camera, check the train times",
  },
  {
    id: "g-050-tea-plantation-hills-rows",
    name: "Tea Country, Nuwara Eliya",
    summary:
      "Walk between endless rows of tea bushes across misty highland slopes, where the world's finest Ceylon tea is hand-picked daily.",
    bestTime: "Jan – Mar",
    weather: "Cool, 10–20°C, chilly nights",
    essentials: "Warm layers, comfortable walking shoes",
  },
  {
    id: "g-048-leopard-resting-tree-branch",
    name: "Yala National Park",
    summary:
      "Track leopards, elephants and exotic birds on an open jeep safari through Sri Lanka's most rewarding wildlife national park.",
    bestTime: "Feb – Jun",
    weather: "Hot & dry, 27–33°C",
    essentials: "Binoculars, neutral clothing, sun protection",
  },
  {
    id: "g-118-empty-beach-rocks-palm-trees-coast",
    name: "Southern Coast Beaches",
    summary:
      "Relax on palm-fringed golden sand, surf gentle swells, and watch fishing boats return each evening along the southern coastline.",
    bestTime: "Nov – Apr",
    weather: "Warm, 27–31°C",
    essentials: "Sunscreen, swimwear, light clothing",
  },
  {
    id: "g-055-family-polonnaruwa-ruins-palace",
    name: "Polonnaruwa Ancient City",
    summary:
      "Cycle between 12th-century royal ruins, carved Buddha statues and ancient reservoirs across Sri Lanka's best-preserved medieval capital city.",
    bestTime: "May – Sep",
    weather: "Hot, 28–33°C",
    essentials: "Modest dress, hat, rent a bike for the site",
  },
  {
    id: "g-072-temple-tooth-relic-kandy",
    name: "Temple of the Tooth, Kandy",
    summary:
      "Visit Kandy's sacred temple housing Buddha's tooth relic, where drummers and worshippers gather for evening rituals each day.",
    bestTime: "Year-round",
    weather: "Mild, 20–28°C",
    essentials: "Shoulders/knees covered, shoes off inside",
  },
  {
    id: "g-015-couple-beach-stilt-fisherman",
    name: "Stilt Fishermen, South Coast",
    summary:
      "Watch fishermen balance on wooden poles above the surf, an iconic and dwindling tradition unique to Sri Lanka's south coast.",
    bestTime: "Nov – Apr",
    weather: "Warm, 27–31°C",
    essentials: "Camera, sun protection, a small tip for photos",
  },
] as const;

const destinations = destinationInfo.map((info) => ({
  ...galleryImages.find((image) => image.id === info.id)!,
  ...info,
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
          description="A slow scroll through the island's most-loved places — the ones every itinerary should include. Hover a photo for the essentials."
        />
      </Container>

      <div className="mt-10 overflow-hidden">
        <div className="animate-marquee-x flex w-max gap-4 sm:gap-6">
          {track.map((destination, index) => (
            <div
              key={`${destination.id}-${index}`}
              className="group relative h-[340px] w-[80vw] shrink-0 overflow-hidden rounded-2xl sm:h-[440px] sm:w-[46vw] lg:h-[540px] lg:w-[32vw]"
            >
              <Image
                src={destination.src}
                alt={destination.alt}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 32vw"
                className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:blur-md"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <p className="eyebrow absolute bottom-5 left-5 text-white transition-opacity duration-300 group-hover:opacity-0">
                {destination.name}
              </p>

              <div className="absolute inset-0 flex translate-y-2 flex-col justify-between p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-7">
                <p className="text-lg font-medium tracking-tight text-white sm:text-xl">{destination.name}</p>

                <p className="text-sm leading-relaxed text-white/90 sm:text-base">{destination.summary}</p>

                <div className="space-y-2 text-sm text-white/85">
                  <div className="flex items-start gap-2.5">
                    <CalendarDays className="mt-0.5 size-4 shrink-0 text-white/70" aria-hidden="true" />
                    <p>
                      <span className="text-white/60">Best time to visit:</span> {destination.bestTime}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CloudSun className="mt-0.5 size-4 shrink-0 text-white/70" aria-hidden="true" />
                    <p>
                      <span className="text-white/60">Weather:</span> {destination.weather}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Backpack className="mt-0.5 size-4 shrink-0 text-white/70" aria-hidden="true" />
                    <p>
                      <span className="text-white/60">Bring:</span> {destination.essentials}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
