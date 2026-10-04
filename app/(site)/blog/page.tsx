import type { Metadata } from "next";
import ArticleVerdicts from "@/components/ArticleVerdicts";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { getAllPosts } from "@/lib/blog";
import { blogDescription, shareMetadata } from "@/lib/seo";
import { rssAlternate } from "@/lib/site";

const title = "Blog | Nisarg Gandhi";

export const metadata: Metadata = {
  title,
  description: blogDescription,
  alternates: { canonical: "/blog", types: rssAlternate },
  ...shareMetadata({ title, description: blogDescription, url: "/blog" }),
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="pt-16 sm:pt-24">
      <SectionHeader
        as="h1"
        size="lg"
        label={`The writing · ${posts.length} articles`}
        title="Writing"
        intro="Notes on AI agents and the patterns behind them, spec-driven development, and where the AI industry is heading. Some were first published on LinkedIn and Medium."
      />
      <div className="mt-14">
        {posts.length === 0 ? (
          <p className="text-muted">Posts are on their way. Check back soon!</p>
        ) : (
          <ArticleVerdicts posts={posts} />
        )}
      </div>
    </Container>
  );
}
