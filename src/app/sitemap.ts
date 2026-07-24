import type { MetadataRoute } from "next";

const BASE_URL = "https://detailingrefinedautodetailing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/gallery`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/quote`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/service-areas`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const servicePages = [
    "interior-detailing",
    "exterior-detailing",
    "full-detail",
    "paint-correction",
    "ceramic-coating",
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const areaPages = [
    "marysville",
    "everett",
    "lynnwood",
    "mukilteo",
    "mill-creek",
  ].map((area) => ({
    url: `${BASE_URL}/service-areas/${area}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...areaPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
