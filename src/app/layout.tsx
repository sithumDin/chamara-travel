import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { siteConfig } from "@/data/site-config";
import { travelAgencySchema, localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { defaultConsentScript } from "@/lib/consent";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.businessName} | Private Sri Lanka Tour Packages`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description:
    "Private driver-guided Sri Lanka tour packages with a licensed local guide. Custom itineraries, safe vehicles, fair pricing and 24/7 support — plan your Sri Lanka round trip today.",
  keywords: [
    "Sri Lanka tour packages",
    "private driver guide Sri Lanka",
    "Sri Lanka round trip",
    "custom Sri Lanka itinerary",
    "Sri Lanka safari tour",
  ],
  authors: [{ name: siteConfig.businessName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | Private Sri Lanka Tour Packages`,
    description:
      "Private driver-guided Sri Lanka tour packages with a licensed local guide. Custom itineraries, safe vehicles, fair pricing and 24/7 support.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Private Sri Lanka Tour Packages`,
    description:
      "Private driver-guided Sri Lanka tour packages with a licensed local guide. Custom itineraries, safe vehicles, fair pricing and 24/7 support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = siteConfig.tracking.gtmId;
  const ga4Id = siteConfig.tracking.ga4Id;

  return (
    <html lang="en" className={jakarta.variable} data-scroll-behavior="smooth">
      <head>
        <JsonLd data={travelAgencySchema()} />
        <JsonLd data={localBusinessSchema()} />
        {/* Google Consent Mode default (denied) — must run before any tag fires */}
        <Script id="consent-default" strategy="beforeInteractive">
          {defaultConsentScript}
        </Script>
        {gtmId ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
      </head>
      <body className="antialiased">
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}

        {children}

        <Footer />
        <WhatsAppButton />
        {siteConfig.features.cookieConsentEnabled ? <CookieConsent /> : null}

        {ga4Id ? <GoogleAnalytics gaId={ga4Id} /> : null}
      </body>
    </html>
  );
}
