import { mainHref, workHref } from "@/lib/site";

// `segment` is the top-level route an item belongs to, used to mark it active
export const navItems = [
  { name: "Home", href: mainHref("/"), segment: null },
  { name: "Articles", href: mainHref("/blog"), segment: "blog" },
  { name: "Work", href: workHref, segment: "work" },
];

export type NavItem = (typeof navItems)[number];
