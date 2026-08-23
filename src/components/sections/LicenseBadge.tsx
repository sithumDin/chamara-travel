"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function LicenseBadge() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickAway(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  return (
    <div ref={ref} className="group relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
      >
        <ShieldCheck className="size-4" aria-hidden="true" />
        Government-Registered Driver &amp; Guide
      </button>

      <div
        className={cn(
          "invisible absolute left-0 top-full z-20 mt-2 w-60 origin-top-left -translate-y-1 rounded-2xl border border-border bg-paper p-3 opacity-0 shadow-xl transition-all duration-150",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
          open && "visible translate-y-0 opacity-100"
        )}
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
          <Image
            src="/license/sltda-tourist-chauffeur-license.jpg"
            alt="Chamara's Sri Lanka Tourism Development Authority authorized tourist chauffeur license card"
            fill
            sizes="240px"
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Approved by the Sri Lanka Tourism Development Authority as an All-Island Authorized Tourist Chauffeur.
        </p>
      </div>
    </div>
  );
}
