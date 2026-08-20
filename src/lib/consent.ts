export const CONSENT_STORAGE_KEY = "chamara-cookie-consent";

// Inline script text injected before any analytics tag loads, so Google
// Consent Mode starts in the "denied" state until the visitor accepts the
// cookie banner. See CookieConsent.tsx for the accept/decline handlers.
export const defaultConsentScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
`;

export function applyStoredConsent() {
  if (typeof window === "undefined") return;
  const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (stored === "granted") updateConsent(true);
}

export function updateConsent(granted: boolean) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
  });
}
