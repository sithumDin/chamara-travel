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
    bestSeller: true,
    pickupLocations: [
      "Negombo",
      "Waikkal",
      "Colombo",
      "Mount Lavinia",
      "Anuradhapura",
      "Polonnaruwa",
      "Sigiriya",
      "Habarana",
      "Dambulla",
      "Trincomalee",
      "Kandy",
    ],
    additionalInfo: [
      "Confirmation will be received at the time of booking.",
      "Please be ready at the hotel lobby 15 minutes before the pick-up time.",
      "Please bring a valid passport for entry to the national park.",
      "Please wear comfortable attire suited to a safari.",
      "Travel time may vary from that stated due to traffic and road conditions.",
      "This experience requires good weather. If it's cancelled due to poor weather, you'll be offered a different date or a full refund.",
      "This is a private tour/activity — only your group will participate.",
    ],
    cancellationPolicy:
      "For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
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
    bestSeller: true,
    pickupLocations: ["Colombo", "Negombo"],
    additionalInfo: [
      "Confirmation will be received at the time of booking.",
      "Tour duration includes travel time.",
      "This is a private tour/activity — only your group will participate.",
      "If your pick-up location isn't listed, send us a message and we'll confirm it.",
    ],
    cancellationPolicy:
      "For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
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
    bestSeller: true,
    pickupLocations: ["Bandaranaike International Airport", "Katunayake", "Colombo", "Negombo"],
    additionalInfo: [
      "Confirmation will be received at the time of booking.",
      "This is a private tour/activity — only your group will participate.",
      "Returns to the original departure point at the end of the trip.",
    ],
    accessibility: [
      "Not wheelchair accessible",
      "Pushchair accessible",
      "Near public transportation",
      "Infants must sit on laps",
      "Infant seats available",
      "Not recommended for travellers with serious heart or medical conditions",
      "Travellers should have a moderate level of physical fitness",
    ],
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
    bestSeller: true,
    pickupLocations: [
      "Colombo",
      "Mount Lavinia",
      "Katunayake",
      "Negombo",
      "Waikkal",
      "Galle",
      "Unawatuna",
      "Talpe",
      "Koggala",
      "Habaraduwa",
      "Ahangama",
      "Midigama",
      "Weligama",
      "Mirissa",
      "Matara",
      "Dikwella",
      "Hiriketiya",
      "Tangalle",
      "Ranna",
      "Hambantota",
      "Udawalawe",
      "Ella",
      "Wellawaya",
      "Arugam Bay",
      "Yala",
      "Kirinda",
      "Tissamaharama",
      "Weerawila",
      "Kataragama",
    ],
    additionalInfo: [
      "Confirmation will be received at the time of booking.",
      "Choose a morning safari (pick-up between 3:30 AM and 5:30 AM) or an afternoon safari (pick-up between 8:30 AM and 12:00 PM).",
      "This is a private tour with private transportation.",
      "This is an all-inclusive package covering entrance fees, activity charges, transportation and taxes for the activities listed.",
      "This experience requires good weather. If it's cancelled due to poor weather, you'll be offered a different date or a full refund.",
      "This is a private tour/activity — only your group will participate.",
    ],
    accessibility: [
      "Infant seats available",
      "Not recommended for pregnant travellers",
      "Not wheelchair accessible",
      "Most travellers can participate",
    ],
    cancellationPolicy:
      "For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
  },
  {
    slug: "sigiriya-dambulla-cultural-triangle-day-tour",
    title: "Sigiriya & Dambulla Cultural Triangle Day Tour",
    summary:
      "Climb the 5th-century Sigiriya rock fortress and explore the golden Dambulla cave temple in a single, unforgettable day.",
    description:
      "A full-day tour through the heart of Sri Lanka's Cultural Triangle. Climb Sigiriya, the ancient rock fortress rising 200 metres above the jungle, and see its famous frescoes and mirror wall along the way. In the afternoon, visit the Dambulla Cave Temple, a UNESCO World Heritage Site with over 150 Buddha statues and 2,000-year-old painted ceilings.",
    images: [
      { src: "/gallery/sigiriya-rock-sunset-viewpoint.jpg", alt: "Sigiriya rock fortress rising above the jungle at sunset" },
      { src: "/gallery/005-couple-sigiriya-rock-fortress.jpg", alt: "Couple climbing the Sigiriya rock fortress" },
      { src: "/gallery/woman-sigiriya-lion-staircase-view.jpg", alt: "Traveller at the Lion's Gate staircase on Sigiriya" },
      { src: "/gallery/073-couple-sigiriya-rock-fortress-view.jpg", alt: "View from partway up the Sigiriya rock fortress" },
      { src: "/gallery/043-toque-macaque-monkey-rock.jpg", alt: "Toque macaque monkey on the rock at Sigiriya" },
      { src: "/gallery/dambulla-cave-temple-golden-buddha.jpg", alt: "Golden Buddha statue at the Dambulla cave temple" },
      { src: "/gallery/dambulla-cave-temple-interior.jpg", alt: "Painted ceiling inside the Dambulla cave temple" },
      { src: "/gallery/dambulla-cave-temple-seated-buddhas-row.jpg", alt: "Row of seated Buddha statues at Dambulla" },
      { src: "/gallery/044-men-ancient-buddha-rock-carvings.jpg", alt: "Ancient Buddha rock carvings in the Cultural Triangle" },
    ],
    durationDays: 1,
    durationLabel: "1 Day",
    themes: ["culture"],
    groupSize: "1 - 6 travellers",
    difficulty: "moderate",
    fromPriceUsd: 70, // price: placeholder
    itinerary: [
      {
        day: 1,
        title: "Sigiriya & Dambulla",
        description:
          "Early hotel pick-up and drive to Sigiriya. Climb the rock fortress via the Lion's Gate and ancient frescoes to the summit for panoramic views of the surrounding jungle and reservoirs. After lunch, continue to the Dambulla Cave Temple to see five caves containing over 150 Buddha statues and painted ceilings dating back over 2,000 years. Return transfer to your hotel in the evening.",
      },
    ],
    included: [
      "Hotel pick-up and drop-off",
      "Private air-conditioned vehicle",
      "English-speaking driver-guide",
      "Bottled water",
      "All government taxes",
    ],
    excluded: [
      "Sigiriya rock fortress entrance fee",
      "Dambulla cave temple entrance fee",
      "Lunch",
      "Gratuities",
    ],
    priceTiers: [
      { groupSize: "1 traveller", pricePerPersonUsd: 70 }, // price: placeholder
      { groupSize: "2 travellers", pricePerPersonUsd: 55 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 45 }, // price: placeholder
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 38 }, // price: placeholder
    ],
    mapImage: img("lk-map-sigiriya-dambulla", "Map of the Sigiriya and Dambulla day tour route"),
    highlights: [
      "Climb the 5th-century Sigiriya rock fortress",
      "See the famous Sigiriya frescoes and mirror wall",
      "UNESCO-listed Dambulla cave temple",
      "Over 150 ancient Buddha statues",
    ],
    featured: true,
  },
  {
    slug: "kandy-cultural-day-tour",
    title: "Kandy Cultural Day Tour",
    summary:
      "The Temple of the Sacred Tooth Relic, the Royal Botanical Gardens and the hill capital of the last Sri Lankan kings.",
    description:
      "A full-day tour of Kandy, Sri Lanka's last royal capital and a UNESCO World Heritage city. Visit a spice garden en route, tour the Temple of the Sacred Tooth Relic, and stroll the Royal Botanical Gardens at Peradeniya, home to one of Asia's finest orchid collections and a giant Javan fig tree. Round off the day beside Kandy Lake in the shadow of the hills.",
    images: [
      { src: "/gallery/072-temple-tooth-relic-kandy.jpg", alt: "Temple of the Sacred Tooth Relic in Kandy" },
      { src: "/gallery/temple-tooth-relic-golden-buddha-shrine.jpg", alt: "Golden Buddha shrine inside the Temple of the Sacred Tooth Relic" },
      { src: "/gallery/046-friends-temple-flower-offering-kandy.jpg", alt: "Friends making a flower offering at a Kandy temple" },
      { src: "/gallery/136-couple-lotus-flower-offering-temple-stall.jpg", alt: "Couple buying lotus flowers for a temple offering" },
      { src: "/gallery/041-botanical-garden-lawn-palm-tree.jpg", alt: "Lawn and palm trees at the Peradeniya Botanical Gardens" },
      { src: "/gallery/056-botanical-garden-palm-tree-avenue.jpg", alt: "Palm tree avenue in the Royal Botanical Gardens" },
      { src: "/gallery/170-palm-tree-botanical-garden-lawn.jpg", alt: "Palm tree on the lawn at the botanical gardens" },
    ],
    durationDays: 1,
    durationLabel: "1 Day",
    themes: ["culture"],
    groupSize: "1 - 6 travellers",
    difficulty: "easy",
    fromPriceUsd: 65, // price: placeholder
    itinerary: [
      {
        day: 1,
        title: "Kandy Highlights",
        description:
          "Hotel pick-up and drive towards Kandy, stopping at a spice garden to learn about Sri Lanka's spice trade. Visit the Temple of the Sacred Tooth Relic, one of Buddhism's most sacred sites, then continue to the Royal Botanical Gardens at Peradeniya. Time permitting, walk along Kandy Lake before the return transfer to your hotel.",
      },
    ],
    included: [
      "Hotel pick-up and drop-off",
      "Private air-conditioned vehicle",
      "English-speaking driver-guide",
      "Spice garden visit",
      "Bottled water",
    ],
    excluded: [
      "Temple of the Sacred Tooth Relic entrance fee",
      "Royal Botanical Gardens entrance fee",
      "Lunch",
      "Gratuities",
    ],
    priceTiers: [
      { groupSize: "1 traveller", pricePerPersonUsd: 65 }, // price: placeholder
      { groupSize: "2 travellers", pricePerPersonUsd: 50 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 42 }, // price: placeholder
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 35 }, // price: placeholder
    ],
    mapImage: img("lk-map-kandy", "Map of the Kandy cultural day tour route"),
    highlights: [
      "Temple of the Sacred Tooth Relic",
      "Royal Botanical Gardens, Peradeniya",
      "Local spice garden visit",
      "Kandy Lake and the last royal capital",
    ],
    featured: true,
  },
  {
    slug: "ella-nuwara-eliya-hill-country-tour",
    title: "Ella & Nuwara Eliya Hill Country Tour",
    summary:
      "Two days in tea country — waterfalls, a working tea factory, the Nine Arches Bridge and Little Adam's Peak.",
    description:
      "A two-day loop through Sri Lanka's hill country. Explore Nuwara Eliya, the cool 'Little England' of tea estates and colonial architecture, with stops at a working tea factory and Ramboda Falls. Continue to Ella for its laid-back village charm, the iconic Nine Arches Bridge, and a walk up Little Adam's Peak for sweeping valley views.",
    images: [
      { src: "/gallery/050-tea-plantation-hills-rows.jpg", alt: "Rows of tea plantation across the hills near Nuwara Eliya" },
      { src: "/gallery/misty-tea-plantation-hillside.jpg", alt: "Misty tea plantation hillside in the hill country" },
      { src: "/gallery/edinburgh-tea-estate-misty-hillside.jpg", alt: "Edinburgh tea estate on a misty hillside" },
      { src: "/gallery/089-couple-labookellie-tea-plantation-view.jpg", alt: "Couple overlooking the Labookellie tea plantation" },
      { src: "/gallery/couple-ambewela-train-station-fog.jpg", alt: "Couple at the foggy Ambewela train station" },
      { src: "/gallery/nine-arches-bridge-ella.jpg", alt: "A blue train crossing the Nine Arches Bridge near Ella" },
      { src: "/gallery/woman-nine-arches-bridge-portrait.jpg", alt: "Traveller at the Nine Arches Bridge in Ella" },
      { src: "/gallery/ella-train-station-foggy-morning.jpg", alt: "Ella train station on a foggy morning" },
      { src: "/gallery/hill-country-wooden-benches-viewpoint.jpg", alt: "Wooden benches at a hill country viewpoint" },
    ],
    durationDays: 2,
    durationLabel: "2 Days / 1 Night",
    themes: ["hill-country"],
    groupSize: "2 - 6 travellers",
    difficulty: "moderate",
    fromPriceUsd: 180, // price: placeholder
    itinerary: [
      {
        day: 1,
        title: "Kandy to Nuwara Eliya",
        description:
          "Scenic drive into tea country, stopping at Ramboda Falls and a working tea factory for a tour and tasting. Explore Nuwara Eliya's colonial-era town centre, Gregory Lake and Victoria Park before checking in for the night.",
        overnightAt: "Nuwara Eliya",
      },
      {
        day: 2,
        title: "Nuwara Eliya to Ella",
        description:
          "Continue to Ella, stopping at viewpoints along the way. Walk to the Nine Arches Bridge and climb Little Adam's Peak for panoramic hill-country views before your return transfer.",
      },
    ],
    included: [
      "Private air-conditioned vehicle",
      "English-speaking driver-guide throughout",
      "1 night accommodation",
      "Daily breakfast",
      "Bottled water on board",
    ],
    excluded: [
      "Lunch and dinner",
      "Tea factory tour ticket",
      "Gregory Lake and Victoria Park entrance fees",
      "Personal expenses",
      "Gratuities",
    ],
    priceTiers: [
      { groupSize: "2 travellers", pricePerPersonUsd: 180 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 150 }, // price: placeholder
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 130 }, // price: placeholder
    ],
    mapImage: img("lk-map-ella-nuwaraeliya", "Map of the Ella and Nuwara Eliya hill country tour route"),
    highlights: [
      "Working tea factory tour and tasting",
      "Ramboda Falls",
      "Nine Arches Bridge, Ella",
      "Little Adam's Peak hike",
    ],
    featured: true,
  },
  {
    slug: "down-south-whale-watching-tour",
    title: "Down South & Whale Watching Tour",
    summary:
      "The south coast at its best — golden beaches, stilt fishermen and an early-morning boat trip off Mirissa in search of blue whales and dolphins.",
    description:
      "Mirissa is one of the best places in the world to see blue whales and sperm whales in the wild, and the south coast around it is lined with some of Sri Lanka's finest beaches. Head out at sunrise on a licensed whale-watching boat for a 3 - 4 hour cruise along the continental shelf, with a real chance of spotting whales, dolphins and flying fish, then spend the rest of the day down south among palm-fringed bays and traditional stilt fishermen. Whale watching is best from November to April.",
    images: [
      { src: "/gallery/humpback-whale-tail-mirissa.jpg", alt: "Whale tail breaking the surface off Mirissa" },
      { src: "/gallery/parrot-rock-island-sunset-mirissa.jpg", alt: "Parrot Rock island at sunset in Mirissa" },
      { src: "/gallery/diving-boat-ocean-sunset-silhouette.jpg", alt: "Whale-watching boat silhouetted at sunset" },
      { src: "/gallery/golden-beach-sunset-cruise-ship.jpg", alt: "Golden sunset over the ocean off the south coast" },
      { src: "/gallery/aerial-drone-tangalle-beach.jpg", alt: "Aerial view of the south coast near Mirissa" },
      { src: "/gallery/golden-sand-beach-rocky-shoreline.jpg", alt: "Golden sand beach along a rocky shoreline down south" },
      { src: "/gallery/palm-fringed-turquoise-bay-coast.jpg", alt: "Palm-fringed turquoise bay on the south coast" },
      { src: "/gallery/163-family-stilt-fisherman-rough-surf.jpg", alt: "Family beside a traditional stilt fisherman in the surf" },
      { src: "/gallery/020-family-stilt-fishing-posts-beach.jpg", alt: "Family by the stilt fishing posts on the beach" },
      { src: "/gallery/surfers-sunset-ocean-silhouette.jpg", alt: "Surfers silhouetted against the sunset down south" },
    ],
    durationDays: 1,
    durationLabel: "Half Day (approx. 4 hours)",
    themes: ["beach", "wildlife"],
    groupSize: "1 - 6 travellers",
    difficulty: "easy",
    fromPriceUsd: 55, // price: placeholder
    itinerary: [
      {
        day: 1,
        title: "Mirissa Whale Watching Cruise",
        description:
          "Early hotel pick-up (around 05:30) and transfer to Mirissa harbour. Board a licensed whale-watching boat departing around 06:30 for a 3 - 4 hour cruise along the continental shelf, with an experienced crew tracking blue whales, sperm whales, and pods of spinner dolphins. Return transfer to your hotel afterwards.",
      },
    ],
    included: [
      "Hotel pick-up and drop-off",
      "Whale-watching boat ticket",
      "Life jackets and safety briefing",
      "Light refreshments on board",
    ],
    excluded: ["Lunch", "Gratuities"],
    priceTiers: [
      { groupSize: "1 traveller", pricePerPersonUsd: 55 }, // price: placeholder
      { groupSize: "2 travellers", pricePerPersonUsd: 50 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 45 }, // price: placeholder
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 40 }, // price: placeholder
    ],
    mapImage: img("lk-map-down-south-whales", "Map of the down south and Mirissa whale watching route"),
    highlights: [
      "Real chance of blue and sperm whale sightings",
      "Spinner dolphin pods",
      "Golden south coast beaches",
      "Traditional stilt fishermen",
    ],
    featured: true,
  },
  {
    slug: "minneriya-national-park-elephant-safari",
    title: "Minneriya National Park Elephant Safari",
    summary:
      "A jeep safari at Minneriya National Park, famous for 'The Gathering' — one of Asia's largest wild elephant herds.",
    description:
      "Minneriya National Park is best known for 'The Gathering', when hundreds of wild elephants converge on the Minneriya reservoir during the dry season (typically August to October) — one of the great wildlife spectacles in Asia. Even outside peak season, resident herds, deer, water buffalo and abundant birdlife make for a rewarding jeep safari.",
    images: [
      { src: "/gallery/elephant-crossing-forest-track.jpg", alt: "Wild elephant crossing a forest track" },
      { src: "/gallery/144-elephant-herd-river-bathing.jpg", alt: "Elephant herd bathing in the river at Minneriya" },
      { src: "/gallery/men-bathing-elephants-river.jpg", alt: "Elephants bathing in the river near the park" },
      { src: "/gallery/woman-photographing-wild-elephant-safari.jpg", alt: "Traveller photographing a wild elephant on safari" },
      { src: "/gallery/079-family-elephant-under-tree.jpg", alt: "Family watching an elephant under a tree" },
      { src: "/gallery/085-family-elephant-lakeside-tree.jpg", alt: "Elephant beside the lake at Minneriya National Park" },
    ],
    durationDays: 1,
    durationLabel: "Half Day (approx. 3 - 4 hours)",
    themes: ["wildlife"],
    groupSize: "1 - 6 travellers",
    difficulty: "easy",
    fromPriceUsd: 75, // price: placeholder
    itinerary: [
      {
        day: 1,
        title: "Minneriya Jeep Safari",
        description:
          "Hotel pick-up (morning or afternoon safari available) and transfer to Minneriya National Park. Board a 4WD jeep for a 3 - 4 hour game drive around the Minneriya reservoir, home to large wild elephant herds, sambar deer, water buffalo and a wide variety of birdlife. Return transfer to your hotel after the safari.",
      },
    ],
    included: [
      "Hotel pick-up and drop-off",
      "Safari jeep hire",
      "Minneriya National Park entrance fees",
      "Bottled water",
    ],
    excluded: ["Gratuities", "Lunch"],
    priceTiers: [
      { groupSize: "1 traveller", pricePerPersonUsd: 75 }, // price: placeholder
      { groupSize: "2 travellers", pricePerPersonUsd: 60 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 48 }, // price: placeholder
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 40 }, // price: placeholder
    ],
    mapImage: img("lk-map-minneriya", "Map of the Minneriya National Park safari route"),
    highlights: [
      "\"The Gathering\" — one of Asia's largest wild elephant herds (Aug - Oct)",
      "4WD jeep safari with an experienced tracker",
      "Sambar deer, water buffalo and rich birdlife",
      "Morning or afternoon safari available",
    ],
    featured: true,
  },
  {
    slug: "sigiriya-dambulla-minneriya-safari-day-tour",
    title: "Sigiriya, Dambulla & Minneriya Safari Day Tour",
    summary:
      "Climb Sigiriya, explore the Dambulla cave temple and finish with a Minneriya elephant safari — all in one private day.",
    description:
      "Sigiriya is a UNESCO-listed World Heritage Site and one of the best-preserved examples of ancient urban planning — hard to cover in a day without private transport. This private tour includes a personal vehicle and an English-speaking driver to share stories and history along the way, taking in the Sigiriya rock fortress, the Dambulla cave temple, and a Minneriya National Park safari in search of the largest known wild Asian elephant gathering in the world.",
    images: [
      { src: "/gallery/sigiriya-rock-sunset-viewpoint.jpg", alt: "Sigiriya rock fortress rising above the jungle at sunset" },
      { src: "/gallery/037-man-sigiriya-rock-viewpoint.jpg", alt: "Traveller at the Sigiriya rock viewpoint" },
      { src: "/gallery/080-group-sigiriya-rock-fortress-lawn.jpg", alt: "Group on the lawn at the base of Sigiriya rock fortress" },
      { src: "/gallery/dambulla-cave-temple-golden-buddha.jpg", alt: "Golden Buddha statue at the Dambulla cave temple" },
      { src: "/gallery/dambulla-cave-temple-seated-buddhas-row.jpg", alt: "Row of seated Buddha statues at Dambulla" },
      { src: "/gallery/144-elephant-herd-river-bathing.jpg", alt: "Elephants gathering at the Minneriya reservoir" },
      { src: "/gallery/woman-photographing-wild-elephant-safari.jpg", alt: "Traveller photographing a wild elephant on safari" },
    ],
    durationDays: 1,
    durationLabel: "1 Day",
    themes: ["culture", "wildlife"],
    groupSize: "1 - 6 travellers",
    difficulty: "moderate",
    fromPriceUsd: 95, // price: placeholder
    itinerary: [
      {
        day: 1,
        title: "Sigiriya, Dambulla & Minneriya",
        description:
          "Hotel pick-up and transfer to Sigiriya, the nearly 200-metre ancient rock fortress in the Central Province (approx. 2 hours at the site). Continue to the Dambulla Cave Temple, the largest and best-preserved cave temple complex in Sri Lanka (approx. 1 hour). Finish with a Minneriya National Park safari, famed for hosting the largest known wild Asian elephant gathering in the world (approx. 2 hours), before the return transfer to your hotel.",
      },
    ],
    included: [
      "English-speaking driver",
      "Hotel pick-up and drop-off",
      "Transport by private vehicle",
      "Bottled water",
    ],
    excluded: [
      "Lunch, food and drinks",
      "Safari jeep cost",
      "Sigiriya Lion Rock entrance fee",
      "Dambulla Cave Temple entrance fee",
      "Minneriya National Park safari entrance fee",
    ],
    priceTiers: [
      { groupSize: "1 traveller", pricePerPersonUsd: 95 }, // price: placeholder
      { groupSize: "2 travellers", pricePerPersonUsd: 75 }, // price: placeholder
      { groupSize: "3 - 4 travellers", pricePerPersonUsd: 60 }, // price: placeholder
      { groupSize: "5 - 6 travellers", pricePerPersonUsd: 50 }, // price: placeholder
    ],
    mapImage: img("lk-map-sigiriya-dambulla-minneriya", "Map of the Sigiriya, Dambulla and Minneriya day tour route"),
    highlights: [
      "Climb the Sigiriya rock fortress",
      "UNESCO-listed Dambulla cave temple",
      "Minneriya safari — the world's largest wild elephant gathering",
      "Private vehicle with an English-speaking driver",
    ],
    featured: false,
    pickupLocations: ["Colombo", "Negombo", "Kandy"],
    additionalInfo: [
      "Confirmation will be received at the time of booking.",
      "If your hotel isn't listed, send us your details and we'll confirm your pick-up.",
      "Drop-off at your hotel or the airport.",
      "Wheelchair not accessible.",
      "Child rate applies only when sharing with 2 paying adults; children must be accompanied by an adult.",
      "Dress code is formal for temple visits.",
      "A current, valid passport is required on the day of travel.",
      "This experience requires good weather. If it's cancelled due to poor weather, you'll be offered a different date or a full refund.",
      "This experience requires a minimum number of travellers. If cancelled because the minimum isn't met, you'll be offered a different date/experience or a full refund.",
      "This is a private tour/activity — only your group will participate.",
    ],
    cancellationPolicy:
      "For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
  },
];

export const getTourBySlug = (slug: string) => tours.find((t) => t.slug === slug);

export const featuredTours = () => tours.filter((t) => t.featured);

export const relatedTours = (slug: string, count = 3) =>
  tours.filter((t) => t.slug !== slug).slice(0, count);
