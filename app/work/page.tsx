import type { Metadata } from "next";

import Container from "@/components/Container";
import Emphasis from "@/components/Emphasis";
import JsonLd from "@/components/JsonLd";
import SectionHeader from "@/components/SectionHeader";
import { IndexBadge, Label, LogoTile, Tag } from "@/components/ui";
import {
  awards,
  education,
  personalProjects,
  skillGroups,
  workExperience,
} from "@/data";
import { formatDuration, formatMonth, monthsBetween } from "@/lib/dates";
import { experienceYears } from "@/lib/experience";
import {
  personSchema,
  shareMetadata,
  workDescription,
  workTitle,
} from "@/lib/seo";
import { workUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: workTitle,
  description: workDescription,
  alternates: { canonical: workUrl },
  ...shareMetadata({
    title: workTitle,
    description: workDescription,
    url: workUrl,
  }),
};

// Rebuild daily so durations of the current role ("Present") stay accurate
export const revalidate = 86400;

const pad = (n: number) => String(n).padStart(2, "0");

// Numbered row, like the DevAtlas category list
const Row = ({
  index,
  title,
  children,
}: {
  index: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <li className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-1 border-b border-line py-5 sm:grid-cols-[3.5rem_14rem_1fr]">
    <span className="font-mono text-sm text-faint sm:pt-0.5">{index}</span>
    <span className="text-lg font-medium text-ink">{title}</span>
    <span className="col-start-2 text-[15px] leading-relaxed text-muted sm:col-start-3">
      {children}
    </span>
  </li>
);

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={{
          "@type": "ProfilePage",
          name: workTitle,
          url: workUrl,
          description: workDescription,
          mainEntity: personSchema(),
        }}
      />
      <Container className="pt-16 sm:pt-24">
        <SectionHeader
          as="h1"
          size="lg"
          label={`The work · ${workExperience.length} roles · ${experienceYears()}`}
          title="Where I've worked"
          intro="From an AI chat assistant, virtual try-on and Python microservices at Sugar Cosmetics to React dashboards, GraphQL APIs and CI/CD pipelines at Withum: where I've worked, what I built and the results it delivered."
        />

        <div className="mt-14 space-y-8">
          {workExperience.map((job, i) => (
            <article
              key={job.id}
              className="rounded-xl border border-line bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <IndexBadge>{pad(i + 1)}</IndexBadge>
                <span className="label text-muted">
                  {formatMonth(job.start)} – {formatMonth(job.end)} ·{" "}
                  {job.location}
                </span>
                <span className="ml-auto">
                  <Tag>{formatDuration(monthsBetween(job.start, job.end))}</Tag>
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <LogoTile name={job.company} logo={job.logo} />
                <div>
                  <h2 className="font-serif text-4xl leading-none text-ink">
                    {job.company}
                  </h2>
                  <p className="mt-1.5 text-[15px] text-muted">
                    <span className="text-ink">{job.role}</span>
                    {job.note && ` · ${job.note}`}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-x-10 gap-y-8 border-t border-line pt-8 md:grid-cols-2">
                {job.projects.map((project) => (
                  <div key={project.name}>
                    <Label className="text-accent">{project.name}</Label>
                    {project.stack.length > 0 && (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-xs text-muted"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-faint">
                      {project.points.map((point) => (
                        <li key={point}>
                          <Emphasis text={point} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>

      <Container className="mt-24">
        <SectionHeader
          label={`The toolbox · ${skillGroups.length} groups`}
          title="Skills"
        />
        <ol className="mt-10 border-t border-line">
          {skillGroups.map((group, i) => (
            <Row key={group.title} index={`S${i + 1}`} title={group.title}>
              {group.skills.join(" · ")}
            </Row>
          ))}
        </ol>
      </Container>

      <Container className="mt-24 space-y-16">
        <section>
          <Label>Projects</Label>
          <ol className="mt-4 border-t border-line">
            {personalProjects.map((project, i) => (
              <Row
                key={project.name}
                index={`P${i + 1}`}
                title={
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-accent"
                  >
                    {project.name} ↗
                  </a>
                }
              >
                <span className="label block text-faint">{project.period}</span>
                <span className="mt-2 block">{project.description}</span>
                <span className="mt-3 flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label ml-1 text-accent"
                  >
                    GitHub ↗
                  </a>
                </span>
              </Row>
            ))}
          </ol>
        </section>
        <section>
          <Label>Recognition</Label>
          <ol className="mt-4 border-t border-line">
            {awards.map((award, i) => (
              <Row key={award.title} index={`R${i + 1}`} title={award.title}>
                {award.detail}
              </Row>
            ))}
          </ol>
        </section>
      </Container>

      <Container className="mt-24">
        <Label>Education</Label>
        <ol className="mt-4 border-t border-line">
          {education.map((item, i) => (
            <li
              key={item.school}
              className="flex flex-wrap items-center gap-4 border-b border-line py-5"
            >
              <span className="w-10 font-mono text-sm text-faint sm:w-14">
                E{i + 1}
              </span>
              <LogoTile name={item.school} logo={item.logo} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="text-lg font-medium text-ink">{item.degree}</p>
                <p className="text-[15px] text-muted">
                  {item.school}, {item.location}
                </p>
              </div>
              <span className="label text-faint">{item.period}</span>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
