"use client";

// Thin wrapper around window.gtag (installed by next/third-parties/google's
// <GoogleAnalytics> + the Google Ads tag). Every call is guarded so nothing
// breaks in development when no tracking IDs are configured.

import { siteConfig } from "@/data/site-config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtagEvent(eventName: string, params: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

export function fireInquiryConversion() {
  const { googleAdsId, googleAdsConversionLabelInquiry } = siteConfig.tracking;
  gtagEvent("generate_lead", { form_name: "inquiry_form" });
  if (googleAdsId && googleAdsConversionLabelInquiry) {
    gtagEvent("conversion", {
      send_to: `${googleAdsId}/${googleAdsConversionLabelInquiry}`,
    });
  }
}

export function fireWhatsAppConversion() {
  const { googleAdsId, googleAdsConversionLabelWhatsapp } = siteConfig.tracking;
  gtagEvent("contact", { method: "whatsapp" });
  if (googleAdsId && googleAdsConversionLabelWhatsapp) {
    gtagEvent("conversion", {
      send_to: `${googleAdsId}/${googleAdsConversionLabelWhatsapp}`,
    });
  }
}
