import { FiArrowUpRight, FiMail } from "react-icons/fi";

import CurrentYear from "@/components/CurrentYear";
import ExperienceList from "@/components/resume/ExperienceList";
import Section from "@/components/resume/Section";
import SkillsList from "@/components/resume/SkillsList";
import TopBar from "@/components/resume/TopBar";
import WritingList from "@/components/resume/WritingList";
import { awards, education, personalProjects, profile } from "@/data";
import { getAllPosts } from "@/lib/blog";

const linkClass =
  "underline underline-offset-4 decoration-border transition hover:decoration-foreground";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <TopBar showBlog={posts.length > 0} />

      <main>
        {/* Intro */}
        <header className="pb-14 pt-10 md:pt-16">
          {profile.availability && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {profile.availability}
            </p>
          )}
          <h1 className="font-serif text-6xl leading-[1.05] tracking-tight md:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            {profile.title} · {profile.location}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/85">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm sm:gap-x-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition hover:opacity-85"
            >
              <FiMail aria-hidden />
              Get in touch
            </a>
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
                <FiArrowUpRight aria-hidden className="text-xs" />
              </a>
            ))}
          </div>
        </header>

        <Section id="experience" title="Experience">
          <ExperienceList />
        </Section>

        <Section id="skills" title="Skills">
          <SkillsList />
        </Section>

        {posts.length > 0 && (
          <Section id="writing" title="Writing">
            <WritingList posts={posts.slice(0, 4)} />
          </Section>
        )}

        <Section id="projects" title="Projects">
          <ul className="space-y-4">
            {personalProjects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 font-medium ${linkClass}`}
                >
                  {project.name}
                  <FiArrowUpRight aria-hidden className="text-xs" />
                </a>
                <p className="mt-1 leading-relaxed text-foreground/80">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="recognition" title="Recognition">
          <ul className="space-y-4">
            {awards.map((award) => (
              <li key={award.title}>
                <p className="font-medium">{award.title}</p>
                <p className="mt-1 leading-relaxed text-foreground/80">
                  {award.detail}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          {education.map((item) => (
            <div key={item.school}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="font-medium">{item.school}</p>
                <p className="text-sm tabular-nums text-muted-foreground">
                  {item.period}
                </p>
              </div>
              <p className="mt-1 text-foreground/80">
                {item.degree} · {item.location}
              </p>
            </div>
          ))}
        </Section>

        <Section id="contact" title="Contact">
          <p className="font-serif text-3xl leading-snug md:text-4xl">
            Let&apos;s build something together.
          </p>
          <p className="mt-3 leading-relaxed text-foreground/80">
            I&apos;m always happy to talk about new roles, projects, or anything
            web and AI. The fastest way to reach me is email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className={`mt-5 inline-block text-lg font-medium ${linkClass}`}
          >
            {profile.email}
          </a>
        </Section>
      </main>

      <footer className="flex flex-col gap-3 border-t border-border py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CurrentYear initialYear={new Date().getFullYear()} />{" "}
          {profile.name}
        </p>
        <div className="flex gap-5 print:hidden">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
