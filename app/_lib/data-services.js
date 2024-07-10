"use client";

import { useRouter } from "next/router";
import { supabase } from "./supabase";

const router = useRouter();

export async function checkApplicantByEmail(email) {
  const { data, error } = await supabase
    .from("applicants")
    .select("appEmail")
    .eq("appEmail", email);
  if (error) throw new Error("Error finding the email");
  return { data };
}

export async function addApplicant(user) {
  const { data, error } = await supabase
    .from("applicants")
    .insert([user])
    .select();
  if (error) throw new Error("User could not be added to the applicants");
  return data;
}

export async function supaLogout() {
  const { data, error } = await supabase.auth.signOut();
}
