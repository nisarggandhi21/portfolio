import Link from "next/link";

import { profile } from "@/data";

const menu = [
  { name: "experience", href: "/#experience" },
  { name: "skills", href: "/#skills" },
  { name: "writing", href: "/blog" },
  { name: "contact", href: "/#contact" },
];

// The site title is the page's <h1> only on the homepage; other pages have their own
const SiteHeader = ({
  current,
  isHome = false,
}: {
  current?: string;
  isHome?: boolean;
}) => {
  const Title = isHome ? "h1" : "p";
  return (
    <header className="typo-header">
      <Title className="typo-header-title">
        <Link href="/">{profile.name}</Link>
      </Title>
      <nav className="typo-menu" aria-label="Main">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={current === item.name ? "font-semibold" : undefined}
          >
            /{item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default SiteHeader;
