import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/data/site-config";

// Redirects any other host this deployment is reachable on — the Vercel
// preview/production *.vercel.app domain, the bare apex, old domains, etc.
// — to the one canonical domain. Without this, Google can crawl and index
// the .vercel.app URL as duplicate content alongside the real site, which
// dilutes ranking signals even when the canonical tag is correct.
const CANONICAL_HOST = new URL(siteConfig.url).host;

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (!host || host === CANONICAL_HOST || host.startsWith("localhost") || host.startsWith("127.0.0.1")) {
    return NextResponse.next();
  }

  const url = new URL(request.url);
  url.protocol = "https";
  url.hostname = CANONICAL_HOST;
  url.port = "";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
