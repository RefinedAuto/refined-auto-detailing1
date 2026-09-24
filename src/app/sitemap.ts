import type { MetadataRoute } from "next";
import { AREAS } from "@/lib/areas";
import { SERVICES } from "@/lib/services";
import { SITE_URL as BASE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services/detail-packages`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/service-areas`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/quote`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/gallery`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.2, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms`, priority: 0.2, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/accessibility`, priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    priority: s.category === "Add-On" ? 0.7 : 0.9,
    changeFrequency: "monthly" as const,
  }));

  const areaPages = AREAS.map((a) => ({
    url: `${BASE_URL}/service-areas/${a.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...areaPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
