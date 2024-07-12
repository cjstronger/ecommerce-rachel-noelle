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

export async function addImages(formData) {
  const id = formData.get("id");
  const file = formData.get("image");
  const fileName = file.name.split(" ").join("").replace("/", "");
  console.log(fileName);
  const folderPath = `${id}/${fileName}`;
  const { data, error } = await supabase.storage
    .from("product_images")
    .upload(`${folderPath}`, file);
  if (error) console.error(error);
  const { data: imageData, error: imageError } = await supabase
    .from("images")
    .insert({
      productId: id,
      imageUrl: `${supabaseUrl}/storage/v1/object/public/product_images/${data.path}`,
    });
  if (imageError) console.error(imageError);
  console.log(data, imageData);
  return { data, imageData };
}

export async function getImages() {
  const { data, error } = await supabase.from("images").select("/*");
  if (error) console.error(error);
  console.log(data);
  return data;
}
