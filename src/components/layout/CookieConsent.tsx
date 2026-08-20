"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONSENT_STORAGE_KEY, updateConsent } from "@/lib/consent";
import { Button } from "@/components/ui/Button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reveal the banner only after checking localStorage on mount — this
    // browser-only read can't happen during server rendering, so the
    // set-state-in-effect pattern is intentional here, not incidental.
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!stored) setVisible(true);
  }, []);

  function handleChoice(granted: boolean) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, granted ? "granted" : "denied");
    updateConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-border bg-paper/98 px-5 py-5 backdrop-blur sm:px-8"
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
