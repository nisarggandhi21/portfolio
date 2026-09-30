import { NextResponse, type NextRequest } from "next/server";

import { rootDomain, siteUrl, workUrl } from "@/lib/site";

const workHost = new URL(workUrl).host;

// work.nisarg-gandhi.com serves the experience page; everything else lives
// on the main domain
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname, search } = request.nextUrl;

  if (host === workHost) {
    if (pathname === "/") {
      return NextResponse.rewrite(new URL(`/work${search}`, request.url));
    }
    const target =
      pathname === "/work" ? new URL(workUrl) : new URL(pathname, siteUrl);
    target.search = search;
    return NextResponse.redirect(target, 308);
  }

  // Old /work links on the main domain move to the subdomain
  if (
    pathname === "/work" &&
    (host === rootDomain || host.endsWith(`.${rootDomain}`))
  ) {
    return NextResponse.redirect(workUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Pages only: skip Next.js internals and files such as images and feed.xml
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
