"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
}

export function Accordion({
  items,
  defaultOpenId,
  className,
}: {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  return (
    <div className={cn("divide-y divide-border rounded-2xl border border-border bg-paper", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className="font-medium text-ink">{item.trigger}</span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "size-5 shrink-0 text-muted transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              className={cn("grid transition-all duration-200 ease-in-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
