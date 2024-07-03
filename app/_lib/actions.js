"use server";

import { signIn, signOut, auth } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
  console.log(auth);
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function handleAddToCart(formData) {
  const id = formData.get("id");
  console.log(formData);
}
