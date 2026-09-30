import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteUrl, workUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: workUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
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
