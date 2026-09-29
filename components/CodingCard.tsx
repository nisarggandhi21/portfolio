import { FiCode } from "react-icons/fi";

import { SideCard } from "./Card";
import { profile } from "@/data";

const CodingCard = ({ hours }: { hours: number | null }) => (
  <SideCard icon={FiCode} title="Coding">
    {hours !== null ? (
      <>
        <p className="mt-5 text-3xl font-bold tracking-tight text-zinc-100">
          {hours.toLocaleString("en-IN")}{" "}
          <span className="text-base font-medium text-zinc-400">hours</span>
        </p>
        <p className="mt-1 text-sm text-zinc-400">
          of coding tracked on{" "}
          <a
            href={profile.wakatimeProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-200 transition hover:text-accent"
          >
            WakaTime
          </a>
        </p>
      </>
    ) : (
      <p className="mt-4 text-sm text-zinc-400">
        My coding activity is tracked on{" "}
        <a
          href={profile.wakatimeProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-200 transition hover:text-accent"
        >
          WakaTime
        </a>
        .
      </p>
    )}
  </SideCard>
);

export default CodingCard;
