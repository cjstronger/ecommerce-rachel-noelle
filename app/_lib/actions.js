"use server";

import { signIn, signOut, auth } from "./auth";

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
  console.log(auth);
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
