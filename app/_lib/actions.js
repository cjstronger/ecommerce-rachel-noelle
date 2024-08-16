"use server";

import Stripe from "stripe";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

const stripe = new Stripe(process.env.STRIPE_KEY ?? "", {
  apiVersion: "2020-08-27",
});

export async function supaLogin(provider) {
  const supabase = createClient();
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
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("error signing out");
  return redirect("/");
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

export async function handleAddToCart(formData) {
  console.log(formData);
}
