import { NextResponse } from "next/server";
import { getSupabaseAuth } from "@/app/_lib/auth";

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = getSupabaseAuth();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(`${origin}`);
}
