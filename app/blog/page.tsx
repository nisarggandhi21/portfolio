import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";

const description =
  "Articles by Nisarg Gandhi on software development, web engineering and lessons from building real projects.";

export const metadata: Metadata = {
  title: "Blog | Nisarg Gandhi",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Nisarg Gandhi",
    description,
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <header className="border-b border-border pb-10 pt-10 md:pt-16">
        <h1 className="font-serif text-5xl tracking-tight md:text-7xl">
          Writing
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
          Thoughts on software development, AI and things I&apos;ve learned
          along the way.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted-foreground">
          Posts are on their way. Check back soon!
        </p>
      ) : (
        <ul className="divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-2 py-8 md:grid-cols-[9rem_1fr] md:gap-10"
              >
                <p className="text-sm tabular-nums text-muted-foreground md:pt-1.5">
                  {formatDate(post.date)}
                </p>
                <div>
                  <h2 className="font-serif text-2xl leading-snug underline-offset-4 decoration-border group-hover:underline md:text-3xl">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 leading-relaxed text-foreground/80">
                      {post.description}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground">
                    {post.readingTime} min read
                    {post.tags.length > 0 && ` · ${post.tags.join(", ")}`}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
