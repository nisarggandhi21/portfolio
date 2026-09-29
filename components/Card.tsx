import Image from "next/image";
import type { IconType } from "react-icons";

// Outlined side card with an icon title, like the "Work" card
export const SideCard = ({
  icon: Icon,
  title,
  aside,
  children,
}: {
  icon: IconType;
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-zinc-700/40 p-6">
    <h2 className="flex items-center text-sm font-semibold text-zinc-100">
      <Icon aria-hidden className="h-5 w-5 flex-none text-zinc-500" />
      <span className="ml-3">{title}</span>
      {aside && (
        <span className="ml-auto text-xs font-normal text-zinc-400">
          {aside}
        </span>
      )}
    </h2>
    {children}
  </div>
);

// Round badge with the company logo, or its first letter when there is no logo
export const Monogram = ({ label, logo }: { label: string; logo?: string }) => (
  <div className="relative flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full bg-zinc-800 text-sm font-semibold text-zinc-300 shadow-md shadow-black/20 ring-1 ring-zinc-700/50">
    {logo ? (
      <Image
        src={logo}
        alt=""
        width={28}
        height={28}
        unoptimized
        className="h-7 w-7 object-contain"
      />
    ) : (
      label.charAt(0)
    )}
  </div>
);
