// ---------------------------------------------------------------------------
// TOUR PACKAGES
//
// Content below is built from the real tour write-ups supplied for launch.
// Photos are reused from /public/gallery. Map images still use picsum
// placeholders — swap `mapImage` for real route maps when available.
//
// PRICING: the `fromPriceUsd` and `priceTiers` numbers below are PLACEHOLDERS
// pending the real rates. Update every value marked with `// price: placeholder`.
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
    slug: "wilpattu-national-park-jeep-safari",
    title: "Wilpattu National Park Jeep Safari",
    summary:
      "A full-day, all-inclusive jeep safari in Sri Lanka's largest national park — leopards without the crowds.",
    description:
      "An adventurous full-day safari at Wilpattu National Park, with packed breakfast and lunch at the park. Wilpattu is the largest national park in Sri Lanka and records the second-highest leopard density in the country after Yala, yet it admits far fewer visitors. That makes it a perfect alternative for safari-goers who want to see wildlife in its natural habitat while avoiding the crowds.",
    images: [
      { src: "/gallery/048-leopard-resting-tree-branch.jpg", alt: "Leopard resting on a tree branch in Wilpattu National Park" },
      { src: "/gallery/165-leopard-tree-branch-dangling-legs.jpg", alt: "Leopard draped over a tree branch with legs dangling" },
      { src: "/gallery/114-couple-safari-jeep-portrait.jpg", alt: "Guests on a jeep during a full-day Wilpattu safari" },
      { src: "/gallery/elephant-crossing-forest-track.jpg", alt: "Wild elephant crossing a forest track in the park" },
      { src: "/gallery/137-sambar-deer-grazing-grassland.jpg", alt: "Sambar deer grazing on grassland in the national park" },
      { src: "/gallery/174-guide-holding-small-crocodile.jpg", alt: "Guide holding a small mugger crocodile" },
      { src: "/gallery/kingfisher-bird-mangrove-branch.jpg", alt: "Kingfisher perched on a branch near a park waterhole" },
      { src: "/gallery/125-women-safari-jeep-waving.jpg", alt: "Travellers waving from a safari jeep at Wilpattu" },
      { src: "/gallery/woman-photographing-wild-elephant-safari.jpg", alt: "Traveller photographing a wild elephant on safari" },
    ],
    durationDays: 1,
    durationLabel: "1 Day (approx. 16 hours)",
    themes: ["wildlife"],
    groupSize: "1 - 6 travellers",
    difficulty: "easy",
    fromPriceUsd: 90, // price: placeholder
    itinerary: [
      {
        day: 1,
        title: "Full-Day Wilpattu Safari",
        description:
          "04:00 — Hotel pick-up by your driver and transfer to Wilpattu National Park. 07:00 — Enjoy your packed breakfast near the park entrance, then begin the first half of the safari; Wilpattu's high leopard density makes sightings more likely than most parks. 13:00 — Lunch at the park. 14:00 — The second half of the game drive: the park's western boundary is the Indian Ocean, so it is a haven for aquatic birds, and it is home to 31 mammal species including sloth bear, water buffalo, spotted deer, ruddy mongoose, mugger crocodile, Bengal monitor and mouse deer. 18:00 — Return transfer to your hotel.",
      },
    ],
    included: [
      "Hotel pick-up and drop-off (from listed pick-up areas)",
      "Air-conditioned vehicle for transfers",
      "Safari jeep hire",
      "Wilpattu National Park entrance fees",
      "Packed breakfast and lunch",
      "Refreshments and bottled water during the safari",
      "All government taxes",
    ],
    excluded: ["Gratuities", "Anything not listed under inclusions"],
    priceTiers: [
      { groupSize: "1 traveller", pricePerPersonUsd: 90 }, // price: placeholder
      { groupSize: "2 travellers", pricePerPersonUsd: 75 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 60 }, // price: placeholder
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 50 }, // price: placeholder
    ],
    mapImage: img("lk-map-wilpattu", "Map of the Wilpattu safari route"),
    highlights: [
      "Second-highest leopard density in Sri Lanka",
      "Far fewer visitors than Yala",
      "Packed breakfast and lunch at the park",
      "Full-day private game drive",
    ],
    featured: true,
  },
  {
    slug: "southern-sri-lanka-sightseeing-day-trip",
    title: "Southern Sri Lanka Sightseeing Day Trip",
    summary:
      "The best of the south coast in a day — Galle Fort, a Madu River boat safari, turtles and stilt fishermen.",
    description:
      "This tour covers the best of Sri Lanka's south coast. Explore Galle and its iconic Dutch Fort, walking the ramparts and cobblestone lanes. Visit the Ambalangoda mask tradition, take a memorable boat ride on the Madu River, stop at a sea turtle hatchery, and see the Koggala stilt fishermen. The Japanese Peace Pagoda at Rumassala is a bonus.",
    images: [
      { src: "/gallery/016-woman-galle-fort-lighthouse.jpg", alt: "Galle Fort lighthouse framed by palm trees" },
      { src: "/gallery/galle-lighthouse-fort-pathway.jpg", alt: "Pathway along the ramparts to the Galle Fort lighthouse" },
      { src: "/gallery/060-couple-mangrove-boat-tour.jpg", alt: "Couple on a mangrove boat safari on the Madu River" },
      { src: "/gallery/boat-mangrove-tunnel-channel.jpg", alt: "Boat passing through a mangrove tunnel on the Madu River" },
      { src: "/gallery/woman-holding-baby-crocodile-boat.jpg", alt: "Guest holding a young crocodile during the Madu River safari" },
      { src: "/gallery/015-couple-beach-stilt-fisherman.jpg", alt: "Couple beside a traditional stilt fisherman at Koggala" },
      { src: "/gallery/163-family-stilt-fisherman-rough-surf.jpg", alt: "Stilt fisherman perched above the surf on the south coast" },
      { src: "/gallery/174-guide-holding-small-crocodile.jpg", alt: "Guide holding a small crocodile on the mangrove safari" },
      { src: "/gallery/023-woman-bakery-cafe-galle.jpg", alt: "Cafe inside the historic Galle Fort" },
    ],
    durationDays: 1,
    durationLabel: "1 Day",
    themes: ["culture", "wildlife", "beach"],
    groupSize: "1 - 6 travellers",
    difficulty: "easy",
    fromPriceUsd: 75, // price: placeholder
    itinerary: [
      {
        day: 1,
        title: "South Coast Highlights",
        description:
          "Galle Dutch Fort (about 1 hr) — walk the fort walls with your guide. Madu River boat safari (about 1.5 hrs) — a mangrove boat ride with a fish foot massage stop, and wildlife such as crocodiles, monitor lizards and many bird species. Kosgoda Sea Turtle Conservation Project (about 1 hr). Lunch and a walk on Unawatuna Beach (about 1 hr). Galle Fort Lighthouse (about 1 hr) for photos along the ramparts. Koggala stilt fishermen (about 20 min) — try stilt fishing yourself. Japanese Peace Pagoda at Rumassala (about 1 hr). Passing through Galle city, with an optional stop at the Mahamodara sea turtle farm.",
      },
    ],
    included: [
      "Private air-conditioned vehicle",
      "Private transportation with driver",
      "Bottled water on board",
      "WiFi on board",
      "All expressway toll fees",
      "Driver's meals",
      "Galle Dutch Fort entry",
      "Galle Fort Lighthouse entry",
      "All fees and taxes",
    ],
    excluded: [
      "Madu River boat safari ticket",
      "Kosgoda Sea Turtle Conservation Project entry",
      "Sea Turtle Farm (Galle Mahamodara) entry",
      "Lunch and personal expenses at Unawatuna Beach",
      "Gratuities",
    ],
    priceTiers: [
      { groupSize: "1 - 2 travellers", pricePerPersonUsd: 75 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 55 }, // price: placeholder
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 45 }, // price: placeholder
    ],
    mapImage: img("lk-map-southern-daytrip", "Map of the southern sightseeing day trip route"),
    highlights: [
      "Galle Dutch Fort and lighthouse",
      "Madu River mangrove boat safari",
      "Sea turtle hatchery visit",
      "Koggala stilt fishermen",
    ],
    featured: true,
  },
  {
    slug: "8-day-sri-lanka-private-tour",
    title: "8-Day Sri Lanka Tour with Private Driver & Accommodation",
    summary:
      "One loop, every region — ancient cities, hill country, a wildlife safari and the southern beaches, with a private driver throughout.",
    description:
      "Our eight-day round trip covers the most-visited national parks, ancient cities, the hill country and the south coast beaches of Sri Lanka. The route runs through Negombo, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala, Galle and Mirissa, with a private driver-guide and accommodation arranged throughout.",
    images: [
      { src: "/gallery/sigiriya-rock-sunset-viewpoint.jpg", alt: "Sigiriya rock fortress at sunset" },
      { src: "/gallery/dambulla-cave-temple-golden-buddha.jpg", alt: "Golden Buddha statue at the Dambulla cave temple" },
      { src: "/gallery/072-temple-tooth-relic-kandy.jpg", alt: "Temple of the Sacred Tooth Relic in Kandy" },
      { src: "/gallery/050-tea-plantation-hills-rows.jpg", alt: "Rows of tea plantation across the hills near Nuwara Eliya" },
      { src: "/gallery/nine-arches-bridge-ella.jpg", alt: "A blue train crossing the Nine Arches Bridge near Ella" },
      { src: "/gallery/083-leopard-sleeping-tree-branch.jpg", alt: "Leopard resting in a tree at Yala National Park" },
      { src: "/gallery/016-woman-galle-fort-lighthouse.jpg", alt: "Galle Fort lighthouse on the south coast" },
      { src: "/gallery/humpback-whale-tail-mirissa.jpg", alt: "Whale tail breaking the surface off Mirissa" },
      { src: "/gallery/aerial-drone-tangalle-beach.jpg", alt: "Aerial view of a palm-fringed beach on the south coast" },
    ],
    durationDays: 8,
    durationLabel: "8 Days / 7 Nights",
    themes: ["culture", "wildlife", "hill-country", "beach"],
    groupSize: "2 - 8 travellers",
    difficulty: "moderate",
    fromPriceUsd: 720, // price: placeholder
    itinerary: [
      { day: 1, title: "Arrival & Negombo", description: "Airport pick-up and a relaxed first night on the west coast at Negombo.", overnightAt: "Negombo" },
      { day: 2, title: "Negombo to Sigiriya", description: "Drive to the Cultural Triangle. Visit the Dambulla cave temple, then settle in near Sigiriya.", overnightAt: "Sigiriya" },
      { day: 3, title: "Sigiriya & Minneriya", description: "Climb the Sigiriya rock fortress in the morning, then an afternoon jeep safari at Minneriya National Park for wild elephant herds.", overnightAt: "Sigiriya" },
      { day: 4, title: "Sigiriya to Kandy", description: "Travel to Kandy via a spice garden. Visit the Temple of the Sacred Tooth Relic and the lakeside city.", overnightAt: "Kandy" },
      { day: 5, title: "Kandy to Nuwara Eliya", description: "Scenic drive into tea country, stopping at the Peradeniya Botanical Gardens, a working tea factory and Ramboda Falls.", overnightAt: "Nuwara Eliya" },
      { day: 6, title: "Nuwara Eliya to Ella", description: "Continue to Ella. Walk to the Nine Arches Bridge and climb Little Adam's Peak, with a stop at Buduruwagala en route if time allows.", overnightAt: "Ella" },
      { day: 7, title: "Ella to Yala to the South Coast", description: "Morning transfer to Yala for a game drive in search of leopard and elephant, then continue to the south coast beaches.", overnightAt: "Mirissa" },
      { day: 8, title: "Galle & Departure", description: "Explore Galle Fort in the morning, then transfer to the airport for your onward flight.", overnightAt: "Departure" },
    ],
    included: [
      "Private air-conditioned vehicle for the full trip",
      "English-speaking driver-guide throughout",
      "7 nights accommodation",
      "Daily breakfast",
      "Bottled water on board",
    ],
    excluded: [
      "Lunch and dinner",
      "Monument and national park entrance fees (Sigiriya, Dambulla, Minneriya, Temple of the Sacred Tooth Relic, Peradeniya Botanical Gardens, Gregory Lake, Victoria Park, Buduruwagala, Yala, Udawalawe)",
      "Flights and visa charges",
      "Early check-in",
      "Personal expenses such as laundry and tips",
      "Anything not listed under inclusions",
    ],
    priceTiers: [
      { groupSize: "2 travellers", pricePerPersonUsd: 720 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 620 }, // price: placeholder
      { groupSize: "5 - 8 travellers", pricePerPersonUsd: 540 }, // price: placeholder
    ],
    mapImage: img("lk-map-8day", "Map of the 8-day Sri Lanka round trip route"),
    highlights: [
      "Sigiriya, Dambulla and Kandy",
      "Tea country and the Nine Arches Bridge",
      "Yala and Minneriya safaris",
      "Galle Fort and the southern beaches",
    ],
    featured: true,
  },
  {
    slug: "yala-safari-private-day-trip",
    title: "Yala Safari Private Day Trip with Return Transport",
    summary:
      "An all-inclusive private day trip to Sri Lanka's most famous national park, with a 4-hour jeep safari and return transfers.",
    description:
      "Experience the thrill of a Yala National Park safari, Sri Lanka's most renowned wildlife destination. With hotel pick-up and drop-off from selected locations, enjoy a guided 4WD jeep safari in search of leopards, elephants, sloth bears, crocodiles, exotic birds and other wildlife. A perfect private day trip for nature and wildlife lovers, with a choice of morning or afternoon safari.",
    images: [
      { src: "/gallery/guide-guest-yala-national-park-sign.jpg", alt: "Guide and guest at the Yala National Park entrance sign" },
      { src: "/gallery/083-leopard-sleeping-tree-branch.jpg", alt: "Leopard resting on a tree branch in Yala National Park" },
      { src: "/gallery/165-leopard-tree-branch-dangling-legs.jpg", alt: "Leopard draped over a branch in Yala" },
      { src: "/gallery/elephant-crossing-forest-track.jpg", alt: "Wild elephant crossing a track inside Yala" },
      { src: "/gallery/114-couple-safari-jeep-portrait.jpg", alt: "Couple on a 4WD jeep during a Yala safari" },
      { src: "/gallery/woman-photographing-wild-elephant-safari.jpg", alt: "Guest photographing a wild elephant on safari" },
      { src: "/gallery/peacock-feathers-display.jpg", alt: "Peacock displaying its feathers in Yala" },
      { src: "/gallery/sambar-deer-antlers-hillside.jpg", alt: "Sambar deer with antlers on a hillside in the park" },
      { src: "/gallery/couple-safari-truck-roadside-portrait.jpg", alt: "Couple beside the safari jeep before the game drive" },
    ],
    durationDays: 1,
    durationLabel: "1 Day (4-hour safari)",
    themes: ["wildlife"],
    groupSize: "1 - 6 travellers",
    difficulty: "easy",
    fromPriceUsd: 85, // price: placeholder
    itinerary: [
      {
        day: 1,
        title: "Private Yala Jeep Safari",
        description:
          "Hotel pick-up by your driver-guide (morning safari pick-up between 03:30 and 05:30; afternoon safari pick-up between 08:30 and 12:00, depending on your location). Private return transfer to Yala National Park, then an approximately 4-hour private safari in a Japanese 4WD jeep. Yala is renowned for leopards, elephants, sloth bears and a wide variety of birdlife, with expert guiding deep into the park. Return transfer to your hotel after the game drive.",
      },
    ],
    included: [
      "Hotel pick-up and drop-off (from listed pick-up areas)",
      "Private return transportation with an experienced driver-guide",
      "Private safari session in a Japanese 4WD jeep (approx. 4 hours)",
      "Yala National Park entry fees",
      "Bottled water",
    ],
    excluded: ["Gratuities", "Drinks", "Lunch"],
    priceTiers: [
      { groupSize: "1 traveller", pricePerPersonUsd: 85 }, // price: placeholder
      { groupSize: "2 travellers", pricePerPersonUsd: 70 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 55 }, // price: placeholder
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 45 }, // price: placeholder
    ],
    mapImage: img("lk-map-yala-daytrip", "Map of the Yala safari day trip route"),
    highlights: [
      "4-hour private jeep safari",
      "Choice of morning or afternoon safari",
      "All-inclusive: park fees, jeep and transfers",
      "Pick-up from a wide range of south and hill-country towns",
    ],
    featured: true,
  },
];

export const getTourBySlug = (slug: string) => tours.find((t) => t.slug === slug);

export const featuredTours = () => tours.filter((t) => t.featured);

export const relatedTours = (slug: string, count = 3) =>
  tours.filter((t) => t.slug !== slug).slice(0, count);
