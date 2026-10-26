import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const buildDate = new Date("2026-10-26");

  const routes = ["", "/projects"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const sampleProjectSlugs = [
    "inventory-management",
    "healthcare-portal",
    "ecommerce-storefront",
  ];

  const projectRoutes = sampleProjectSlugs.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
