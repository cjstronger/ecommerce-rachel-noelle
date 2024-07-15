"use server";

import { supabase, supabaseUrl } from "./supabase";

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

export async function getImages(id) {
  const { data, error } = await supabase
    .from("images")
    .select("imageUrl")
    .eq("productId", id);
  if (error) console.error(error);
  if (!data) return [];
  return data;
}

const SITEURL = "http://localhost:3000";

export async function addImages(id, file) {
  const adminUrl = `${SITEURL}/artwork/${id}/admin`;
  const userUrl = `${SITEURL}/artwork/${id}`;
  const fileName = file.name.split(" ").join("").replace("/", "");
  const folderPath = `${id}/${fileName}`;
  const { data, error } = await supabase.storage
    .from("product_images")
    .upload(`${folderPath}`, file);
  const { data: imageData, error: imageError } = await supabase
    .from("images")
    .insert({
      productId: id,
      imageUrl: `${supabaseUrl}/storage/v1/object/public/product_images/${data.path}`,
    });
  return { data, imageData, imageError, error };
}

export async function getAllImages() {
  const { data, error } = await supabase.from("images").select("imageUrl");
  if (error) console.error(error);
  if (!data) return [];
  return data;
}
