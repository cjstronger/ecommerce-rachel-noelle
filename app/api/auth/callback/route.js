import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(request) {
  let { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  const cookieStore = cookies();
  const applyVisited = cookieStore.get("applyVisited");
  if (applyVisited?.value === "true") {
    origin = `${origin}/apply`;
  }
  cookieStore.set("applyVisited", false);

  return NextResponse.redirect(`${origin}`);
}
