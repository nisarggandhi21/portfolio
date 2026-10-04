import type { MetadataRoute } from "next";
import { headers } from "next/headers";

import { siteUrl, workHost, workUrl } from "@/lib/site";

// Each site points crawlers at its own sitemap
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host")?.split(":")[0];
  const origin = host === workHost ? workUrl : siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
