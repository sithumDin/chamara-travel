// ---------------------------------------------------------------------------
// GALLERY IMAGES — placeholder photography sourced from picsum.photos.
// Replace `src` with real photos (drop files in /public/gallery/ and point
// `src` at "/gallery/filename.jpg") and update `alt` text to describe the
// actual photo for accessibility and SEO.
// ---------------------------------------------------------------------------

import type { GalleryImage } from "@/types";

const photo = (
  id: string,
  category: GalleryImage["category"],
  alt: string,
  seed: string,
  width = 1200,
  height = 900
): GalleryImage => ({
  id,
  category,
  alt,
  width,
  height,
  src: `https://picsum.photos/seed/${seed}/${width}/${height}`,
});

export const galleryImages: GalleryImage[] = [
  photo("g-beach-1", "beaches", "Palm trees leaning over a golden beach in the south", "gal-beach-1", 1200, 1500),
  photo("g-beach-2", "beaches", "Turquoise waves along the south coast of Sri Lanka", "gal-beach-2"),
  photo("g-beach-3", "beaches", "Fishing boats resting on the sand at sunrise", "gal-beach-3", 1200, 900),
  photo("g-beach-4", "beaches", "Stilt fishermen at Weligama", "gal-beach-4", 1200, 1500),
  photo("g-wildlife-1", "wildlife", "Leopard resting on a rock in Yala National Park", "gal-wild-1"),
  photo("g-wildlife-2", "wildlife", "Elephant herd crossing a track in Minneriya", "gal-wild-2", 1200, 1500),
  photo("g-wildlife-3", "wildlife", "Peacock displaying its feathers", "gal-wild-3"),
  photo("g-wildlife-4", "wildlife", "Crocodile resting at the edge of a lake", "gal-wild-4", 1200, 900),
  photo("g-culture-1", "culture", "Sigiriya rock fortress rising above the jungle canopy", "gal-culture-1", 1200, 1500),
  photo("g-culture-2", "culture", "Golden Buddha statue at Dambulla cave temple", "gal-culture-2"),
  photo("g-culture-3", "culture", "Traditional Kandyan dancers in costume", "gal-culture-3", 1200, 1500),
  photo("g-culture-4", "culture", "Ancient ruins of Polonnaruwa at golden hour", "gal-culture-4"),
  photo("g-hills-1", "hill-country", "Tea plantation rows in the misty highlands", "gal-hills-1", 1200, 1500),
  {
    id: "g-hills-2",
    category: "hill-country",
    alt: "A blue train crossing the Nine Arches Bridge through the forest near Ella",
    width: 1600,
    height: 1000,
    src: "/gallery/nine-arches-bridge-ella.jpg",
  },
  photo("g-hills-3", "hill-country", "Waterfall cascading through the central highlands", "gal-hills-3", 1200, 1500),
  photo("g-hills-4", "hill-country", "Sunrise view from Little Adam's Peak", "gal-hills-4"),
  photo("g-guests-1", "guests", "Guests posing at Sigiriya rock fortress", "gal-guests-1", 1200, 900),
  photo("g-guests-2", "guests", "Family enjoying a boat safari together", "gal-guests-2", 1200, 1500),
  photo("g-guests-3", "guests", "Couple watching the sunset on the beach", "gal-guests-3"),
  photo("g-guests-4", "guests", "Guests with Chamara beside the tour vehicle", "gal-guests-4", 1200, 900),

  photo("g-beach-5", "beaches", "Mirissa beach panorama at sunset", "gal-beach-5", 1200, 900),
  photo("g-beach-6", "beaches", "Surfers catching a wave off the south coast", "gal-beach-6", 1200, 1500),
  photo("g-beach-7", "beaches", "Catamaran fishing boats lined up on the shore", "gal-beach-7", 1200, 900),
  photo("g-beach-8", "beaches", "Coconut palm grove framing the ocean", "gal-beach-8", 1200, 1500),
  photo("g-beach-9", "beaches", "Snorkeling over a coral reef off the coast", "gal-beach-9", 1200, 900),
  photo("g-beach-10", "beaches", "Galle Fort lighthouse overlooking the coastline", "gal-beach-10", 1200, 1500),

  photo("g-wildlife-5", "wildlife", "Sri Lankan elephant bathing in a river", "gal-wild-5", 1200, 900),
  photo("g-wildlife-6", "wildlife", "Toque macaque monkey in the rainforest canopy", "gal-wild-6", 1200, 1500),
  photo("g-wildlife-7", "wildlife", "Blue whale surfacing off Mirissa", "gal-wild-7", 1200, 900),
  photo("g-wildlife-8", "wildlife", "Spotted deer grazing in Wilpattu National Park", "gal-wild-8", 1200, 1500),
  photo("g-wildlife-9", "wildlife", "Hornbill perched on a branch in the jungle", "gal-wild-9", 1200, 900),
  photo("g-wildlife-10", "wildlife", "Sea turtle swimming near a coral reef", "gal-wild-10", 1200, 1500),

  photo("g-culture-5", "culture", "Temple of the Tooth in Kandy at dusk", "gal-culture-5", 1200, 900),
  photo("g-culture-6", "culture", "Batik artisan at work on traditional fabric", "gal-culture-6", 1200, 1500),
  photo("g-culture-7", "culture", "Colorful market stalls in Colombo", "gal-culture-7", 1200, 900),
  photo("g-culture-8", "culture", "Buddhist monks walking near a stupa", "gal-culture-8", 1200, 1500),
  photo("g-culture-9", "culture", "Traditional mask carving workshop", "gal-culture-9", 1200, 900),
  photo("g-culture-10", "culture", "Galle Fort ramparts at sunset", "gal-culture-10", 1200, 1500),

  photo("g-hills-5", "hill-country", "Tea pluckers working the highland slopes", "gal-hills-5", 1200, 900),
  photo("g-hills-6", "hill-country", "World's End viewpoint at Horton Plains", "gal-hills-6", 1200, 1500),
  photo("g-hills-7", "hill-country", "Colonial architecture in Nuwara Eliya", "gal-hills-7", 1200, 900),
  photo("g-hills-8", "hill-country", "Misty mountain road through the highlands", "gal-hills-8", 1200, 1500),
  photo("g-hills-9", "hill-country", "Ravana Falls cascading down the rocks", "gal-hills-9", 1200, 900),
  photo("g-hills-10", "hill-country", "Strawberry fields in the hill country", "gal-hills-10", 1200, 1500),

  photo("g-guests-5", "guests", "Guests trekking through tea plantations", "gal-guests-5", 1200, 900),
  photo("g-guests-6", "guests", "Family posing at a waterfall", "gal-guests-6", 1200, 1500),
  photo("g-guests-7", "guests", "Guests enjoying a jeep safari ride", "gal-guests-7", 1200, 900),
  photo("g-guests-8", "guests", "Couple exploring ancient ruins together", "gal-guests-8", 1200, 1500),
  photo("g-guests-9", "guests", "Guests sampling local Sri Lankan street food", "gal-guests-9", 1200, 900),
  photo("g-guests-10", "guests", "Group photo with driver-guide beside the tour vehicle", "gal-guests-10", 1200, 1500),
];

export const galleryCategories: { value: GalleryImage["category"] | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "beaches", label: "Beaches" },
  { value: "wildlife", label: "Wildlife" },
  { value: "culture", label: "Culture" },
  { value: "hill-country", label: "Hill Country" },
  { value: "guests", label: "Guests" },
];
