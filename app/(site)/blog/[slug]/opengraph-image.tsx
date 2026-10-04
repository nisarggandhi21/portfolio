import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { ogCard, ogSize, stripEmoji } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// One image per article, described by the article's title
export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return [
    {
      id: "card",
      alt: post ? stripEmoji(post.title) : "Article by Nisarg Gandhi",
      size: ogSize,
      contentType: "image/png",
    },
  ];
}

// Link-preview image for each article: its cover image when it has one,
// otherwise a card with the title
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return new Response("Not found", { status: 404 });

  if (post.coverImage?.endsWith(".jpg")) {
    const file = fs.readFileSync(
      path.join(process.cwd(), "public", post.coverImage),
    );
    const src = `data:image/jpeg;base64,${file.toString("base64")}`;
    return new ImageResponse(
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <img
          src={src}
          alt=""
          width={size.width}
          height={size.height}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>,
      size,
    );
  }

  return ogCard({
    eyebrow: `${formatDate(post.date, "short")} · ${post.readingTime} min read`,
    title: stripEmoji(post.title),
    footer: "nisarg-gandhi.com/blog",
  });
}
