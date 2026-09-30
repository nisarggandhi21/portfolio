import { NextResponse, type NextRequest } from "next/server";

import { workUrl } from "@/lib/site";

const workHost = new URL(workUrl).host;

// work.nisarg-gandhi.com shows the experience page at its root
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];

  if (host === workHost && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(
      new URL(`/work${request.nextUrl.search}`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  // Only the home page needs checking
  matcher: "/",
};
