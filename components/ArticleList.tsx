import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

import { formatDate, type PostMeta } from "@/lib/blog";

// Date shown with a small vertical bar in front of it
const ArticleDate = ({
  date,
  className = "",
}: {
  date: string;
  className?: string;
}) => (
  <time
    dateTime={date}
    className={`relative z-10 flex items-center text-sm text-zinc-500 ${className}`}
  >
    <span className="mr-3 h-4 w-0.5 rounded-full bg-zinc-500" aria-hidden />
    {formatDate(date)}
  </time>
);

const ArticleBody = ({ post }: { post: PostMeta }) => (
  <>
    <h2 className="text-base font-semibold tracking-tight text-zinc-100">
      <Link href={`/blog/${post.slug}`}>
        {/* stretches the link over the whole card */}
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{post.title}</span>
      </Link>
    </h2>
    {post.description && (
      <p className="relative z-10 mt-2 text-sm leading-6 text-zinc-400">
        {post.description}
      </p>
    )}
    <p
      aria-hidden
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-accent"
    >
      Read article
      <FiChevronRight className="ml-1 h-4 w-4" />
    </p>
  </>
);

const hoverBackground =
  "absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl";

// Compact list for the homepage
export const ArticleList = ({ posts }: { posts: PostMeta[] }) => (
  <div className="flex flex-col gap-16">
    {posts.map((post) => (
      <article
        key={post.slug}
        className="group relative flex flex-col items-start"
      >
        <div className={hoverBackground} />
        <ArticleDate date={post.date} className="mb-3" />
        <ArticleBody post={post} />
      </article>
    ))}
  </div>
);

// Full list with a date column on wide screens, for the Articles page
export const ArticleArchive = ({ posts }: { posts: PostMeta[] }) => (
  <div className="md:border-l md:border-zinc-700/40 md:pl-6">
    <div className="flex max-w-3xl flex-col space-y-16">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="md:grid md:grid-cols-4 md:items-baseline"
        >
          <div className="group relative flex flex-col items-start md:col-span-3">
            <div className={hoverBackground} />
            <ArticleDate date={post.date} className="mb-3 md:hidden" />
            <ArticleBody post={post} />
          </div>
          <time
            dateTime={post.date}
            className="mt-1 hidden text-sm text-zinc-500 md:order-first md:block"
          >
            {formatDate(post.date)}
          </time>
        </article>
      ))}
    </div>
  </div>
);
