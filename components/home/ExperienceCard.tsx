import Link from "next/link";
import { FiArrowRight, FiSearch } from "react-icons/fi";

import { Kbd, Label, LogoTile, Tag } from "../ui";
import { profile, workExperience } from "@/data";
import { formatDuration, monthsBetween, yearOf } from "@/lib/dates";

// Experience shown as a search/command-palette style card
const ExperienceCard = () => {
  const totalMonths = workExperience.reduce(
    (sum, job) => sum + monthsBetween(job.start, job.end),
    0,
  );
  const firstYear = Math.min(...workExperience.map((j) => yearOf(j.start)));
  const lastYear = Math.max(...workExperience.map((j) => yearOf(j.end)));

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center gap-3 border-b border-line px-5 py-4 sm:px-6">
        <FiSearch aria-hidden className="h-5 w-5 flex-none text-muted" />
        <span className="truncate text-lg text-ink">
          where has nisarg worked?
        </span>
        <span className="ml-auto flex-none">
          <Kbd>{formatDuration(totalMonths)}</Kbd>
        </span>
      </div>

      <div className="p-3">
        <Label className="px-3 pb-3 pt-3">
          Experience · {workExperience.length} roles
        </Label>
        <ol>
          {workExperience.map((job, i) => (
            <li
              key={job.id}
              className={`flex items-center gap-4 rounded-lg px-3 py-3 ${
                i === 0 ? "bg-raised" : ""
              }`}
            >
              <LogoTile name={job.company} logo={job.logo} />
              <div className="min-w-0 flex-1">
                <p className="text-lg font-medium leading-tight text-ink">
                  {job.company}
                </p>
                <p className="truncate text-[15px] text-muted">{job.role}</p>
              </div>
              <Tag>{formatDuration(monthsBetween(job.start, job.end))}</Tag>
            </li>
          ))}
        </ol>
      </div>

      {profile.highlight && (
        <div className="mx-5 mb-6 mt-3 border-l-2 border-accent py-2 pl-5 sm:mx-6">
          <Label className="text-accent">Highlight</Label>
          <p className="mt-3 font-serif text-2xl italic leading-snug text-ink">
            {profile.highlight}
          </p>
        </div>
      )}

      <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-4 sm:px-6">
        <span className="label text-faint">
          {firstYear} → {lastYear}
        </span>
        <Link
          href="/work"
          className="label group flex items-center gap-2 text-accent"
        >
          Full experience
          <FiArrowRight
            aria-hidden
            className="transition group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
