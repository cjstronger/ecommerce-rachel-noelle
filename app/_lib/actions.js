"use server";

import Stripe from "stripe";
import { getSupabaseAuth } from "./auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPnE_KEY ?? "", {
  apiVersion: "2020-08-27",
});

export async function supaLogin(provider) {
  const supabase = getSupabaseAuth();
  const origin = headers().get("origin");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/api/auth/callback`,
      queryParams: { access_type: "offline", prompt: "consent" },
    },
  });
  if (error) throw new Error("There was an issue signing in", error);
  return redirect(data.url);
}

export async function supaLogout() {
  const supabase = getSupabaseAuth();
  const { error } = await supabase.auth.signOut();
}

export async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_KEY ?? "", {
    apiVersion: "2020-08-27",
  });

  const res = await stripe.prices.list({
    expand: ["data.product"],
    limit: 100,
  });
  const data = res.data;
  return data;
}
