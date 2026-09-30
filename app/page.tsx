import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import ArticleVerdicts from "@/components/ArticleVerdicts";
import Container from "@/components/Container";
import ExperienceCard from "@/components/home/ExperienceCard";
import FindMe from "@/components/home/FindMe";
import SectionHeader from "@/components/SectionHeader";
import {
  Label,
  LogoTile,
  PrimaryButton,
  SecondaryButton,
} from "@/components/ui";
import { education, profile, workExperience } from "@/data";
import { getAllPosts } from "@/lib/blog";
import { formatDuration, monthsBetween } from "@/lib/dates";
import { getCodingHours } from "@/lib/wakatime";

// Re-render at most once an hour so the WakaTime coding hours stay current
export const revalidate = 3600;

export default async function Home() {
  const posts = getAllPosts();
  const codingHours = await getCodingHours();
  const totalMonths = workExperience.reduce(
    (sum, job) => sum + monthsBetween(job.start, job.end),
    0,
  );

  const currentJob = workExperience.find((job) => !job.end);

  return (
    <>
      {/* Hero */}
      <Container className="grid grid-cols-1 gap-14 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-32">
        <div className="min-w-0">
          <Label dash>
            Portfolio ·{" "}
            {profile.availability ||
              (currentJob ? `Now at ${currentJob.company}` : profile.location)}
          </Label>
          <h1 className="mt-8 font-serif text-[3.2rem] leading-[0.98] tracking-tight text-ink sm:text-7xl lg:text-[4.6rem]">
            I&apos;m {profile.name},
            <span className="block italic text-accent">
              full stack developer.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted">
            {formatDuration(totalMonths)} building scalable web applications and
            microservices with React.js, Next.js, Node.js and Python, now
            shipping AI features like a RAG chat assistant and a virtual try-on
            {currentJob ? ` at ${currentJob.company}` : ""}. Based in{" "}
            {profile.location}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href="/work">View my work</PrimaryButton>
            <SecondaryButton href="/blog">Read my articles</SecondaryButton>
          </div>

          <Label className="mt-12">Or find me on</Label>
          <div className="mt-4 max-w-xl">
            <FindMe />
          </div>
        </div>

        <div className="lg:pt-6">
          <ExperienceCard />
        </div>
      </Container>

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

      {/* At a glance */}
      <Container className="mt-28 sm:mt-36">
        <SectionHeader label="At a glance" title="By the numbers" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-xl border border-line bg-surface p-6 sm:p-7">
            <Label>Coding · WakaTime</Label>
            {codingHours !== null ? (
              <p className="mt-8 font-serif text-6xl leading-none text-ink">
                {codingHours.toLocaleString("en-IN")}
                <span className="ml-2 font-sans text-lg text-muted">hours</span>
              </p>
            ) : (
              <p className="mt-8 font-serif text-4xl leading-tight text-ink">
                Tracked daily
              </p>
            )}
            <a
              href={profile.wakatimeProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1 pt-8 text-[15px] text-muted transition hover:text-accent"
            >
              {codingHours !== null
                ? "of coding on WakaTime"
                : "See my coding stats on WakaTime"}
              <FiArrowUpRight aria-hidden />
            </a>
          </div>

          <div className="flex flex-col rounded-xl border border-line bg-surface p-6 sm:p-7">
            <Label>Experience</Label>
            <p className="mt-8 font-serif text-6xl leading-none text-ink">
              {formatDuration(totalMonths)}
            </p>
            <p className="mt-auto pt-8 text-[15px] text-muted">
              across {workExperience.length} companies
            </p>
          </div>

          <div className="flex flex-col rounded-xl border border-line bg-surface p-6 sm:p-7">
            <Label>Education</Label>
            <ul className="mt-6 space-y-5">
              {education.map((item) => (
                <li key={item.school} className="flex items-center gap-4">
                  <LogoTile name={item.school} logo={item.logo} size="sm" />
                  <div className="min-w-0">
                    <p className="font-medium text-ink">
                      {item.shortDegree}
                      <span className="ml-2 font-mono text-xs text-faint">
                        {item.period
                          .replace(/[A-Za-z]{3} /g, "")
                          .replace(" – ", "–")}
                      </span>
                    </p>
                    <p className="truncate text-sm text-muted">{item.school}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
