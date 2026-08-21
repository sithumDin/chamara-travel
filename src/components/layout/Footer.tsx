import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, navLinks, whatsappLink } from "@/data/site-config";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/layout/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-1">
          <Link href="/" className="text-xl font-semibold tracking-tight text-white">
            chamara<span className="text-white/50">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{siteConfig.tagline}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"
            >
              <FacebookIcon className="size-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"
            >
              <InstagramIcon className="size-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe on YouTube"
              className="rounded-full bg-white/10 p-2.5 hover:bg-white/20"
            >
              <YoutubeIcon className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-white/50">Explore</p>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/50">Contact</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.country}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-white/50">Plan Your Trip</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{siteConfig.responseTimePromise}</p>
          <a
            href={whatsappLink("Hi! I'd like to know more about a Sri Lanka tour.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink hover:bg-white/90"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.businessName} | Designed &amp; Developed by{" "}
            <a href="mailto:sithumdinujaya9@gmail.com" className="hover:text-white">
              Sithum Dinujaya (Freelancer)
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
