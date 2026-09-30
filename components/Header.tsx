"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Container from "./Container";
import type { NavItem } from "./navigation";
import { profile } from "@/data";

// Round monogram used as the site mark
const Mark = () => (
  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/70 font-serif text-lg leading-none text-ink">
    N
  </span>
);

const Header = ({ items }: { items: NavItem[] }) => {
  const segment = useSelectedLayoutSegment();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-line bg-bg/80 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href={items[0].href} className="flex items-center gap-3">
            <Mark />
            <span className="font-serif text-[1.7rem] leading-none tracking-tight">
              {profile.name}
            </span>
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-7 text-[15px]">
              {items.map((item) => {
                const active = item.segment === segment;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative py-2 transition ${
                        active ? "text-ink" : "text-muted hover:text-ink"
                      }`}
                    >
                      {item.name}
                      {active && (
                        <span className="absolute inset-x-0 -bottom-[3px] h-0.5 rounded-full bg-accent" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-lg bg-cream px-4 py-2 text-[15px] font-medium text-bg transition hover:bg-white sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-ink md:hidden"
          >
            <FiMenu aria-hidden />
          </button>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <div className="absolute inset-x-4 top-4 rounded-xl border border-line bg-surface p-6">
            <div className="flex items-center justify-between">
              <p className="label text-muted">Navigate</p>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="-m-1 p-1 text-muted"
              >
                <FiX aria-hidden className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-4" aria-label="Main">
              <ul className="divide-y divide-line">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block py-3 font-serif text-2xl ${
                        item.segment === segment ? "text-accent" : "text-ink"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 flex justify-center rounded-lg bg-cream px-4 py-3 font-medium text-bg"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
