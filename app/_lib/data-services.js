"use server";

import { revalidatePath } from "next/cache";
import { supabase, supabaseUrl } from "./supabase";
import { createClient } from "../utils/supabase/server";

export async function checkApplicantByEmail(email) {
  const { data, error } = await supabase
    .from("applicants")
    .select("appEmail")
    .eq("appEmail", email);
  if (error) throw new Error("Error finding the email");
  return { data };
}

export async function getApplicants() {
  const { data, error } = await supabase.from("applicants").select("*");
  if (error) console.error("Applicants could not be retrieved");
  return { data };
}

export async function addApplicant(user) {
  const { data, error } = await supabase.from("applicants").insert([user]);
  if (error) console.error("User could not be added to the applicants");
  return { data, error };
}

export async function approveApplicant(email) {
  const supabaser = createClient();
  const {
    data: { users },
    error: userError,
  } = await supabaser.auth.admin.listUsers();
  if (userError) console.error("User Error", userError);

  const [userToUpdate] = users.filter((user) => {
    return user.email === email;
  });

  const userId = userToUpdate.id;

  const { data: roleData, error: roleError } =
    await supabaser.auth.admin.updateUserById(userId, {
      app_metadata: { role: "approved" },
    });
  if (roleError) throw new Error("Error in the role add", roleError);

  const { data, error } = await supabase
    .from("applicants")
    .update({ approved: true })
    .eq("appEmail", email);
  if (error) console.error(error);

  return { data, roleData };
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
  const file = formData.get("image");
  const id = formData.get("id");
  const adminUrl = `${SITEURL}/artwork/${id}/admin`;
  const userUrl = `${SITEURL}/artwork/${id}`;
  const fileName = file.name.split(" ").join("").replace("/", "");
  const folderPath = `${id}/${fileName}`;
  const { data, error } = await supabase.storage
    .from("product_images")
    .upload(`${folderPath}`, file);
  if (error) {
    console.error(error);
    return { error };
  }
  const { data: imageData, error: imageError } = await supabase
    .from("images")
    .insert({
      productId: id,
      imageUrl: `${supabaseUrl}/storage/v1/object/public/product_images/${data.path}`,
    });
  if (imageError) {
    console.error(imageError);
    return { imageError };
  }
  revalidatePath(adminUrl);
  return { imageError: undefined, error: undefined };
}

export async function getAllImages() {
  const { data, error } = await supabase.from("images").select("imageUrl");
  if (error) console.error(error);
  if (!data) return [];
  return data;
}

export async function deleteImages(images, id) {
  const imageNames = images.map((image) => image.split("/").slice(9).join(""));
  const imagePaths = imageNames.map((image) => `${id}/${image}`);

  const { data: storageData, error: storageError } = await supabase.storage
    .from("product_images")
    .remove(imagePaths);
  if (storageError) {
    return { storageError };
  }

  const { data: tableData, error: tableError } = await supabase
    .from("images")
    .delete()
    .in("imageUrl", images);
  if (tableError) {
    return { tableError };
  }

  return { storageError: null, tableError: null };
}
