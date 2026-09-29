import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";

// Only the posts in content/blog exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = `${post.title} | Nisarg Gandhi`;
  return {
    title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Nisarg Gandhi"],
      tags: post.tags,
      ...(post.coverImage && { images: [post.coverImage] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <h1 className="typo-h1 mb-2">{post.title}</h1>
      <p className="typo-small">
        {formatDate(post.date)} · {post.readingTime} min read
        {post.originalUrl && (
          <>
            {" · "}
            <a
              href={post.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              originally on {post.originalSource}
            </a>
          </>
        )}
      </p>
      {post.tags.length > 0 && (
        <p className="typo-small typo-mono mt-1">
          {post.tags
            .map((tag) => `#${tag.replace(/\s+/g, "-").toLowerCase()}`)
            .join(" ")}
        </p>
      )}

      {post.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.coverImage} alt="" className="mt-8 w-full rounded-md" />
      )}

      <div className="typo-content mt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <p className="typo-small typo-mono mt-12">
        <Link href="/blog">← all posts</Link>
      </p>
    </article>
  );
}
