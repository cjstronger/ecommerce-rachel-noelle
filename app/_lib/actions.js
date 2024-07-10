"use server";

import Stripe from "stripe";
import { getSupabaseAuth } from "./auth";

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
  try {
    const { data, error } = await (
      await getSupabaseAuth()
    ).signInWithOAuth({
      provider,
      options: {
        redirectTo: `https://nzszzpxpduixjugtfdla.supabase.co/auth/v1/callback`,
        queryParams: { access_type: "offline", prompt: "consent" },
      },
    });
    if (error) throw new Error("There was an issue signing in", error);
    return { errorMessage: null, url: data.url };
  } catch (error) {
    return { errorMessage: "Error logging in" };
  }
}
