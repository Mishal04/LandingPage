import { MetadataRoute } from "next";
import { siteContent, resolveValue } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    resolveValue(siteContent.seo.siteUrl, "https://mashallah-aluminum.com") ||
    "https://mashallah-aluminum.com";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
