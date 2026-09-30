import { NextResponse, type NextRequest } from "next/server";

import { workUrl } from "@/lib/site";

const workHost = new URL(workUrl).host;
const mainDomain = workHost.replace(/^work\./, "");
// A path with no page behind it; unlike the prerendered /404 it is served
// with a 404 status
const notFound = "/_not-found-page";

// One codebase, two sites: work.nisarg-gandhi.com is a single page with the
// experience, and the main domain has everything else
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname, search } = request.nextUrl;

  if (host === workHost) {
    const path = pathname === "/" ? `/work${search}` : notFound;
    return NextResponse.rewrite(new URL(path, request.url));
  }

  // The main domain doesn't serve the work page (previews and local dev do)
  if (pathname.startsWith("/work") && host.endsWith(mainDomain)) {
    return NextResponse.rewrite(new URL(notFound, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Pages only: skip Next.js internals and files such as images and feed.xml
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
