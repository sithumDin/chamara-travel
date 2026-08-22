// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for all business details.
// Edit the values in this file to update contact info, socials, and tracking
// IDs across the entire site — nothing below should be hardcoded elsewhere.
//
// PLACEHOLDER VALUES: everything marked "REPLACE ME" is placeholder content
// for the initial build. Swap in the real business details before launch.
// ---------------------------------------------------------------------------

export const siteConfig = {
  businessName: "Sri Lanka Tours with Chamara",
  shortName: "Chamara Tours",
  tagline: "Your private driver-guide across Sri Lanka",
  domain: "srilankatourswithchamara.com",
  url: "https://srilankatourswithchamara.com",

  phone: "+94 76 629 1918",
  phoneHref: "tel:+94766291918",
  whatsappNumber: "+94766291918", // digits only after "+" for wa.me links
  email: "Upulchamara.328@gmail.com",

  address: {
    line1: "Unawatuna",
    city: "Galle District, Southern Province",
    country: "Sri Lanka",
  },

  // REPLACE ME — social links (not yet provided)
  social: {
    facebook: "https://facebook.com/srilankatourswithchamara",
    instagram: "https://instagram.com/srilankatourswithchamara",
    youtube: "https://youtube.com/@srilankatourswithchamara",
  },

  tripAdvisor: {
    url: "https://www.tripadvisor.co.uk/Attraction_Review-g644047-d12338515-Reviews-Sri_Lanka_Tours_With_Chamara-Unawatuna_Galle_District_Southern_Province.html",
    rating: 5,
    reviewCount: 172,
  },

  trustStats: [
    { label: "Years of Experience", value: "10+", description: "Guiding travellers across Sri Lanka since 2015." },
    { label: "Tours Completed", value: "500+", description: "Private tours delivered end to end, big and small." },
    { label: "Countries Served", value: "30+", description: "Guests welcomed from every corner of the world." },
    { label: "TripAdvisor Rating", value: "5.0", description: "Rated 5.0 from 172 verified reviews — #1 of 47 Transportation providers in Unawatuna." },
  ],

  responseTimePromise: "We reply to every inquiry within 24 hours.",

  // Core services offered, shown in the homepage Services section
  services: [
    { title: "Airport Transfers", description: "Direct pick-up and drop-off between the airport and your hotel, anywhere on the island." },
    { title: "Hotel Transfers", description: "Comfortable transfers between hotels as you move around Sri Lanka." },
    { title: "Day Tours", description: "Single-day trips to nearby sights, temples, and attractions." },
    { title: "Round Tours", description: "Multi-day private itineraries covering the island's highlights." },
    { title: "Safari Tours", description: "Guided jeep safaris through Sri Lanka's national parks." },
    { title: "Whale Watching Tours", description: "Boat trips from the south coast to spot blue and sperm whales in season." },
    { title: "City Tours", description: "Guided tours through Colombo, Kandy, Galle and other cities." },
    { title: "Custom Tours", description: "A fully bespoke itinerary built around your interests, pace and travel dates." },
  ],

  // Feature flags — toggle sections on/off without touching component code
  features: {
    showTripAdvisorWidget: true,
    showManualReviews: true,
    cookieConsentEnabled: true,
  },

  // Tracking IDs are read from env vars at runtime — see .env.example.
  // Nothing here is a secret; these are safe to leave blank in dev.
  tracking: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabelInquiry: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_INQUIRY ?? "",
    googleAdsConversionLabelWhatsapp: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP ?? "",
  },
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^\d]/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tour Packages" },
  { href: "/about-sri-lanka", label: "About Sri Lanka" },
  { href: "/my-experience", label: "My Experience" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;
