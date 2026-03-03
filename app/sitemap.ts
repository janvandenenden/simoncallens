import type { MetadataRoute } from "next";
import { works } from "@/content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: "https://simoncallens.com", priority: 1.0 },
    { url: "https://simoncallens.com/about", priority: 0.8 },
    { url: "https://simoncallens.com/exhibitions", priority: 0.6 },
    { url: "https://simoncallens.com/contact", priority: 0.6 },
  ];

  const workPages: MetadataRoute.Sitemap = works.map((work) => ({
    url: `https://simoncallens.com/work/${work.slug}`,
    priority: 0.9,
  }));

  return [...staticPages, ...workPages];
}
