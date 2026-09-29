import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

import { ArticleList } from "@/components/ArticleList";
import CodingCard from "@/components/CodingCard";
import Container from "@/components/Container";
import EducationCard from "@/components/EducationCard";
import SocialLinks from "@/components/SocialLinks";
import WorkCard from "@/components/WorkCard";
import { profile } from "@/data";
import { getAllPosts } from "@/lib/blog";
import { getCodingHours } from "@/lib/wakatime";

// Re-render at most once an hour so the WakaTime coding hours stay current
export const revalidate = 3600;

export default async function Home() {
  const posts = getAllPosts();
  const codingHours = await getCodingHours();

  return (
    <>
      <Container className="mt-16 sm:mt-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-0">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
              I&apos;m {profile.name}
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-400">
              {profile.summary}
            </p>
            <p className="mt-6 text-base leading-7 text-zinc-400">
              Based in {profile.location}
              {profile.availability && (
                <>
                  , and currently{" "}
                  <span className="font-medium text-zinc-200">
                    {profile.availability.toLowerCase()}
                  </span>
                </>
              )}
              . I also write about AI agents, spec-driven development and
              building with LLMs.
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
          <div className="lg:pl-16 xl:pl-24">
            <WorkCard />
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div>
            {posts.length > 0 && (
              <>
                <h2 className="mb-12 text-sm font-semibold text-zinc-100">
                  Articles
                </h2>
                <ArticleList posts={posts.slice(0, 3)} />
                <Link
                  href="/blog"
                  className="mt-12 inline-flex items-center text-sm font-medium text-zinc-200 transition hover:text-accent"
                >
                  View all articles
                  <FiChevronRight aria-hidden className="ml-1 h-4 w-4" />
                </Link>
              </>
            )}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <CodingCard hours={codingHours} />
            <EducationCard />
          </div>
        </div>
      </Container>
    </>
  );
}
