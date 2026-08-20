# Sri Lanka Tours with Chamara

A lead-generation website for a private Sri Lanka tour operator. Next.js (App Router) + TypeScript +
Tailwind CSS, built to be fast, accessible, SEO-friendly, and easy to run Google Ads traffic to.

The goal of every page is the same: get a visitor to submit a trip inquiry (or message on WhatsApp).

## Tech stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4**
- **React Hook Form + Zod** for the inquiry form
- **Resend** for transactional email (business notification + guest thank-you)
- **Framer Motion** for the mobile menu animation
- **lucide-react** for icons
- **next/third-parties/google** for GTM + GA4
- No database — all content lives in typed files under `src/data/`

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values, see below
npm run dev
```

Open http://localhost:3000. If port 3000 is taken, Next.js will pick the next free port and print it
in the terminal.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required for | Notes |
|---|---|---|
| `RESEND_API_KEY` | Inquiry form emails | Get one at resend.com. Without it, the form still validates and submits, but the API route returns a friendly error instead of sending email — this is expected in local dev. |
| `RESEND_FROM_EMAIL` | Inquiry form emails | Must be a verified sender/domain on your Resend account. Leave blank in dev to use Resend's shared test sender. |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager | e.g. `GTM-XXXXXXX` |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 | e.g. `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads conversions | e.g. `AW-XXXXXXXXX` |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_INQUIRY` | Conversion tracking | Fired on successful inquiry submit |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_WHATSAPP` | Conversion tracking | Fired on WhatsApp button click |

None of these are required for the site to run and look correct locally — they only gate email
sending and analytics/ads tracking.

## Editing content (no code changes needed)

All editable content lives in `src/data/`:

- **`site-config.ts`** — business name, phone, WhatsApp number, email, address, social links,
  TripAdvisor URL, trust-bar stats, and feature flags. Change this file and it updates everywhere
  (header, footer, forms, structured data, etc).
- **`tours.ts`** — every tour package. See "Adding a new tour package" below.
- **`reviews.ts`** — guest reviews shown in the Reviews carousel. Currently placeholder text —
  replace with real, permissioned guest reviews before launch.
- **`gallery.ts`** — gallery images, categorized for the filter UI.
- **`faq.ts`** — FAQ accordion on the Contact page.
- **`countries.ts`** — the country dropdown list on the inquiry form.

### Adding a new tour package

Open `src/data/tours.ts` and add a new object to the `tours` array, copying the shape of an existing
one. Required fields: `slug` (used in the URL `/tours/[slug]` — must be unique), `title`, `summary`,
`description`, `images`, `durationDays`, `durationLabel`, `themes`, `groupSize`, `difficulty`,
`fromPriceUsd`, `itinerary`, `included`, `excluded`, `priceTiers`, `highlights`. Set `featured: true`
to show it on the homepage and set it as an example option when the site is filtered.

The new tour automatically:
- Appears on `/tours` and respects the duration/theme filters
- Gets its own static page at `/tours/[slug]` (statically generated at build time)
- Appears in the "Interested Tour" dropdown on the inquiry form
- Gets a sitemap entry and `TouristTrip` structured data

### Photos

Placeholder images are served from `picsum.photos` (a free placeholder image service) so the site
looks fully populated out of the box. Before launch, replace these with real photography:

- Put real images in `public/` (e.g. `public/tours/sigiriya-1.jpg`) and reference them as
  `/tours/sigiriya-1.jpg` in the data files, **or**
- Point `src` at your own CDN/host and add that hostname to `images.remotePatterns` in
  `next.config.ts`.

### TripAdvisor reviews

TripAdvisor does not offer a free public API. Two options, and they can run side by side:

1. Manually add real reviews to `src/data/reviews.ts` as you collect them.
2. Generate an embeddable widget at the [TripAdvisor Widget Center](https://www.tripadvisor.com/Widgets/Create),
   paste the embed code into `src/components/reviews/TripAdvisorWidgetSlot.tsx` (marked clearly with
   comments), and set `features.showTripAdvisorWidget: true` in `site-config.ts`.

Toggle either source on/off independently via `features.showManualReviews` /
`features.showTripAdvisorWidget` in `site-config.ts`.

## Project structure

```
src/
  app/                    Pages (App Router), API route, sitemap.ts, robots.ts
  components/
    layout/               Header, Footer, MobileNav, WhatsAppButton, CookieConsent
    sections/             Hero, TrustBar, WhyChamara, FeaturedTours, InquirySection, CtaBand, ...
    tours/                TourCard, TourGallery, ToursExplorer
    gallery/              GalleryExplorer (filters + lightbox)
    reviews/               ReviewsSection, ReviewsCarousel, TripAdvisorWidgetSlot
    forms/                InquiryForm
    ui/                   Button, Card, Accordion, Lightbox, form fields, Skeleton
    seo/                  JsonLd
  data/                   site-config.ts, tours.ts, reviews.ts, gallery.ts, faq.ts, countries.ts
  lib/                    email.ts, validation.ts, rate-limit.ts, schema.ts, tracking.ts, consent.ts, utils.ts
  types/                  Shared TypeScript types
```

## The inquiry form

- Client-side validated with Zod (`src/lib/validation.ts`), shared with the server so validation
  never drifts out of sync.
- Includes a honeypot field (invisible to real users) and a fixed-window in-memory rate limiter
  (`src/lib/rate-limit.ts`, 5 requests/minute/IP) to cut down on spam.
- On submit, POSTs to `POST /api/inquiry`, which sends a formatted HTML email to the business owner
  and an automatic thank-you email to the visitor via Resend.
- Fires a Google Ads conversion event on successful submit (and on WhatsApp button clicks).

## SEO

- Every page sets unique metadata via the Next.js Metadata API (title, description, canonical, OG,
  Twitter card).
- JSON-LD structured data: `TravelAgency` + `LocalBusiness` (site-wide), `TouristTrip` (each tour),
  `Review`/`AggregateRating` (reviews), `FAQPage` (contact page), `BreadcrumbList` (inner pages).
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` / `robots.txt` automatically, including
  every tour page.
- A dynamic Open Graph image is generated at `app/opengraph-image.tsx`.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy. Vercel auto-detects Next.js — no build config needed.
5. Point your domain (`srilankatourswithchamara.com`) at the Vercel project and update
   `site-config.ts`'s `url`/`domain` if it ever changes.

## Scripts

```bash
npm run dev      # start the dev server (Turbopack)
npm run build    # production build
npm run start    # run the production build locally
npm run lint     # ESLint
```
