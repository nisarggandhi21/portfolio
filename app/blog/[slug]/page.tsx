import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiArrowLeft } from "react-icons/fi";

import Container from "@/components/Container";
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
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            aria-label="Back to articles"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 shadow-md shadow-black/20 ring-1 ring-white/10 transition hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
          >
            <FiArrowLeft
              aria-hidden
              className="h-4 w-4 text-zinc-400 transition group-hover:text-zinc-300"
            />
          </Link>
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                {post.title}
              </h1>
              <p className="order-first flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-zinc-500">
                <span className="flex items-center">
                  <span
                    className="mr-3 h-4 w-0.5 rounded-full bg-zinc-500"
                    aria-hidden
                  />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span>· {post.readingTime} min read</span>
                {post.originalUrl && (
                  <a
                    href={post.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-accent"
                  >
                    · Originally on {post.originalSource} ↗
                  </a>
                )}
              </p>
            </header>

            {post.coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.coverImage}
                alt=""
                className="mt-8 w-full rounded-2xl"
              />
            )}

            <div className="article-content mt-8">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {post.tags.length > 0 && (
              <ul className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-zinc-800/60 px-3 py-1 text-xs text-zinc-400 ring-1 ring-zinc-700/50"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </div>
      </div>
    </Container>
  );
}
