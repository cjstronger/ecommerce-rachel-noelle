"use server";

import { useCart } from "../_contexts/CartContext";
import { signIn, signOut, auth } from "./auth";
const { addCartItem } = useCart;

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
  console.log(auth);
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function handleAddToCart(formData) {
  const id = formData.get("id");
  await addCartItem(id);
}
