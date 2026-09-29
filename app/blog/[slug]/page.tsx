import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaLinkedin, FaMedium } from "react-icons/fa";
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
    <article className="pt-10 md:pt-16">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground transition hover:text-foreground"
      >
        &larr; All posts
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        <h1 className="font-serif text-4xl leading-[1.1] md:text-6xl">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="tabular-nums">
            {formatDate(post.date)} · {post.readingTime} min read
          </span>
          {post.originalUrl && (
            <a
              href={post.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-foreground"
            >
              {post.originalSource === "LinkedIn" && <FaLinkedin aria-hidden />}
              {post.originalSource === "Medium" && <FaMedium aria-hidden />}
              Originally published on {post.originalSource}
            </a>
          )}
        </div>
      </header>

      {post.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.coverImage}
          alt=""
          className="mt-8 w-full rounded-lg border border-border"
        />
      )}

      <div className="prose prose-stone dark:prose-invert md:prose-lg mt-10 max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:underline-offset-4 prose-img:rounded-lg prose-pre:border prose-pre:border-border prose-pre:bg-card prose-pre:text-foreground">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
