import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const TopBar = ({ showBlog }: { showBlog: boolean }) => (
  <header className="flex items-center justify-between py-6 print:hidden">
    <Link
      href="/"
      className="text-sm font-medium transition hover:opacity-70"
    >
      Nisarg Gandhi
    </Link>
    <nav className="flex items-center gap-1 text-sm text-muted-foreground">
      {showBlog && (
        <Link
          href="/blog"
          className="rounded-full px-3 py-1.5 transition hover:bg-secondary hover:text-foreground"
        >
          Blog
        </Link>
      )}
      <ThemeToggle />
    </nav>
  </header>
);

export default TopBar;
