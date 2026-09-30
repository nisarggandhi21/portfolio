import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";

export const alt = "Article by Nisarg Gandhi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// Emoji would need to be downloaded while rendering, so leave them out of the card
const stripEmoji = (text: string) =>
  text.replace(/\p{Extended_Pictographic}️?/gu, "").trim();

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

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px 96px",
        backgroundColor: "#0c0b09",
        color: "#EFE8DC",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 28,
          color: "#A39B8F",
        }}
      >
        <div
          style={{
            width: 4,
            height: 32,
            backgroundColor: "#EF7B4D",
            marginRight: 20,
            borderRadius: 2,
          }}
        />
        {formatDate(post.date)} · {post.readingTime} min read
      </div>
      <div
        style={{
          display: "flex",
          fontSize: stripEmoji(post.title).length > 60 ? 60 : 72,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {stripEmoji(post.title)}
      </div>
      <div style={{ display: "flex", fontSize: 30, color: "#A39B8F" }}>
        Nisarg Gandhi · Articles
      </div>
    </div>,
    size,
  );
}
