"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONSENT_STORAGE_KEY, updateConsent } from "@/lib/consent";
import { Button } from "@/components/ui/Button";

// Other fixed-position UI (the WhatsApp button) reads this to lift itself
// clear of the banner instead of being covered by it — see its bottom-*
// classes. Cleared on dismiss/unmount so those elements drop back down.
const BANNER_HEIGHT_VAR = "--cookie-banner-h";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal the banner only after checking localStorage on mount — this
    // browser-only read can't happen during server rendering, so the
    // set-state-in-effect pattern is intentional here, not incidental.
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!stored) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.documentElement.style.removeProperty(BANNER_HEIGHT_VAR);
      return;
    }
    function syncHeight() {
      const height = bannerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty(BANNER_HEIGHT_VAR, `${height}px`);
    }
    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => {
      window.removeEventListener("resize", syncHeight);
      document.documentElement.style.removeProperty(BANNER_HEIGHT_VAR);
    };
  }, [visible]);

  function handleChoice(granted: boolean) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, granted ? "granted" : "denied");
    updateConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[80] mx-auto max-w-[105rem] border-t border-border bg-paper/98 px-5 py-5 backdrop-blur sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft">
          We use cookies to understand site traffic and improve your experience. Read our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          to learn more.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="text-sm font-medium text-muted hover:text-ink"
          >
            Decline
          </button>
          <Button variant="primary" size="md" onClick={() => handleChoice(true)}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
