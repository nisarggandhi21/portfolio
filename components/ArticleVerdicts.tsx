import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { IndexBadge } from "./ui";
import { formatDate, type PostMeta } from "@/lib/blog";

const pad = (n: number) => String(n).padStart(2, "0");

// Articles as "verdict" cards (the first one featured), followed by numbered rows
const ArticleVerdicts = ({
  posts,
  cards = 3,
}: {
  posts: PostMeta[];
  cards?: number;
}) => {
  const top = posts.slice(0, cards);
  const rest = posts.slice(cards);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {top.map((post, i) => {
          const featured = i === 0;
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group flex flex-col rounded-xl border bg-surface p-6 transition sm:p-7 ${
                featured
                  ? "border-cream shadow-offset"
                  : "border-line hover:border-muted/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <IndexBadge>{pad(i + 1)}</IndexBadge>
                <span className="label truncate text-muted">
                  {post.tags[0] ?? "Article"}
                </span>
                <FiArrowRight
                  aria-hidden
                  className="ml-auto flex-none text-muted transition group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <p className="label mt-8 text-accent">
                {featured ? "Latest · " : ""}
                {formatDate(post.date, "short")}
              </p>
              <h3 className="mt-3 font-serif text-[2rem] leading-[1.1] text-ink">
                {post.title}
              </h3>
              {post.description && (
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {post.description}
                </p>
              )}
              <div className="mt-auto pt-6">
                <div className="flex items-center justify-between border-t border-line pt-5 text-sm text-muted">
                  <span>{post.readingTime} min read</span>
                  {post.originalSource && (
                    <span>Also on {post.originalSource}</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {rest.length > 0 && (
        <ol className="mt-12 border-t border-line">
          {rest.map((post, i) => (
            <li key={post.slug} className="border-b border-line">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-5 sm:grid-cols-[3.5rem_1fr_auto]"
              >
                <span className="font-mono text-sm text-faint">
                  {pad(cards + i + 1)}
                </span>
                <span>
                  <span className="block text-lg font-medium leading-snug text-ink transition group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {formatDate(post.date, "short")} · {post.readingTime} min
                    read
                  </span>
                </span>
                <FiArrowRight
                  aria-hidden
                  className="text-muted transition group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </Link>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default ArticleVerdicts;
