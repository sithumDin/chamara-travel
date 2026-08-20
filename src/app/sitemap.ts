import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { tours } from "@/data/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/tours`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/about-sri-lanka`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/my-experience`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/reviews`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const tourPages: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: `${siteConfig.url}/tours/${tour.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...tourPages];
}
