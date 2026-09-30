import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiMail, FiRss } from "react-icons/fi";
import { SiWakatime } from "react-icons/si";

import { profile } from "@/data";

type Tile = { label: string; note: string; href: string; icon: IconType };

// Icon and a short note for each profile link
const meta: Record<string, { icon: IconType; note: string }> = {
  GitHub: { icon: FaGithub, note: "Code" },
  LinkedIn: { icon: FaLinkedin, note: "Career" },
  X: { icon: FaXTwitter, note: "Posts" },
};

// Profile links as a grid of tiles: icon, name, a short note and an arrow
const FindMe = () => {
  const tiles: Tile[] = [
    ...profile.links.map((link) => ({
      label: link.label,
      note: meta[link.label]?.note ?? "Profile",
      href: link.href,
      icon: meta[link.label]?.icon ?? FiArrowUpRight,
    })),
    {
      label: "WakaTime",
      note: "Stats",
      href: profile.wakatimeProfile,
      icon: SiWakatime,
    },
    {
      label: "Email",
      note: "Contact",
      href: `mailto:${profile.email}`,
      icon: FiMail,
    },
    { label: "RSS", note: "Feed", href: "/feed.xml", icon: FiRss },
  ];

  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
      {tiles.map(({ label, note, href, icon: Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label} className="bg-surface">
            <a
              href={href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer me",
              })}
              className="group relative flex h-full items-center gap-2.5 px-3 py-3 transition hover:bg-raised min-[400px]:gap-3 min-[400px]:px-3.5 sm:px-4"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-line bg-bg text-muted min-[400px]:h-9 min-[400px]:w-9 transition group-hover:border-accent/40 group-hover:text-accent">
                <Icon aria-hidden className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1 min-[400px]:pr-3">
                <span className="block truncate text-[15px] leading-tight text-ink">
                  {label}
                </span>
                <span className="label mt-1 block truncate text-[10px] text-faint">
                  {note}
                </span>
              </span>
              <FiArrowUpRight
                aria-hidden
                className="absolute right-2.5 top-2.5 hidden h-3.5 w-3.5 text-faint transition min-[400px]:block group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FindMe;
