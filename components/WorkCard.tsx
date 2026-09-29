import Link from "next/link";
import { FiArrowRight, FiBriefcase } from "react-icons/fi";

import { Monogram, SideCard } from "./Card";
import { workExperience } from "@/data";
import { formatDuration, monthsBetween, yearOf } from "@/lib/dates";

const WorkCard = () => {
  const totalMonths = workExperience.reduce(
    (sum, job) => sum + monthsBetween(job.start, job.end),
    0,
  );

  return (
    <SideCard
      icon={FiBriefcase}
      title="Work"
      aside={formatDuration(totalMonths)}
    >
      <ol className="mt-6 space-y-4">
        {workExperience.map((job) => {
          const startYear = yearOf(job.start);
          const endYear = yearOf(job.end);
          return (
            <li key={job.id} className="flex gap-4">
              <Monogram label={job.company} logo={job.logo} />
              {/* company | duration on the first line, role | years on the second */}
              <dl className="grid flex-auto grid-cols-[1fr_auto] items-baseline gap-x-3 gap-y-0.5">
                <dt className="sr-only">Company</dt>
                <dd className="text-sm font-medium text-zinc-100">
                  {job.company}
                </dd>
                <dt className="sr-only">Duration</dt>
                <dd className="text-right text-xs text-zinc-400">
                  {formatDuration(monthsBetween(job.start, job.end))}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-400">{job.role}</dd>
                <dt className="sr-only">Dates</dt>
                <dd className="text-right text-xs text-zinc-400">
                  {startYear === endYear
                    ? startYear
                    : `${startYear} to ${endYear}`}
                </dd>
              </dl>
            </li>
          );
        })}
      </ol>
      <Link
        href="/work"
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-zinc-800/50 px-3 py-2 text-sm font-medium text-zinc-300 outline-offset-2 transition hover:bg-zinc-800 hover:text-zinc-50"
      >
        View experience
        <FiArrowRight
          aria-hidden
          className="h-4 w-4 text-zinc-400 transition group-hover:text-zinc-50"
        />
      </Link>
    </SideCard>
  );
};

export default WorkCard;
