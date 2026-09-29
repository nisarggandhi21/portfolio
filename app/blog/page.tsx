import type { Metadata } from "next";
import Link from "next/link";

import PostLine from "@/components/PostLine";
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
      <h1 className="typo-h1">Writing</h1>
      {posts.length === 0 ? (
        <p className="typo-p">Posts are on their way. Check back soon!</p>
      ) : (
        posts.map((post) => (
          <PostLine key={post.slug} date={formatDate(post.date, "short")}>
            <p>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </p>
            {post.description && (
              <p className="line-summary">{post.description}</p>
            )}
          </PostLine>
        ))
      )}
    </>
  );
}
