import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jobresources.fyi/sitemap.xml",
    host: "https://jobresources.fyi",
  };
}
