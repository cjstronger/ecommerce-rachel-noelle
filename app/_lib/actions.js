"use server";

import Stripe from "stripe";
import { getSupabaseAuth } from "./auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_KEY ?? "", {
  apiVersion: "2020-08-27",
});

export async function addImages(formData) {
  const imagePaths = formData.getAll("images");
  const productId = formData.get("productId");
  console.log(imagePaths);
  const imageFileIds = await Promise.all(imagePaths.map(uploadImage));

  const product = await stripe.products.update(productId, {
    images: imageFileIds.map((fileId) => `https://files.stripe.com/${fileId}`),
  });

  console.log(`Updated product with ID: ${product.id}`);
}

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
