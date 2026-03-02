import type { MetadataRoute } from "next";
import { hubCategories } from "@/data/categories";
import { seoCollections } from "@/data/seoCollections";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jobresources.fyi";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${base}/best`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = hubCategories.map((category) => ({
    url: `${base}/${category.id}`,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  const collectionRoutes: MetadataRoute.Sitemap = seoCollections.map((collection) => ({
    url: `${base}/best/${collection.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...collectionRoutes];
}
