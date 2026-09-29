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
    <article className="mt-10">
      <Link href="/blog" className="text-sm text-white-100 hover:text-white transition">
        &larr; All posts
      </Link>

      <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight text-white">
        {post.title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white-100">
        <span>
          {formatDate(post.date)} · {post.readingTime} min read
        </span>
        {post.originalUrl && (
          <a
            href={post.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition"
          >
            {post.originalSource === "LinkedIn" && <FaLinkedin aria-hidden />}
            {post.originalSource === "Medium" && <FaMedium aria-hidden />}
            Originally published on {post.originalSource}
          </a>
        )}
      </div>

      {post.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.coverImage}
          alt=""
          className="mt-8 w-full rounded-2xl border border-white/[0.1]"
        />
      )}

      <div className="prose prose-invert md:prose-lg mt-10 max-w-none prose-a:text-purple prose-headings:text-white prose-img:rounded-xl prose-pre:bg-[rgb(4,7,29)] prose-pre:border prose-pre:border-white/[0.1]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
