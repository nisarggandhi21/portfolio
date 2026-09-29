import type { Metadata } from "next";
import { ArticleArchive } from "@/components/ArticleList";
import PageIntro from "@/components/PageIntro";
import { getAllPosts } from "@/lib/blog";

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
    <PageIntro
      title="Writing on software, AI agents and building with LLMs."
      intro="Notes on what I'm learning: AI agents and the patterns behind them, spec-driven development, and where the AI industry is heading. Most of these were first published on LinkedIn and Medium."
    >
      {posts.length === 0 ? (
        <p className="text-zinc-400">
          Posts are on their way. Check back soon!
        </p>
      ) : (
        <ArticleArchive posts={posts} />
      )}
    </PageIntro>
  );
}
