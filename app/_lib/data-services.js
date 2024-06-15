import { supabase } from "./supabase";

export async function addSub(user) {
  console.log(user);
  const { data, error } = await supabase
    .from("subscribers")
    .insert([user])
    .select();
  if (error) throw new Error("User could not be added to the subscribers");
  return data;
}

export async function checkSubByEmail(email) {
  const { data, error } = await supabase
    .from("subscribers")
    .select("subEmail")
    .eq("subEmail", email);
  if (error) throw new Error("Error finding the email");
  return { data };
}

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
