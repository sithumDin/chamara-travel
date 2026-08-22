"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollBrightenText } from "@/components/ui/ScrollBrightenText";

const STATEMENT =
  "We believe every trip should feel personal, not packaged. From ancient cities carved into rock to wild coastlines and misty tea country, each journey is built around the traveller, not a fixed itinerary.";

// Pins a full-screen Sri Lanka photo in place while the statement over it
// brightens word by word as the page scrolls through the section's extra
// height, then releases back into normal flow once the text is fully lit.
export function SriLankaStatement() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    function update() {
      const rect = wrapper!.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      setProgress(Math.min(1, Math.max(0, -rect.top / scrollable)));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={wrapperRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <Image
          src="/gallery/misty-tea-plantation-hillside.jpg"
          alt="Misty tea plantations rolling through Sri Lanka's central highlands"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/75" />

        <div className="relative z-10 flex max-w-6xl flex-col items-center gap-8 px-5 text-center sm:px-8">
          <div className="flex items-center gap-2.5 text-white/80">
            <span className="size-1.5 shrink-0 bg-white" aria-hidden="true" />
            <span className="eyebrow">About Sri Lanka</span>
          </div>
          <ScrollBrightenText
            text={STATEMENT}
            progress={progress}
            className="text-balance text-3xl font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
          />
          <Button href="/about-sri-lanka" variant="outline-white" size="md">
            Explore Sri Lanka
          </Button>
        </div>
      </div>
    </section>
  );
}
