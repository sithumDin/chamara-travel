import { galleryImages } from "@/data/gallery";

// Best-of Sri Lanka destinations, mapped to real gallery photos.
// Shared between the homepage DestinationsCarousel and the /about-sri-lanka page.
export const destinationInfo = [
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
    id: "g-misty-tea-plantation-hillside",
    name: "Tea Country, Nuwara Eliya",
    summary:
      "Walk between endless rows of tea bushes across misty highland slopes, where the world's finest Ceylon tea is hand-picked daily.",
    bestTime: "Jan – Mar",
    weather: "Cool, 10–20°C, chilly nights",
    essentials: "Warm layers, comfortable walking shoes",
  },
  {
    id: "g-165-leopard-tree-branch-dangling-legs",
    name: "Yala National Park",
    summary:
      "Track leopards, elephants and exotic birds on an open jeep safari through Sri Lanka's most rewarding wildlife national park.",
    bestTime: "Feb – Jun",
    weather: "Hot & dry, 27–33°C",
    essentials: "Binoculars, neutral clothing, sun protection",
  },
  {
    id: "g-fishing-boats-beach-sunset",
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
    id: "g-119-family-stilt-fishing-poles-beach",
    name: "Stilt Fishermen, South Coast",
    summary:
      "Watch fishermen balance on wooden poles above the surf, an iconic and dwindling tradition unique to Sri Lanka's south coast.",
    bestTime: "Nov – Apr",
    weather: "Warm, 27–31°C",
    essentials: "Camera, sun protection, a small tip for photos",
  },
  {
    id: "g-159-couple-worlds-end-sign-horton-plains",
    name: "World's End, Horton Plains",
    summary:
      "Hike across misty cloud-forest plains to a sheer 870-metre escarpment drop, with views across the southern plains on a clear morning.",
    bestTime: "Jan – Mar",
    weather: "Cold & misty, 5–15°C",
    essentials: "Warm jacket, start before 7am for clear views",
  },
  {
    id: "g-145-guide-family-boat-lotus-lagoon",
    name: "Madu River Lotus Lagoon",
    summary:
      "Drift by boat through mangrove channels and a pink lotus-covered lagoon, spotting cinnamon islands and water monitors along the way.",
    bestTime: "Dec – Apr",
    weather: "Warm & humid, 27–31°C",
    essentials: "Sun hat, camera, insect repellent",
  },
  {
    id: "g-169-man-pidurangala-rock-sigiriya-jump",
    name: "Pidurangala Rock",
    summary:
      "Climb the boulder-strewn twin of Sigiriya for the best sunrise view of the Lion Rock itself, without the crowds or the ticket queue.",
    bestTime: "Jan – Mar",
    weather: "Hot & humid, 26–32°C",
    essentials: "Head torch for the pre-dawn climb, sturdy shoes",
  },
] as const;

export const destinations = destinationInfo.map((info) => ({
  ...galleryImages.find((image) => image.id === info.id)!,
  ...info,
}));
