"use server";

import { supabase } from "./supabase";

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

export async function addImages(formData) {
  const id = formData.get("id");
  const file = formData.get("image");
  const folderPath = `${id}/${file.name}`;
  const { data, error } = await supabase.storage
    .from("product_images")
    .upload(`${folderPath}`, file);
  if (error) console.error(error);
  return data;
}
