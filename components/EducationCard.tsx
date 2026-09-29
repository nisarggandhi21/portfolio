import { FiBookOpen } from "react-icons/fi";

import { Monogram, SideCard } from "./Card";
import { education } from "@/data";

const EducationCard = () => (
  <SideCard icon={FiBookOpen} title="Education">
    <ol className="mt-6 space-y-4">
      {education.map((item) => (
        <li key={item.school} className="flex gap-4">
          <Monogram label={item.school} logo={item.logo} />
          <dl className="grid flex-auto grid-cols-[1fr_auto] items-baseline gap-x-3 gap-y-0.5">
            <dt className="sr-only">School</dt>
            <dd className="col-span-2 text-sm font-medium text-zinc-100">
              {item.school}
            </dd>
            <dt className="sr-only">Degree</dt>
            <dd className="text-xs text-zinc-400">
              {item.shortDegree} · {item.location}
            </dd>
            <dt className="sr-only">Dates</dt>
            <dd className="text-right text-xs text-zinc-400">
              {item.period.replace(/[A-Za-z]{3} /g, "").replace(" – ", " to ")}
            </dd>
          </dl>
        </li>
      ))}
    </ol>
  </SideCard>
);

export default EducationCard;
