"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Compass } from "lucide-react";
import { navLinks } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

// `transparent` renders the header over a dark hero image on first paint
// (white text, no background) and switches to a solid header once the user
// scrolls past the hero. Pages without a dark hero should omit the prop.
export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const isSolid = !transparent || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
          isSolid ? "border-b border-border bg-paper/95 backdrop-blur" : "bg-white/10 backdrop-blur-sm"
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className={cn(
              "text-xl font-semibold tracking-tight transition-colors",
              isSolid ? "text-ink" : "text-white"
            )}
          >
            chamara<span className={isSolid ? "text-muted" : "text-white/60"}>.</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isSolid ? "text-ink-soft hover:text-ink" : "text-white/85 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/contact" variant="accent" size="md">
              <Compass className="size-4" aria-hidden="true" />
              Plan My Trip
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={cn(
              "rounded-full p-2.5 transition-colors lg:hidden",
              isSolid ? "text-ink hover:bg-ink/5" : "text-white hover:bg-white/10"
            )}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </Container>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
