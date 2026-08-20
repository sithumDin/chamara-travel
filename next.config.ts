import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // This project lives inside a larger, unrelated workspace that has its
  // own lockfile one directory up — pin the Turbopack root explicitly so
  // it never gets inferred as that parent directory.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // PLACEHOLDER images are served from picsum.photos (redirects to
    // fastly.picsum.photos). Remove these once real photography under
    // /public is used, or add your real CDN/host here.
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
