import Link from "next/link";

import Container from "./Container";
import CurrentYear from "./CurrentYear";
import { navItems } from "./navigation";
import { profile } from "@/data";

// The work site's footer leaves out the main site's pages and feed
const Footer = ({ variant = "site" }: { variant?: "site" | "work" }) => (
  <footer className="mt-32 border-t border-line">
    <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-muted">
        {variant === "site" &&
          navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.name}
            </Link>
          ))}
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            {link.label}
          </a>
        ))}
        {variant === "site" ? (
          <a href="/feed.xml" className="transition hover:text-ink">
            RSS
          </a>
        ) : (
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-ink"
          >
            Email
          </a>
        )}
      </div>
      <p className="label text-faint">
        © <CurrentYear initialYear={new Date().getFullYear()} /> {profile.name}
      </p>
    </Container>
  </footer>
);

export default Footer;
