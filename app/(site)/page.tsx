import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import ArticleVerdicts from "@/components/ArticleVerdicts";
import Container from "@/components/Container";
import AboutCard from "@/components/home/AboutCard";
import FindMe from "@/components/home/FindMe";
import SectionHeader from "@/components/SectionHeader";
import { Label, PrimaryButton, SecondaryButton } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { profile } from "@/data";
import { getAllPosts } from "@/lib/blog";
import { experienceYears } from "@/lib/experience";
import { personSchema, siteDescription } from "@/lib/seo";
import { siteTitle, siteUrl } from "@/lib/site";
import { getCodingHours } from "@/lib/wakatime";

// Re-render at most once an hour so the WakaTime coding hours stay current
export const revalidate = 3600;

export default async function Home() {
  const posts = getAllPosts();
  const codingHours = await getCodingHours();

  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "WebSite",
              name: siteTitle,
              url: siteUrl,
              description: siteDescription(),
              author: { "@id": `${siteUrl}/#person` },
            },
            personSchema(),
          ],
        }}
      />
      {/* Hero */}
      <Container className="grid grid-cols-1 gap-14 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-32">
        <div className="min-w-0">
          {/* The main site doesn't name the current employer */}
          <Label dash>
            Portfolio · {profile.availability || profile.location}
          </Label>
          <h1 className="mt-8 font-serif text-[3.2rem] leading-[0.98] tracking-tight text-ink sm:text-7xl lg:text-[4.6rem]">
            I&apos;m {profile.name},
            <span className="block italic text-accent">
              full stack developer.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted">
            {experienceYears()} building scalable web applications and
            microservices with React.js, Next.js and Node.js. Based in{" "}
            {profile.location}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href="#about">About me</PrimaryButton>
            <SecondaryButton href="/blog">Read my articles</SecondaryButton>
          </div>

          <Label className="mt-12">Or find me on</Label>
          <div className="mt-4 max-w-xl">
            <FindMe />
          </div>
        </div>

        <div className="lg:pt-6">
          <AboutCard codingHours={codingHours} />
        </div>
      </Container>

      {/* About */}
      <section id="about" className="mt-28 scroll-mt-8 sm:mt-36">
        <Container>
          <SectionHeader label="About" title="A little about me" />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <p className="font-serif text-3xl leading-snug text-ink sm:text-4xl">
              I build web products end to end, from the interface people use to
              the services and cloud infrastructure behind it.
            </p>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Most of my work is React.js and Next.js on the front end, with
                Node.js or Python services behind it, containerized with Docker
                and deployed on AWS.
              </p>
              <p>
                Lately I&apos;ve been focused on applied AI: chat assistants
                built on retrieval-augmented generation, LLM APIs, and
                spec-driven development with Claude Code and GitHub Spec Kit.
              </p>
              <p>
                I also write about AI agents and building with LLMs. You&apos;ll
                find those articles below.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Articles */}
      {posts.length > 0 && (
        <Container className="mt-28 sm:mt-36">
          <SectionHeader
            label={`The writing · ${posts.length} articles`}
            title="Latest articles"
            intro="Notes on AI agents, spec-driven development and building with LLMs."
          />
          <div className="mt-12">
            <ArticleVerdicts posts={posts.slice(0, 5)} />
          </div>
          <Link
            href="/blog"
            className="label group mt-10 inline-flex items-center gap-2 text-accent"
          >
            All articles
            <FiArrowRight
              aria-hidden
              className="transition group-hover:translate-x-0.5"
            />
          </Link>
        </Container>
      )}
    </>
  );
}
