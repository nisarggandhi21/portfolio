import Link from "next/link";

import { formatDate, type PostMeta } from "@/lib/blog";

const WritingList = ({ posts }: { posts: PostMeta[] }) => (
  <div>
    <ul className="divide-y divide-border">
      {posts.map((post) => (
        <li key={post.slug} className="py-4 first:pt-0">
          <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="shrink-0 text-sm tabular-nums text-muted-foreground sm:w-32">
              {formatDate(post.date)}
            </span>
            <span className="font-medium underline-offset-4 decoration-border group-hover:underline">
              {post.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
    <Link
      href="/blog"
      className="mt-4 inline-block text-sm text-muted-foreground underline underline-offset-4 decoration-border transition hover:text-foreground hover:decoration-foreground"
    >
      All posts →
    </Link>
  </div>
);

export default WritingList;
