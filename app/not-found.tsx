import Link from "next/link";

import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center text-center">
        <p className="text-base font-semibold text-zinc-500">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-400">
          Sorry, I couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-zinc-800/50 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800 hover:text-zinc-50"
          >
            Go back home
          </Link>
          <Link
            href="/blog"
            className="rounded-md px-4 py-2 text-sm font-medium text-zinc-400 transition hover:text-accent"
          >
            Read the articles
          </Link>
        </div>
      </div>
    </Container>
  );
}
