import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import { ogCard, ogSize, stripEmoji } from "@/lib/og";

// Link-preview image for each article, rendered once at build time: its
// cover image when it has one, otherwise a card with the title. Linked from
// the article's metadata so the image can carry the title as its alt text.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
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
        {/* eslint-disable-next-line @next/next/no-img-element -- drawn into the PNG, not shown on a page */}
        <img
          src={src}
          alt=""
          width={ogSize.width}
          height={ogSize.height}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>,
      ogSize,
    );
  }

  return ogCard({
    eyebrow: `${formatDate(post.date, "short")} · ${post.readingTime} min read`,
    title: stripEmoji(post.title),
    footer: "nisarg-gandhi.com/blog",
  });
}
