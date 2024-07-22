"use server";

import { NextResponse } from "next/server";
import { updateSession } from "./app/utils/supabase/middleware";
import { createClient } from "./app/utils/supabase/server";

export const config = {
  matcher: ["/pricing", "/artwork/:path*", "/apply/applicants"],
};

export default async function middleware(req) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/artwork/") && pathname !== "/artwork") {
    if (!pathname.includes("/admin")) {
      const redirectUrl = new URL(`${pathname}/admin`, req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }
  } else if (pathname.startsWith("/pricing")) {
    if (user?.app_metadata?.role !== "approved") {
      const redirectUrl = new URL("/", req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }
  } else if (
    pathname.startsWith("/apply/applicants") &&
    pathname !== "/apply"
  ) {
    if (user?.role !== "service_role") {
      const redirectUrl = new URL(`/apply`, req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }
  }
}
