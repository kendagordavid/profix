import type { MetadataRoute } from "next";
import { APPLIANCES } from "@/content/appliances";
import { AREAS } from "@/content/areas";
import { BRANDS } from "@/content/brands";
import { SERVICES } from "@/content/services";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/book",
    "/services",
    "/appliances",
    "/pricing",
    "/commercial",
    "/areas",
    "/about",
    "/faq",
    "/blog",
    "/contact",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${siteUrl}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...APPLIANCES.map((a) => ({
      url: `${siteUrl}/appliances/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...BRANDS.map((b) => ({
      url: `${siteUrl}/brands/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...AREAS.map((a) => ({
      url: `${siteUrl}/areas/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
