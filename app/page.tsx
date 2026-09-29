import Link from "next/link";

import Emphasis from "@/components/Emphasis";
import Period from "@/components/Period";
import PostLine from "@/components/PostLine";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SocialIcons from "@/components/SocialIcons";
import {
  awards,
  education,
  personalProjects,
  profile,
  skillGroups,
  workExperience,
} from "@/data";
import { formatDate, getAllPosts } from "@/lib/blog";
import { getCodingHours } from "@/lib/wakatime";

// Re-render at most once an hour so the WakaTime coding hours stay current
export const revalidate = 3600;

export default async function Home() {
  const posts = getAllPosts();
  const codingHours = await getCodingHours();

  return (
    <div className="typo-page">
      <SiteHeader isHome />

      <main>
        {/* Intro */}
        <section>
          <h2 className="typo-h1">Hi, I&apos;m Nisarg 👋</h2>
          <p className="typo-p">{profile.summary}</p>
          <p className="typo-p">
            Based in {profile.location}
            {profile.availability && (
              <>
                , and currently{" "}
                <strong>{profile.availability.toLowerCase()}</strong>
              </>
            )}
            .
          </p>
          <SocialIcons />
          <p className="typo-small typo-mono">
            {codingHours !== null ? (
              <>
                {codingHours.toLocaleString("en-IN")} hours of coding tracked
                on{" "}
              </>
            ) : (
              <>Coding activity tracked on </>
            )}
            <a
              href={profile.wakatimeProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              WakaTime
            </a>
          </p>
        </section>

        <section id="experience" className="scroll-mt-6">
          <h2 className="typo-h1">Experience</h2>
          <div className="space-y-10">
            {workExperience.map((job) => (
              <PostLine key={job.id} date={<Period period={job.period} />}>
                <p className="leading-[1.5em]">
                  <strong>{job.role}</strong> at {job.company}
                </p>
                <p className="line-summary">
                  {job.note && `${job.note} · `}
                  {job.location}
                </p>
                {job.projects.map((project) => (
                  <div key={project.name} className="mt-4">
                    <p className="leading-[1.5em]">
                      <em>{project.name}</em>{" "}
                      <span className="typo-small typo-mono">
                        · {project.stack.join(", ")}
                      </span>
                    </p>
                    <ul className="typo-list">
                      {project.points.map((point) => (
                        <li key={point}>
                          <Emphasis text={point} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </PostLine>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-6">
          <h2 className="typo-h1">Skills</h2>
          {skillGroups.map((group) => (
            <p key={group.title} className="my-2 leading-[1.5em]">
              <strong>{group.title}:</strong> {group.skills.join(", ")}
            </p>
          ))}
        </section>

        {posts.length > 0 && (
          <section id="writing" className="scroll-mt-6">
            <h2 className="typo-h1">Writing</h2>
            {posts.slice(0, 5).map((post) => (
              <PostLine key={post.slug} date={formatDate(post.date, "short")}>
                <p>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </p>
                {post.description && (
                  <p className="line-summary">{post.description}</p>
                )}
              </PostLine>
            ))}
            <p className="typo-small typo-mono mt-4">
              <Link href="/blog">all posts →</Link>
            </p>
          </section>
        )}

        <section id="projects" className="scroll-mt-6">
          <h2 className="typo-h1">Projects</h2>
          {personalProjects.map((project) => (
            <p key={project.name} className="my-2 leading-[1.5em]">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>{" "}
              — {project.description}
            </p>
          ))}
        </section>

        <section id="recognition" className="scroll-mt-6">
          <h2 className="typo-h1">Recognition</h2>
          <ul className="typo-list">
            {awards.map((award) => (
              <li key={award.title}>
                <strong>{award.title}</strong> — {award.detail}
              </li>
            ))}
          </ul>
        </section>

        <section id="education" className="scroll-mt-6">
          <h2 className="typo-h1">Education</h2>
          {education.map((item) => (
            <PostLine key={item.school} date={<Period period={item.period} />}>
              <p className="leading-[1.5em]">
                <strong>{item.degree}</strong>, {item.school}
              </p>
              <p className="line-summary">{item.location}</p>
            </PostLine>
          ))}
        </section>

        <section id="contact" className="scroll-mt-6 pb-12">
          <h2 className="typo-h1">Contact</h2>
          <p className="typo-p">
            Want to talk about a role, a project, or anything web and AI? Email
            me at <a href={`mailto:${profile.email}`}>{profile.email}</a> or
            reach out on{" "}
            <a
              href={profile.links.find((l) => l.label === "LinkedIn")?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
