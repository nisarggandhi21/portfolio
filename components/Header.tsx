"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

import { isActive, navItems } from "./navigation";

const pill =
  "rounded-full bg-zinc-900/60 text-sm font-medium text-zinc-200 shadow-lg shadow-black/20 ring-1 ring-white/10 backdrop-blur";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 pt-6">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative flex justify-end px-4 sm:px-8 md:justify-center lg:px-12">
            {/* Desktop: pill of links */}
            <nav aria-label="Main" className="hidden md:block">
              <ul className={`flex px-3 ${pill}`}>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative block px-3 py-2 transition ${
                        isActive(pathname, item.href)
                          ? "text-accent"
                          : "hover:text-accent"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile: "Menu" pill that opens a panel */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                className={`flex items-center gap-2 px-4 py-2 ${pill}`}
              >
                Menu
                <FiChevronDown aria-hidden className="text-zinc-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <div className="absolute inset-x-4 top-8 rounded-3xl bg-zinc-900 p-8 ring-1 ring-zinc-800">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-zinc-400">Navigation</h2>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="-m-1 p-1 text-zinc-400"
              >
                <FiX aria-hidden className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-6" aria-label="Main">
              <ul className="-my-2 divide-y divide-zinc-100/5 text-base text-zinc-300">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block py-2 ${
                        isActive(pathname, item.href) ? "text-accent" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
