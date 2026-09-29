import type { Metadata } from "next";

import Emphasis from "@/components/Emphasis";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import {
  awards,
  education,
  personalProjects,
  skillGroups,
  workExperience,
} from "@/data";
import { formatDuration, formatMonth, monthsBetween } from "@/lib/dates";
import { rssAlternate } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work | Nisarg Gandhi",
  description:
    "Experience, projects and skills of Nisarg Gandhi, a Full Stack Developer working with React.js, Next.js and Node.js.",
  alternates: { canonical: "/work", types: rssAlternate },
};

export default function WorkPage() {
  return (
    <PageIntro
      title="Building scalable web apps across the stack."
      intro="From React dashboards and GraphQL APIs to CI/CD pipelines on AWS, here is where I've worked, what I built and the results it delivered."
    >
      <div className="space-y-20">
        {workExperience.map((job) => (
          <Section
            key={job.id}
            title={job.company}
            aside={
              <>
                {formatMonth(job.start)} – {formatMonth(job.end)}
                <br />
                {formatDuration(monthsBetween(job.start, job.end))} ·{" "}
                {job.location}
              </>
            }
          >
            <h3 className="text-base font-semibold tracking-tight text-zinc-100">
              {job.role}
              {job.note && (
                <span className="ml-2 font-normal text-zinc-400">
                  · {job.note}
                </span>
              )}
            </h3>
            <div className="mt-6 space-y-8">
              {job.projects.map((project) => (
                <div key={project.name}>
                  <h4 className="text-sm font-semibold text-zinc-200">
                    {project.name}
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-zinc-800/60 px-2.5 py-0.5 text-xs text-zinc-400 ring-1 ring-zinc-700/50"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-400 marker:text-zinc-600">
                    {project.points.map((point) => (
                      <li key={point}>
                        <Emphasis text={point} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        ))}

        <Section title="Skills">
          <dl className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <dt className="text-sm font-semibold text-zinc-200">
                  {group.title}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-zinc-400">
                  {group.skills.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Projects">
          {personalProjects.map((project) => (
            <div key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold tracking-tight text-zinc-100 transition hover:text-accent"
              >
                {project.name} ↗
              </a>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>
            </div>
          ))}
        </Section>

        <Section title="Recognition">
          <ul className="space-y-4">
            {awards.map((award) => (
              <li key={award.title}>
                <p className="text-sm font-semibold text-zinc-200">
                  {award.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">
                  {award.detail}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Education">
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.school}>
                <p className="text-sm font-semibold text-zinc-200">
                  {item.degree}
                </p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">
                  {item.school}, {item.location} · {item.period}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </PageIntro>
  );
}
