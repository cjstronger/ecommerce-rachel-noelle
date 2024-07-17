"use server";

import { revalidatePath } from "next/cache";
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
  const { data, error } = await supabase.from("applicants").insert([user]);
  if (error) console.error("User could not be added to the applicants");
  return { data, error };
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

const SITEURL = "https://rachelnoelle.net";

export async function addImages(formData) {
  const id = formData.get("id");
  const file = formData.get("image");
  const adminUrl = `${SITEURL}/artwork/${id}/admin`;
  const userUrl = `${SITEURL}/artwork/${id}`;
  const fileName = file.name.split(" ").join("").replace("/", "");
  const folderPath = `${id}/${fileName}`;
  const { data, error } = await supabase.storage
    .from("product_images")
    .upload(`${folderPath}`, file);
  if (error) {
    console.error(error);
    return;
  }
  const { data: imageData, error: imageError } = await supabase
    .from("images")
    .insert({
      productId: id,
      imageUrl: `${supabaseUrl}/storage/v1/object/public/product_images/${data.path}`,
    });
  if (imageError) console.error(imageError);
  revalidatePath(adminUrl);
  return { data, imageData, imageError, error };
}

export async function getAllImages() {
  const { data, error } = await supabase.from("images").select("imageUrl");
  if (error) console.error(error);
  if (!data) return [];
  return data;
}

export async function deleteImages(images, id) {
  const imageNames = images.map((image) => image.split("/").slice(9).join(""));
  const imagePaths = imageNames.map((image) => [`${id}/${image}`]);

  for (const path of imagePaths) {
    const { data: storageData, error: storageError } = await supabase.storage
      .from("public_images")
      .remove([path]);
    if (storageError) {
      console.error(storageError);
      return { storageError };
    }
  }

  const { data: tableData, error: tableError } = await supabase
    .from("images")
    .delete()
    .eq("imageUrl", images);
  if (tableError) {
    console.error(tableError);
    return { tableError };
  }

  return { tableData };
}
