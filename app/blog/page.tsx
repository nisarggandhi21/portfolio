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
      <h1 className="heading mt-10">
        My <span className="text-purple">blog</span>
      </h1>
      <p className="text-center text-white-100 mt-4">
        Thoughts on software development, tech and things I&apos;ve learned
        along the way.
      </p>

      {posts.length === 0 ? (
        <p className="text-center text-white-200 mt-16">
          Posts are on their way. Check back soon!
        </p>
      ) : (
        <ul className="mt-12 flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-white/[0.1] p-6 md:p-8 transition hover:border-purple/50 hover:-translate-y-0.5"
                style={{ background: "rgb(4,7,29)" }}
              >
                <p className="text-sm text-white-100">
                  {formatDate(post.date)} · {post.readingTime} min read
                </p>
                <h2 className="mt-2 text-xl md:text-2xl font-bold text-white">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-3 text-white-200">{post.description}</p>
                )}
                {post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[#2b2535] px-3 py-1 text-xs text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
