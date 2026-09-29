import Link from "next/link";

import Container from "./Container";
import CurrentYear from "./CurrentYear";
import { navItems } from "./navigation";
import { profile } from "@/data";

const Footer = () => (
  <footer className="mt-32 flex-none">
    <div className="border-t border-zinc-700/40 pb-16 pt-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-accent"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-zinc-500">
            © <CurrentYear initialYear={new Date().getFullYear()} />{" "}
            {profile.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  </footer>
);

export default Footer;
