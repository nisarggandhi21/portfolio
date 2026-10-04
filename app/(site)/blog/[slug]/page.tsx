import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownAsync } from "react-markdown";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { FiArrowLeft } from "react-icons/fi";

import Container from "@/components/Container";
import { Label } from "@/components/ui";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { authorRef, shareMetadata } from "@/lib/seo";
import { rssAlternate, siteUrl } from "@/lib/site";

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
  const share = shareMetadata({
    title,
    description: post.description,
    url: `/blog/${post.slug}`,
  });
  return {
    title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}`, types: rssAlternate },
    ...share,
    openGraph: {
      ...share.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: ["Nisarg Gandhi"],
      tags: post.tags,
      // the preview image comes from ./opengraph-image.tsx
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Container className="pt-12 sm:pt-20">
      <JsonLd
        data={{
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          url: `${siteUrl}/blog/${post.slug}`,
          mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
          keywords: post.tags.join(", "),
          ...(post.coverImage && { image: `${siteUrl}${post.coverImage}` }),
          author: authorRef,
          publisher: authorRef,
        }}
      />
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="label group inline-flex items-center gap-2 text-muted transition hover:text-ink"
        >
          <FiArrowLeft
            aria-hidden
            className="transition group-hover:-translate-x-0.5"
          />
          All articles
        </Link>

        <header className="mt-10">
          <Label dash>
            {formatDate(post.date, "short")} · {post.readingTime} min read
            {post.tags[0] && ` · ${post.tags[0]}`}
          </Label>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-6 text-xl leading-relaxed text-muted">
              {post.description}
            </p>
          )}
          {post.originalUrl && (
            <a
              href={post.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label mt-6 inline-flex items-center gap-2 text-accent"
            >
              Originally on {post.originalSource} ↗
            </a>
          )}
        </header>

        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={`Cover image for “${post.title}”`}
            width={1280}
            height={720}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="mt-10 w-full rounded-xl border border-line"
          />
        )}

        <div className="article-content mt-12 text-[17px]">
          {/* Code blocks are highlighted at build time; no extra JS is sent */}
          <MarkdownAsync
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              [
                rehypePrettyCode,
                { theme: "github-dark-dimmed", keepBackground: false },
              ],
            ]}
          >
            {post.content}
          </MarkdownAsync>
        </div>

        {post.tags.length > 0 && (
          <ul className="mt-14 flex flex-wrap gap-2 border-t border-line pt-8">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-faint"
                />
                {tag}
              </li>
            ))}
          </ul>
        )}
      </article>
    </Container>
  );
}
