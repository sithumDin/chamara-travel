import { galleryImages } from "@/data/gallery";

function img(id: string) {
  const image = galleryImages.find((image) => image.id === id);
  if (!image) throw new Error(`Unknown gallery image id: ${id}`);
  return { src: image.src, alt: image.alt };
}

// Best-of Sri Lanka destinations, mapped to real gallery photos.
// Shared between the homepage DestinationsCarousel and the /about-sri-lanka page.
export const destinationInfo = [
  {
    id: "g-073-couple-sigiriya-rock-fortress-view",
    slug: "sigiriya-rock-fortress",
    name: "Sigiriya Rock Fortress",
    summary:
      "Climb the ancient rock fortress rising from the jungle, past 5th-century frescoes, to a summit with sweeping views across the plains.",
    description:
      "Rising 200 metres above the surrounding jungle, Sigiriya is one of Sri Lanka's most iconic sights and a UNESCO World Heritage Site. King Kashyapa built his royal citadel on this sheer rock outcrop in the 5th century, and what remains today is remarkable: water gardens at the base, a gallery of ancient frescoes halfway up, mirror walls polished enough to still reflect light, and the giant carved lion's paws that give the fortress its name — Sigiriya, or Lion Rock. The final staircase to the summit is steep and exposed, but the reward is a 360-degree view over the Cultural Triangle's forests and reservoirs that makes the climb one of the most memorable mornings of any Sri Lanka itinerary.",
    bestTime: "Jan – Mar",
    weather: "Hot & humid, 26–32°C",
    essentials: "Sun hat, water, sturdy shoes for the climb",
    images: [
      img("g-037-man-sigiriya-rock-viewpoint"),
      img("g-111-friends-sigiriya-rock-viewpoint-selfie"),
      img("g-080-group-sigiriya-rock-fortress-lawn"),
      img("g-woman-sigiriya-rock-ruins-portrait"),
    ],
  },
  {
    id: "g-hills-nine-arches",
    slug: "nine-arches-bridge-ella",
    name: "Nine Arches Bridge, Ella",
    summary:
      "Watch the blue train wind across this colonial-era viaduct, framed by mist and jungle in the cool hills above Ella.",
    description:
      "Built entirely from stone, brick and cement without a single piece of steel — the story goes that construction stalled during World War I when the steel shipment never arrived, so local builders improvised — the Nine Arches Bridge is one of the finest examples of colonial-era railway engineering in Sri Lanka. Set among tea plantations and jungle canopy just outside Ella, the viaduct is at its most photogenic when the blue-liveried train crosses it, usually a couple of times a day. Arrive early to find a good vantage point on the surrounding hillside paths, and stay for the walk down into Ella town for a coffee overlooking the valley.",
    bestTime: "Dec – Mar",
    weather: "Mild & misty, 15–25°C",
    essentials: "Light jacket, camera, check the train times",
    images: [
      img("g-146-guide-boy-nine-arches-bridge"),
      img("g-167-family-nine-arches-bridge-viewpoint"),
      img("g-woman-nine-arches-bridge-portrait"),
      img("g-woman-nine-arches-bridge-railway-track"),
    ],
  },
  {
    id: "g-misty-tea-plantation-hillside",
    slug: "tea-country-nuwara-eliya",
    name: "Tea Country, Nuwara Eliya",
    summary:
      "Walk between endless rows of tea bushes across misty highland slopes, where the world's finest Ceylon tea is hand-picked daily.",
    description:
      "Nicknamed \"Little England\" by British colonists for its cool climate, rolling hills and Tudor-style architecture, Nuwara Eliya sits at the heart of Sri Lanka's tea country. The surrounding hillsides are covered in emerald-green tea estates, many still hand-picked by workers who carry the same wicker baskets their families have used for generations. A visit to a working tea factory — Labookellie is the most accessible — walks you through withering, rolling, fermenting and drying before you sample a fresh cup at source. Between estates, expect winding roads, waterfalls, strawberry farms and a noticeably cooler climate than the rest of the island.",
    bestTime: "Jan – Mar",
    weather: "Cool, 10–20°C, chilly nights",
    essentials: "Warm layers, comfortable walking shoes",
    images: [
      img("g-050-tea-plantation-hills-rows"),
      img("g-059-woman-tea-plantation-picking-leaves"),
      img("g-089-couple-labookellie-tea-plantation-view"),
      img("g-171-couple-labookellie-tea-plantation-sign"),
    ],
  },
  {
    id: "g-165-leopard-tree-branch-dangling-legs",
    slug: "yala-national-park",
    name: "Yala National Park",
    summary:
      "Track leopards, elephants and exotic birds on an open jeep safari through Sri Lanka's most rewarding wildlife national park.",
    description:
      "Yala is Sri Lanka's most visited national park, and for good reason — it holds one of the highest densities of leopards anywhere in the world, alongside elephants, sloth bears, crocodiles and over 200 recorded bird species. Mornings and late afternoons are the best times to be out, when the heat drops and animals move to open ground and waterholes. Game drives are done in open-sided 4x4 jeeps with an experienced tracker, and while leopard sightings are never guaranteed, Yala's Block 1 delivers them more consistently than almost anywhere else in Asia. Beyond the wildlife, the park's landscape shifts from dry scrub jungle to lagoons and rocky outcrops, with ancient Buddhist ruins scattered throughout.",
    bestTime: "Feb – Jun",
    weather: "Hot & dry, 27–33°C",
    essentials: "Binoculars, neutral clothing, sun protection",
    images: [
      img("g-048-leopard-resting-tree-branch"),
      img("g-083-leopard-sleeping-tree-branch"),
      img("g-men-bathing-elephants-river"),
      img("g-137-sambar-deer-grazing-grassland"),
    ],
  },
  {
    id: "g-fishing-boats-beach-sunset",
    slug: "southern-coast-beaches",
    name: "Southern Coast Beaches",
    summary:
      "Relax on palm-fringed golden sand, surf gentle swells, and watch fishing boats return each evening along the southern coastline.",
    description:
      "From the surf breaks of Weligama and Midigama to the quieter sands around Tangalle and Dickwella, the southern coast is where most Sri Lanka itineraries wind down. Palm-fringed beaches, warm turquoise water and laid-back beach towns make it easy to fill a few days with nothing more ambitious than surf lessons, whale watching out of Mirissa, and watching the fishing fleet come in at sunset. Galle Fort — a walled, colonial-era old town of boutique cafes and ramparts overlooking the ocean — makes a good half-day stop between beach time, and the coast road connects everything by a scenic, easy drive.",
    bestTime: "Nov – Apr",
    weather: "Warm, 27–31°C",
    essentials: "Sunscreen, swimwear, light clothing",
    images: [
      img("g-golden-sand-beach-rocky-shoreline"),
      img("g-palm-fringed-turquoise-bay-coast"),
      img("g-turquoise-bay-palm-tree-viewpoint"),
      img("g-surfers-sunset-ocean-silhouette"),
    ],
  },
  {
    id: "g-055-family-polonnaruwa-ruins-palace",
    slug: "polonnaruwa-ancient-city",
    name: "Polonnaruwa Ancient City",
    summary:
      "Cycle between 12th-century royal ruins, carved Buddha statues and ancient reservoirs across Sri Lanka's best-preserved medieval capital city.",
    description:
      "Sri Lanka's second ancient capital, Polonnaruwa flourished in the 11th and 12th centuries under King Parakramabahu I, and its ruins are the best-preserved of the island's ancient cities. The archaeological park is spread out and flat, which makes it ideal to explore by bicycle — pedalling between the royal palace's seven-storey remains, the intricately carved Vatadage relic house, and the Gal Vihara's four monumental Buddha statues cut directly into a single granite outcrop. The scale of the ancient reservoir, Parakrama Samudra, is a reminder of the sophisticated irrigation engineering that supported the city more than 800 years ago.",
    bestTime: "May – Sep",
    weather: "Hot, 28–33°C",
    essentials: "Modest dress, hat, rent a bike for the site",
    images: [
      img("g-polonnaruwa-ancient-staircase-moonstone"),
      img("g-polonnaruwa-vatadage-buddha-statue"),
      img("g-family-polonnaruwa-royal-palace-ruins"),
    ],
  },
  {
    id: "g-072-temple-tooth-relic-kandy",
    slug: "temple-of-the-tooth-kandy",
    name: "Temple of the Tooth, Kandy",
    summary:
      "Visit Kandy's sacred temple housing Buddha's tooth relic, where drummers and worshippers gather for evening rituals each day.",
    description:
      "Sri Dalada Maligawa, the Temple of the Sacred Tooth Relic, is one of the most important Buddhist pilgrimage sites in the world, said to house a tooth relic of the Buddha himself brought to Sri Lanka in the 4th century. Set on the shore of Kandy Lake in the last capital of the Sinhalese kings, the temple complex comes alive during the thrice-daily puja rituals, when drummers and horn players lead a ceremonial procession to the inner shrine. The relic chamber itself is rarely opened to view, but the atmosphere, architecture and devotion on display make a visit worthwhile any time of year — especially so during the Kandy Esala Perahera festival each July or August.",
    bestTime: "Year-round",
    weather: "Mild, 20–28°C",
    essentials: "Shoulders/knees covered, shoes off inside",
    images: [
      img("g-temple-tooth-relic-golden-buddha-shrine"),
      img("g-046-friends-temple-flower-offering-kandy"),
    ],
  },
  {
    id: "g-119-family-stilt-fishing-poles-beach",
    slug: "stilt-fishermen-south-coast",
    name: "Stilt Fishermen, South Coast",
    summary:
      "Watch fishermen balance on wooden poles above the surf, an iconic and dwindling tradition unique to Sri Lanka's south coast.",
    description:
      "Perched on a single crossbar driven into the seabed just offshore, stilt fishermen casting their lines into the surf are one of the most photographed sights on Sri Lanka's south coast. The technique dates back to the food shortages of the 1940s, when fishermen began fishing from the wreckage of World War II ships and, later, purpose-built poles, to reach fish beyond the reef without competing for space on crowded rocks. Genuine full-time stilt fishing has become rare — many of the fishermen you'll see today are demonstrating the tradition for a small tip rather than fishing commercially — but it remains a striking, uniquely Sri Lankan scene best caught in the golden light of early morning or late afternoon around Koggala and Ahangama.",
    bestTime: "Nov – Apr",
    weather: "Warm, 27–31°C",
    essentials: "Camera, sun protection, a small tip for photos",
    images: [
      img("g-015-couple-beach-stilt-fisherman"),
      img("g-020-family-stilt-fishing-posts-beach"),
      img("g-087-children-stilt-fishing-poles-beach"),
      img("g-163-family-stilt-fisherman-rough-surf"),
    ],
  },
  {
    id: "g-159-couple-worlds-end-sign-horton-plains",
    slug: "worlds-end-horton-plains",
    name: "World's End, Horton Plains",
    summary:
      "Hike across misty cloud-forest plains to a sheer 870-metre escarpment drop, with views across the southern plains on a clear morning.",
    description:
      "Horton Plains National Park sits high on Sri Lanka's central plateau, a landscape of montane grassland and cloud forest that feels a world away from the tropical coast. The main draw is the 9km loop trail out to World's End, a sheer escarpment that drops 870 metres to the plains below — on a clear morning the views stretch as far as the south coast, though cloud typically rolls in by mid-morning, which is why an early start is essential. Along the way the trail passes Baker's Falls and open grassland where sambar deer graze in the cool highland air, a noticeably different climate and ecosystem from anywhere else on the island.",
    bestTime: "Jan – Mar",
    weather: "Cold & misty, 5–15°C",
    essentials: "Warm jacket, start before 7am for clear views",
    images: [
      img("g-051-couple-hiking-forest-path-horton-plains"),
      img("g-129-couple-horton-plains-foggy-entrance-sign"),
      img("g-horton-plains-grassland-mountain-view"),
      img("g-horton-plains-trail-info-board"),
    ],
  },
  {
    id: "g-145-guide-family-boat-lotus-lagoon",
    slug: "madu-river-lotus-lagoon",
    name: "Madu River Lotus Lagoon",
    summary:
      "Drift by boat through mangrove channels and a pink lotus-covered lagoon, spotting cinnamon islands and water monitors along the way.",
    description:
      "The Madu River estuary, near Balapitiya on the south coast, is a maze of mangrove-lined channels, small islands and open lagoon that makes for one of Sri Lanka's most relaxing half-day excursions. Traditional boat safaris weave between more than 60 islands, stopping at a cinnamon-growing island to see the spice processed by hand, and often at a small local family's home for tea. The highlight for many is drifting through a wide lagoon carpeted in pink lotus flowers, with kingfishers and water monitors along the banks and, if you're lucky, a fish eagle overhead — a calm, scenic contrast to the coast's beaches just a few minutes away.",
    bestTime: "Dec – Apr",
    weather: "Warm & humid, 27–31°C",
    essentials: "Sun hat, camera, insect repellent",
    images: [
      img("g-086-family-flag-lotus-flowers-boat"),
      img("g-147-women-madu-boat-safari-sign"),
      img("g-151-guide-canoe-lotus-lagoon-thumbsup"),
      img("g-166-couple-lotus-leaf-hats-wetland"),
    ],
  },
  {
    id: "g-169-man-pidurangala-rock-sigiriya-jump",
    slug: "pidurangala-rock",
    name: "Pidurangala Rock",
    summary:
      "Climb the boulder-strewn twin of Sigiriya for the best sunrise view of the Lion Rock itself, without the crowds or the ticket queue.",
    description:
      "Just across the plain from Sigiriya, Pidurangala is a quieter, cheaper and — for many visitors — more rewarding climb. King Kashyapa is said to have moved the resident monks here when he built his fortress on Sigiriya, and their cave temple still sits partway up the rock. The path to the top is a scramble over boulders rather than a formal staircase, steeper in places and requiring a bit more agility, but it delivers what Sigiriya itself can't: an unobstructed view of the Lion Rock rising out of the jungle, especially spectacular at sunrise before the day's heat and crowds arrive.",
    bestTime: "Jan – Mar",
    weather: "Hot & humid, 26–32°C",
    essentials: "Head torch for the pre-dawn climb, sturdy shoes",
    images: [
      img("g-022-family-flag-sigiriya-lake"),
      img("g-woman-sigiriya-rock-garden-view"),
      img("g-couple-sigiriya-rock-field-portrait"),
    ],
  },
] as const;

export const destinations = destinationInfo.map((info) => ({
  ...galleryImages.find((image) => image.id === info.id)!,
  ...info,
}));

export type Destination = (typeof destinations)[number];

export function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function relatedDestinations(slug: string, count = 3) {
  const others = destinations.filter((destination) => destination.slug !== slug);
  return others.slice(0, count);
}
