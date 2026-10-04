import { FiArrowUpRight, FiSearch } from "react-icons/fi";

import { Kbd, Label, LogoTile } from "../ui";
import { education, profile, workExperience } from "@/data";

type Fact = { label: string; value: React.ReactNode };

// Quick facts about me, styled as a search/command-palette card
const AboutCard = ({ codingHours }: { codingHours: number | null }) => {
  const currentJob = workExperience.find((job) => !job.end);

  const facts: Fact[] = [
    { label: "Based in", value: profile.location },
    ...(currentJob
      ? [
          {
            label: "Currently",
            // The main site doesn't name the current employer
            value: currentJob.role,
          },
        ]
      : []),
    { label: "Stack", value: "React.js · Next.js · Node.js" },
    { label: "Applied AI", value: "RAG · LangChain · LLM APIs" },
    {
      label: "Coding",
      value: (
        <a
          href={profile.wakatimeProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 transition hover:text-accent"
        >
          {codingHours !== null
            ? `${codingHours.toLocaleString("en-IN")} hours on WakaTime`
            : "Tracked on WakaTime"}
          <FiArrowUpRight aria-hidden className="flex-none" />
        </a>
      ),
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center gap-3 border-b border-line px-5 py-4 sm:px-6">
        <FiSearch aria-hidden className="h-5 w-5 flex-none text-muted" />
        <span className="truncate text-lg text-ink">who is nisarg?</span>
        <span className="ml-auto flex-none">
          <Kbd>About</Kbd>
        </span>
      </div>

      <dl className="divide-y divide-line px-5 sm:px-6">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="grid gap-1 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-4"
          >
            <dt className="label pt-0.5 text-faint">{fact.label}</dt>
            <dd className="text-[15px] text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-line px-5 py-5 sm:px-6">
        <Label>Education</Label>
        <ul className="mt-4 space-y-4">
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
  );
};

export default AboutCard;
