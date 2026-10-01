import { MetadataRoute } from "next";
import { siteContent, resolveValue } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    resolveValue(siteContent.seo.siteUrl, "https://mashallah-aluminum.com") ||
    "https://mashallah-aluminum.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
