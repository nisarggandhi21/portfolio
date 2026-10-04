import type { MetadataRoute } from "next";
import { headers } from "next/headers";

import { getAllPosts } from "@/lib/blog";
import { siteUrl, workHost, workUrl } from "@/lib/site";

// Each site lists only its own pages
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host")?.split(":")[0];
  if (host === workHost) {
    return [
      {
        url: workUrl,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      },
    ];
  }

  const posts = getAllPosts();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...(posts.length > 0
      ? [
          {
            url: `${siteUrl}/blog`,
            lastModified: new Date(posts[0].date),
            changeFrequency: "weekly" as const,
            priority: 0.8,
          },
        ]
      : []),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
