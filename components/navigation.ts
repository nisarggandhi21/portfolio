export const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Articles", href: "/blog" },
];

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
