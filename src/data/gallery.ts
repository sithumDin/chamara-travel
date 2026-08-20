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
];

export const galleryCategories: { value: GalleryImage["category"] | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "beaches", label: "Beaches" },
  { value: "wildlife", label: "Wildlife" },
  { value: "culture", label: "Culture" },
  { value: "hill-country", label: "Hill Country" },
  { value: "guests", label: "Guests" },
];
