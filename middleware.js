"use server";

import { NextResponse } from "next/server";
import { updateSession } from "./app/utils/supabase/middleware";
import { createClient } from "./app/utils/supabase/server";

export const config = {
  matcher: ["/pricing", "/artwork/:path*"],
};

export default async function middleware(req) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/artwork/") && pathname !== "/artwork") {
    if (user?.role === "service_role" && !pathname.includes("/admin")) {
      const redirectUrl = new URL(`${pathname}/admin`, req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }
  } else {
    if (pathname.startsWith("/pricing")) {
      if (user?.app_metadata?.role !== "approved") {
        const redirectUrl = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(redirectUrl);
      }
    }
  }
  return await updateSession(req);
}
