// ---------------------------------------------------------------------------
// TOUR PACKAGES — placeholder content.
// All copy, pricing, itineraries and images below are realistic PLACEHOLDER
// content for launch. Replace photos (currently sourced from picsum.photos
// placeholders) and adjust copy/pricing to match your real packages.
//
// To add a new tour: copy an existing object, give it a unique `slug`
// (used in the URL /tours/[slug]), and fill in the fields. The tour will
// automatically appear on /tours, in the "Interested tour" dropdown on the
// inquiry form, and get its own detail page + sitemap entry.
// ---------------------------------------------------------------------------

import type { Tour } from "@/types";

const img = (seed: string, alt: string): { src: string; alt: string } => ({
  src: `https://picsum.photos/seed/${seed}/1600/1067`,
  alt,
});

export const tours: Tour[] = [
  {
    slug: "colombo-city-highlights",
    title: "Colombo City Highlights",
    summary: "A relaxed half-day introduction to Sri Lanka's buzzing capital.",
    description:
      "Perfect for a stopover between flights or your first day in the country. We'll cruise through Colombo's colonial-era streets, busy markets, temples, and waterfront in air-conditioned comfort, with as many photo stops as you like.",
    images: [
      { src: "https://images.pexels.com/photos/30129034/pexels-photo-30129034.jpeg?cs=srgb&fm=jpg", alt: "Colombo skyline at twilight reflected on the lake" },
      { src: "https://images.pexels.com/photos/19759365/pexels-photo-19759365.jpeg?cs=srgb&fm=jpg", alt: "Buddha statues at Gangaramaya Temple in Colombo" },
      { src: "https://images.pexels.com/photos/20712001/pexels-photo-20712001.jpeg?cs=srgb&fm=jpg", alt: "Galle Face Green promenade on the Colombo seafront" },
      img("lk-colombo-4", "Pettah market street in Colombo"),
    ],
    durationDays: 1,
    durationLabel: "1 Day",
    themes: ["culture"],
    groupSize: "1 - 6 travellers",
    difficulty: "easy",
    fromPriceUsd: 65,
    itinerary: [
      {
        day: 1,
        title: "Colombo in a Day",
        description:
          "Pick-up from your hotel or the airport. Visit Gangaramaya Temple, the Old Dutch Hospital, Independence Square, Galle Face Green, and the lively Pettah market before drop-off in the evening.",
      },
    ],
    included: [
      "Private air-conditioned vehicle",
      "English-speaking driver-guide",
      "Hotel or airport pick-up and drop-off",
      "Bottled water on board",
    ],
    excluded: ["Entrance fees to sites", "Meals", "Personal expenses"],
    priceTiers: [
      { groupSize: "1 traveller", pricePerPersonUsd: 65 },
      { groupSize: "2 travellers", pricePerPersonUsd: 45 },
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 35 },
      { groupSize: "5+ travellers", pricePerPersonUsd: 28 },
    ],
    mapImage: img("lk-map-colombo", "Map of the Colombo city tour route"),
    highlights: ["Gangaramaya Temple", "Galle Face Green", "Pettah Market", "Independence Square"],
  },
  {
    slug: "sigiriya-dambulla-day-trip",
    title: "Sigiriya & Dambulla Day Trip",
    summary: "Climb the Lion Rock and explore ancient cave temples in a single day.",
    description:
      "A jam-packed cultural day trip to two of Sri Lanka's most iconic UNESCO World Heritage Sites — the Sigiriya rock fortress and the Dambulla cave temple complex, with its ancient Buddhist murals and statues.",
    images: [
      { src: "/gallery/037-man-sigiriya-rock-viewpoint.jpg", alt: "Sigiriya rock fortress viewed from the approach path" },
      { src: "/gallery/111-friends-sigiriya-rock-viewpoint-selfie.jpg", alt: "Friends taking in the view from Sigiriya rock fortress" },
      { src: "https://images.unsplash.com/photo-1764697902732-9d8f476e174d?fm=jpg&q=80&w=1600&auto=format&fit=crop", alt: "Ancient stone Buddha statues carved into a cave temple wall" },
      { src: "https://images.pexels.com/photos/29503153/pexels-photo-29503153.jpeg?cs=srgb&fm=jpg", alt: "Interior of an ancient Buddhist cave temple with statues" },
    ],
    durationDays: 1,
    durationLabel: "1 Day",
    themes: ["culture"],
    groupSize: "1 - 6 travellers",
    difficulty: "moderate",
    fromPriceUsd: 75,
    itinerary: [
      {
        day: 1,
        title: "Sigiriya & Dambulla",
        description:
          "Early departure to beat the heat and the crowds. Climb Sigiriya rock fortress (about 1,200 steps), then continue to the Dambulla cave temple in the afternoon before returning to your hotel.",
      },
    ],
    included: [
      "Private air-conditioned vehicle",
      "English-speaking driver-guide",
      "Hotel pick-up and drop-off",
      "Bottled water on board",
    ],
    excluded: ["Sigiriya and Dambulla entrance tickets", "Meals", "Personal expenses"],
    priceTiers: [
      { groupSize: "1 traveller", pricePerPersonUsd: 75 },
      { groupSize: "2 travellers", pricePerPersonUsd: 55 },
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 42 },
      { groupSize: "5+ travellers", pricePerPersonUsd: 34 },
    ],
    mapImage: img("lk-map-sigiriya", "Map of the Sigiriya and Dambulla day trip route"),
    highlights: ["Sigiriya Lion Rock climb", "Dambulla Cave Temple", "Ancient frescoes", "Panoramic summit views"],
    featured: true,
  },
  {
    slug: "cultural-triangle-explorer",
    title: "Cultural Triangle Explorer",
    summary: "Four days through Sri Lanka's ancient kingdoms — Anuradhapura, Polonnaruwa and Sigiriya.",
    description:
      "Trace over two thousand years of history through Sri Lanka's Cultural Triangle. Wander sacred cities, climb rock fortresses, cycle through ancient ruins, and see wild elephants along the way.",
    images: [
      { src: "https://images.pexels.com/photos/10638034/pexels-photo-10638034.jpeg?cs=srgb&fm=jpg", alt: "The Ruwanwelisaya stupa in Anuradhapura framed by tree branches" },
      { src: "/gallery/055-family-polonnaruwa-ruins-palace.jpg", alt: "Family exploring the royal palace ruins in Polonnaruwa" },
      { src: "/gallery/080-group-sigiriya-rock-fortress-lawn.jpg", alt: "Sigiriya rock fortress viewed from the gardens" },
      { src: "/gallery/144-elephant-herd-river-bathing.jpg", alt: "Wild elephants bathing in a river during a safari" },
      img("lk-triangle-5", "Moonstone carving at an ancient temple entrance"),
    ],
    durationDays: 4,
    durationLabel: "4 Days / 3 Nights",
    themes: ["culture", "wildlife"],
    groupSize: "2 - 8 travellers",
    difficulty: "moderate",
    fromPriceUsd: 340,
    itinerary: [
      { day: 1, title: "Colombo to Anuradhapura", description: "Depart Colombo and drive north to the sacred city of Anuradhapura. Visit the Sri Maha Bodhi tree and the great stupas of Ruwanwelisaya and Jetavanaramaya.", overnightAt: "Anuradhapura" },
      { day: 2, title: "Anuradhapura to Polonnaruwa", description: "Continue to Polonnaruwa, Sri Lanka's medieval capital. Cycle through the royal palace ruins, the Gal Vihara rock-cut Buddhas, and the ancient reservoirs.", overnightAt: "Polonnaruwa / Sigiriya area" },
      { day: 3, title: "Sigiriya & Minneriya Safari", description: "Climb the Sigiriya rock fortress in the morning, then head out on an afternoon jeep safari at Minneriya National Park to spot wild elephant herds.", overnightAt: "Sigiriya" },
      { day: 4, title: "Dambulla to Colombo", description: "Visit the Dambulla cave temple on the way back, then transfer to Colombo or onward to your next destination.", overnightAt: "Departure" },
    ],
    included: [
      "Private air-conditioned vehicle for the full trip",
      "English-speaking driver-guide throughout",
      "3 nights accommodation (comfortable 3-4 star hotels)",
      "Daily breakfast",
      "Minneriya safari jeep and park entry",
      "Bottled water daily",
    ],
    excluded: ["Site entrance tickets (Anuradhapura, Polonnaruwa, Sigiriya, Dambulla)", "Lunches and dinners", "Travel insurance", "Personal expenses and tips"],
    priceTiers: [
      { groupSize: "2 travellers", pricePerPersonUsd: 340 },
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 295 },
      { groupSize: "5 - 8 travellers", pricePerPersonUsd: 250 },
    ],
    mapImage: img("lk-map-triangle", "Map of the Cultural Triangle route"),
    highlights: ["Anuradhapura sacred city", "Polonnaruwa cycling tour", "Sigiriya Lion Rock", "Minneriya elephant safari"],
    featured: true,
  },
  {
    slug: "yala-wildlife-safari-escape",
    title: "Yala Wildlife Safari Escape",
    summary: "Three days chasing leopards, elephants and birdlife in Sri Lanka's top national park.",
    description:
      "Yala National Park has one of the highest leopard densities in the world. This safari-focused escape gives you two full game drives plus a relaxed coastal stay, ideal for wildlife lovers and photographers.",
    images: [
      { src: "/gallery/048-leopard-resting-tree-branch.jpg", alt: "Leopard resting on a tree branch in Yala National Park" },
      { src: "https://images.pexels.com/photos/34647894/pexels-photo-34647894.jpeg?cs=srgb&fm=jpg", alt: "Wild elephant crossing a forest dirt track" },
      { src: "/gallery/114-couple-safari-jeep-portrait.jpg", alt: "Guests on a safari jeep during a Yala game drive" },
      { src: "https://images.pexels.com/photos/33668617/pexels-photo-33668617.jpeg?cs=srgb&fm=jpg", alt: "Peacock displaying its vibrant feathers" },
    ],
    durationDays: 3,
    durationLabel: "3 Days / 2 Nights",
    themes: ["wildlife"],
    groupSize: "2 - 6 travellers",
    difficulty: "easy",
    fromPriceUsd: 285,
    itinerary: [
      { day: 1, title: "Colombo to Yala", description: "Scenic drive south along the coast to the Yala area, with a stop at a spice garden or turtle hatchery en route.", overnightAt: "Tissamaharama / Yala" },
      { day: 2, title: "Full-Day Safari", description: "Sunrise and afternoon game drives inside Yala National Park in search of leopard, elephant, sloth bear, crocodile and abundant birdlife.", overnightAt: "Tissamaharama / Yala" },
      { day: 3, title: "Return Journey", description: "Optional early morning game drive, then transfer back to Colombo or onward to the south coast beaches.", overnightAt: "Departure" },
    ],
    included: [
      "Private air-conditioned vehicle",
      "English-speaking driver-guide",
      "2 nights accommodation near the park",
      "Daily breakfast",
      "2 jeep safaris with local tracker",
      "Yala National Park entrance fees",
    ],
    excluded: ["Lunches and dinners", "Travel insurance", "Camera/video permits", "Personal expenses and tips"],
    priceTiers: [
      { groupSize: "2 travellers", pricePerPersonUsd: 285 },
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 245 },
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 210 },
    ],
    mapImage: img("lk-map-yala", "Map of the Yala safari route"),
    highlights: ["Two guided game drives", "Highest leopard density in Asia", "Birdwatching", "Coastal drive along the south"],
    featured: true,
  },
  {
    slug: "hill-country-tea-trails",
    title: "Hill Country Tea Trails",
    summary: "Cool mountain air, rolling tea estates and the iconic Nine Arches Bridge.",
    description:
      "Escape to Sri Lanka's central highlands. Ride the famous blue train through tea country, walk between rows of hand-picked tea, and visit waterfalls, viewpoints and colonial hill towns.",
    images: [
      { src: "/gallery/050-tea-plantation-hills-rows.jpg", alt: "Rows of tea plantation across the hills of Nuwara Eliya" },
      { src: "/gallery/nine-arches-bridge-ella.jpg", alt: "A blue train crossing the Nine Arches Bridge through the forest near Ella" },
      { src: "/gallery/076-woman-mountain-ridge-viewpoint-rock.jpg", alt: "A traveller taking in the misty mountain ridge views of the hill country" },
      { src: "/gallery/011-couple-waterfall-portrait.jpg", alt: "Couple portrait at a waterfall in the central highlands" },
    ],
    durationDays: 4,
    durationLabel: "4 Days / 3 Nights",
    themes: ["hill-country"],
    groupSize: "2 - 8 travellers",
    difficulty: "easy",
    fromPriceUsd: 310,
    itinerary: [
      { day: 1, title: "Kandy to Nuwara Eliya", description: "Drive up into the highlands, stopping at Ramboda Falls and a working tea factory for a tasting.", overnightAt: "Nuwara Eliya" },
      { day: 2, title: "Nuwara Eliya to Ella", description: "Continue through tea country to Ella, with a stop at Lipton's Seat viewpoint or Horton Plains along the way.", overnightAt: "Ella" },
      { day: 3, title: "Ella Exploration", description: "Walk to the Nine Arches Bridge, hike Little Adam's Peak, and relax at Ravana Falls.", overnightAt: "Ella" },
      { day: 4, title: "Onward Journey", description: "Transfer onward toward the south coast or back to Colombo, with scenic stops along the way.", overnightAt: "Departure" },
    ],
    included: [
      "Private air-conditioned vehicle",
      "English-speaking driver-guide",
      "3 nights accommodation",
      "Daily breakfast",
      "Tea factory tour and tasting",
    ],
    excluded: ["Blue train ticket (arranged on request)", "Lunches and dinners", "Travel insurance", "Personal expenses and tips"],
    priceTiers: [
      { groupSize: "2 travellers", pricePerPersonUsd: 310 },
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 265 },
      { groupSize: "5 - 8 travellers", pricePerPersonUsd: 225 },
    ],
    mapImage: img("lk-map-hills", "Map of the Hill Country tea trail route"),
    highlights: ["Nine Arches Bridge", "Tea factory tour", "Little Adam's Peak hike", "Ramboda Falls"],
    featured: true,
  },
  {
    slug: "southern-beaches-getaway",
    title: "Southern Beaches Getaway",
    summary: "Golden sand, whale watching and the historic Galle Fort along the south coast.",
    description:
      "A slow-paced coastal escape through Sri Lanka's southern beach belt — colonial Galle Fort, whale watching at Mirissa, stilt fishermen at Weligama, and long stretches of quiet sand.",
    images: [
      { src: "/gallery/118-empty-beach-rocks-palm-trees-coast.jpg", alt: "Palm-lined beach on the south coast of Sri Lanka" },
      { src: "/gallery/016-woman-galle-fort-lighthouse.jpg", alt: "Exploring the Galle Fort lighthouse at sunset" },
      { src: "https://images.pexels.com/photos/4609907/pexels-photo-4609907.jpeg?cs=srgb&fm=jpg", alt: "Humpback whale tail breaking the ocean surface" },
      { src: "/gallery/015-couple-beach-stilt-fisherman.jpg", alt: "Couple beside a traditional stilt fisherman on the south coast" },
      { src: "/gallery/128-rocky-cove-palm-trees-turquoise-waves.jpg", alt: "Turquoise water along a rocky cove on the south coast" },
    ],
    durationDays: 5,
    durationLabel: "5 Days / 4 Nights",
    themes: ["beach"],
    groupSize: "1 - 8 travellers",
    difficulty: "easy",
    fromPriceUsd: 380,
    itinerary: [
      { day: 1, title: "Colombo to Galle", description: "Drive down the coastal highway to Galle. Explore the UNESCO-listed Galle Fort's ramparts, boutiques, and cafes in the evening.", overnightAt: "Galle" },
      { day: 2, title: "Galle to Mirissa", description: "Short transfer to Mirissa. Free afternoon on the beach.", overnightAt: "Mirissa" },
      { day: 3, title: "Whale Watching", description: "Early morning whale watching boat trip (blue whales seasonal) followed by a relaxed beach day.", overnightAt: "Mirissa" },
      { day: 4, title: "Weligama & Stilt Fishermen", description: "Visit Weligama's stilt fishermen and try a surf lesson if you like, or simply unwind by the water.", overnightAt: "Mirissa / Weligama" },
      { day: 5, title: "Return to Colombo", description: "Leisurely drive back to Colombo or onward to the airport.", overnightAt: "Departure" },
    ],
    included: [
      "Private air-conditioned vehicle",
      "English-speaking driver-guide",
      "4 nights beachfront/near-beach accommodation",
      "Daily breakfast",
      "Whale watching boat trip",
    ],
    excluded: ["Galle Fort museum tickets", "Lunches and dinners", "Surf lessons", "Personal expenses and tips"],
    priceTiers: [
      { groupSize: "1 - 2 travellers", pricePerPersonUsd: 380 },
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 320 },
      { groupSize: "5 - 8 travellers", pricePerPersonUsd: 270 },
    ],
    mapImage: img("lk-map-beach", "Map of the Southern Beaches route"),
    highlights: ["Galle Fort", "Mirissa whale watching", "Weligama stilt fishermen", "South coast beaches"],
    featured: true,
  },
  {
    slug: "romantic-honeymoon-escape",
    title: "Romantic Honeymoon Escape",
    summary: "A seven-day journey through misty hills, wildlife and private beach time for two.",
    description:
      "Designed for couples — a relaxed, romantic pace through Kandy's hills, Ella's viewpoints, a private safari, and four unhurried nights on the south coast, with candlelit dinners arranged along the way.",
    images: [
      { src: "https://images.pexels.com/photos/15164906/pexels-photo-15164906.jpeg?cs=srgb&fm=jpg", alt: "Couple sitting on the beach watching the sunset" },
      { src: "https://images.pexels.com/photos/24807132/pexels-photo-24807132.jpeg?cs=srgb&fm=jpg", alt: "Private villa pool with a sea view" },
      { src: "https://images.pexels.com/photos/5116976/pexels-photo-5116976.jpeg?cs=srgb&fm=jpg", alt: "Candlelit dinner table set up for a romantic evening" },
      { src: "/gallery/013-guide-couple-tea-plantation-path.jpg", alt: "Couple walking through the tea plantation with their guide" },
    ],
    durationDays: 7,
    durationLabel: "7 Days / 6 Nights",
    themes: ["honeymoon", "beach", "hill-country"],
    groupSize: "2 travellers",
    difficulty: "easy",
    fromPriceUsd: 620,
    itinerary: [
      { day: 1, title: "Arrival & Kandy", description: "Airport pick-up and drive to Kandy. Visit the Temple of the Sacred Tooth Relic and enjoy a lakeside dinner.", overnightAt: "Kandy" },
      { day: 2, title: "Kandy to Nuwara Eliya", description: "Scenic drive into tea country with waterfall stops along the way.", overnightAt: "Nuwara Eliya" },
      { day: 3, title: "Ella", description: "Continue to Ella. Sunset at Little Adam's Peak, dinner at a viewpoint restaurant.", overnightAt: "Ella" },
      { day: 4, title: "Ella to Yala", description: "Transfer to Yala for a private afternoon safari in search of leopard and elephant.", overnightAt: "Yala area" },
      { day: 5, title: "South Coast", description: "Drive to the south coast beaches. Free afternoon by the water.", overnightAt: "Mirissa" },
      { day: 6, title: "Beach Day & Candlelit Dinner", description: "A full day to relax, with a private candlelit beach dinner arranged for the evening.", overnightAt: "Mirissa" },
      { day: 7, title: "Departure", description: "Leisurely morning before transfer to the airport.", overnightAt: "Departure" },
    ],
    included: [
      "Private air-conditioned vehicle for the full trip",
      "English-speaking driver-guide throughout",
      "6 nights accommodation in romantic, couple-friendly stays",
      "Daily breakfast",
      "One private candlelit beach dinner",
      "Private Yala safari jeep",
    ],
    excluded: ["Site entrance tickets", "Most lunches and dinners", "Travel insurance", "Personal expenses and tips"],
    priceTiers: [{ groupSize: "2 travellers", pricePerPersonUsd: 620 }],
    mapImage: img("lk-map-honeymoon", "Map of the honeymoon escape route"),
    highlights: ["Private candlelit beach dinner", "Ella viewpoints", "Private safari for two", "Couple-friendly boutique stays"],
  },
  {
    slug: "adventure-adrenaline-trail",
    title: "Adventure & Adrenaline Trail",
    summary: "White water rafting, hiking, ziplining and canyoning across six action-packed days.",
    description:
      "For travellers who want their trip to get the heart rate up — white water rafting at Kitulgala, waterfall hikes and canyoning near Ella, ziplining through the hills, and a challenging sunrise climb.",
    images: [
      { src: "https://images.pexels.com/photos/31758766/pexels-photo-31758766.jpeg", alt: "White water rafting through river rapids" },
      { src: "/gallery/051-couple-hiking-forest-path-horton-plains.jpg", alt: "Hiking the forest trail at Horton Plains" },
      { src: "https://images.unsplash.com/photo-1648172846433-ca73f0ee522c?fm=jpg&q=80&w=1600&auto=format&fit=crop", alt: "Ziplining through the forest canopy" },
      { src: "https://images.unsplash.com/photo-1724460747514-0d61659f0013?fm=jpg&q=80&w=1600&auto=format&fit=crop", alt: "Jumping into a waterfall pool while canyoning" },
    ],
    durationDays: 6,
    durationLabel: "6 Days / 5 Nights",
    themes: ["adventure"],
    groupSize: "2 - 6 travellers",
    difficulty: "challenging",
    fromPriceUsd: 560,
    itinerary: [
      { day: 1, title: "Colombo to Kitulgala", description: "Transfer to Kitulgala and get settled in before an afternoon of white water rafting on the Kelani River.", overnightAt: "Kitulgala" },
      { day: 2, title: "Kitulgala to Ella", description: "Drive to Ella via Adam's Peak base area. Optional late-night climb of Adam's Peak for sunrise (season-dependent).", overnightAt: "Ella" },
      { day: 3, title: "Canyoning & Hiking", description: "Full day of canyoning through waterfalls near Ella, followed by a hike to Little Adam's Peak.", overnightAt: "Ella" },
      { day: 4, title: "Ziplining & Nine Arches", description: "Zipline through the hills in the morning, visit the Nine Arches Bridge, then transfer toward the south.", overnightAt: "Udawalawe area" },
      { day: 5, title: "Udawalawe Safari", description: "Morning jeep safari at Udawalawe National Park, known for its large elephant herds.", overnightAt: "Udawalawe" },
      { day: 6, title: "Return Journey", description: "Transfer back to Colombo or onward to the beach.", overnightAt: "Departure" },
    ],
    included: [
      "Private air-conditioned vehicle",
      "English-speaking driver-guide",
      "5 nights accommodation",
      "Daily breakfast",
      "White water rafting, canyoning, ziplining activity fees",
      "Udawalawe safari jeep and entry",
    ],
    excluded: ["Adam's Peak climb guide (arranged locally)", "Lunches and dinners", "Travel insurance", "Personal expenses and tips"],
    priceTiers: [
      { groupSize: "2 travellers", pricePerPersonUsd: 560 },
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 495 },
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 440 },
    ],
    mapImage: img("lk-map-adventure", "Map of the Adventure and Adrenaline Trail route"),
    highlights: ["Kitulgala white water rafting", "Canyoning near Ella", "Ziplining", "Udawalawe elephant safari"],
  },
  {
    slug: "ultimate-sri-lanka-round-trip",
    title: "Ultimate Sri Lanka Round Trip",
    summary: "Ten days, every region — beaches, wildlife, ancient cities and misty hills in one grand loop.",
    description:
      "The complete Sri Lanka experience. This flagship round-trip circles the island, covering the Cultural Triangle, hill country tea estates, a wildlife safari, and south coast beaches — everything, at a comfortable pace.",
    images: [
      { src: "https://images.pexels.com/photos/16508231/pexels-photo-16508231.jpeg?cs=srgb&fm=jpg", alt: "Aerial drone view of Tangalle beach on the Sri Lankan coastline" },
      { src: "/gallery/022-family-flag-sigiriya-lake.jpg", alt: "Family at Sigiriya rock fortress" },
      { src: "/gallery/059-woman-tea-plantation-picking-leaves.jpg", alt: "Picking tea leaves in the hill country plantations" },
      { src: "/gallery/083-leopard-sleeping-tree-branch.jpg", alt: "Leopard resting in a tree in Yala National Park" },
      { src: "/gallery/133-palm-trees-shipwreck-sunset-silhouette.jpg", alt: "Palm trees silhouetted against a south coast sunset" },
      { src: "/gallery/nine-arches-bridge-ella.jpg", alt: "A blue train crossing the Nine Arches Bridge through the forest near Ella" },
    ],
    durationDays: 10,
    durationLabel: "10 Days / 9 Nights",
    themes: ["culture", "wildlife", "beach", "hill-country"],
    groupSize: "2 - 8 travellers",
    difficulty: "moderate",
    fromPriceUsd: 890,
    itinerary: [
      { day: 1, title: "Arrival & Negombo", description: "Airport pick-up and a relaxed first night near the coast to settle in.", overnightAt: "Negombo" },
      { day: 2, title: "Sigiriya", description: "Drive north to Sigiriya, visiting a spice garden along the way.", overnightAt: "Sigiriya" },
      { day: 3, title: "Sigiriya & Polonnaruwa", description: "Climb Sigiriya rock fortress in the morning, explore the ancient city of Polonnaruwa by bicycle in the afternoon.", overnightAt: "Sigiriya" },
      { day: 4, title: "Minneriya Safari to Kandy", description: "Morning elephant safari at Minneriya, then continue to Kandy.", overnightAt: "Kandy" },
      { day: 5, title: "Kandy", description: "Visit the Temple of the Sacred Tooth Relic, Royal Botanical Gardens, and enjoy a traditional dance show.", overnightAt: "Kandy" },
      { day: 6, title: "Nuwara Eliya & Tea Country", description: "Scenic drive into the hills, stopping at waterfalls and a tea factory.", overnightAt: "Nuwara Eliya" },
      { day: 7, title: "Ella", description: "Continue to Ella. Visit Nine Arches Bridge and Little Adam's Peak.", overnightAt: "Ella" },
      { day: 8, title: "Yala Safari", description: "Transfer to Yala for an afternoon game drive in search of leopard and elephant.", overnightAt: "Yala area" },
      { day: 9, title: "South Coast Beach", description: "Drive to Mirissa or Galle. Free time to relax on the beach or explore Galle Fort.", overnightAt: "South coast" },
      { day: 10, title: "Departure", description: "Transfer back to Colombo airport for your onward flight.", overnightAt: "Departure" },
    ],
    included: [
      "Private air-conditioned vehicle for the full trip",
      "English-speaking driver-guide throughout",
      "9 nights accommodation (comfortable 3-4 star hotels)",
      "Daily breakfast",
      "Minneriya and Yala safari jeeps and park entries",
      "Polonnaruwa bicycle hire",
      "Bottled water daily",
    ],
    excluded: ["Site entrance tickets", "Lunches and dinners", "Travel insurance", "Personal expenses and tips"],
    priceTiers: [
      { groupSize: "2 travellers", pricePerPersonUsd: 890 },
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 760 },
      { groupSize: "5 - 8 travellers", pricePerPersonUsd: 650 },
    ],
    mapImage: img("lk-map-roundtrip", "Map of the Ultimate Sri Lanka Round Trip route"),
    highlights: ["Sigiriya & Polonnaruwa", "Kandy's Temple of the Tooth", "Tea country & Nine Arches Bridge", "Yala leopard safari", "South coast beach finale"],
    featured: true,
  },
];

export const getTourBySlug = (slug: string) => tours.find((t) => t.slug === slug);

export const featuredTours = () => tours.filter((t) => t.featured);

export const relatedTours = (slug: string, count = 3) =>
  tours.filter((t) => t.slug !== slug).slice(0, count);
