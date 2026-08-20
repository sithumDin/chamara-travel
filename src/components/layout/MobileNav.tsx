"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] bg-ink text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <Link href="/" className="text-xl font-semibold tracking-tight text-white" onClick={onClose}>
              chamara<span className="text-white/60">.</span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full p-2 text-white hover:bg-white/10"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-5 py-8 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="border-b border-white/10 py-4 text-2xl font-medium tracking-tight text-white/90 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 px-5 sm:px-8">
            <Button href="/contact" variant="accent" size="lg" onClick={onClose}>
              <Compass className="size-4.5" aria-hidden="true" />
              Plan My Trip
            </Button>
            <p className="text-sm text-white/60">
              Call or WhatsApp:{" "}
              <a href={siteConfig.phoneHref} className="text-white underline underline-offset-4">
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
