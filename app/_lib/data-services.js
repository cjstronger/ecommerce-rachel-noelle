"use server";

import { supabase, supabaseAdmin, supabaseUrl } from "./supabase";

export async function checkApplicantByEmail(email) {
  const { data, error } = await supabaseAdmin
    .from("applicants")
    .select("appEmail")
    .eq("appEmail", email);
  if (error) throw new Error("Error finding the email");
  return { data };
}

export async function getApplicants() {
  const { data, error } = await supabaseAdmin.from("applicants").select("*");
  if (error) console.error("Applicants could not be retrieved");
  return { data };
}

export async function addApplicant(user) {
  const { data, error } = await supabaseAdmin.from("applicants").insert([user]);
  if (error) console.error("User could not be added to the applicants");
  return { data, error };
}

export async function approveApplicant(id) {
  let userHasNotLoggedIn = false;

  const { data: userData, error: userError } =
    await supabaseAdmin.auth.admin.getUserById(`${id}`);

  const { user } = userData;

  if (userError) {
    throw new Error("Error getting the user with that id");
  }

  if (!user?.id) {
    userHasNotLoggedIn = true;
    return { userHasNotLoggedIn };
  }

  const userId = user.id;

  const { data: roleData, error: roleError } =
    await supabaseAdmin.auth.admin.updateUserById(userId, {
      app_metadata: { role: "approved" },
    });
  if (roleError)
    throw new Error(
      "Error when adding the role approved to the user",
      roleError
    );

  const { data, error } = await supabaseAdmin
    .from("applicants")
    .update({ approved: true })
    .eq("appId", id);
  if (error) console.error(error);

  return { userHasNotLoggedIn, data, roleData };
}

export async function addSubscriber(user) {
  const { data, error } = await supabaseAdmin
    .from("subscribers")
    .insert([user]);
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
  return data && data.map((item) => item.imageUrl);
}

export async function addImages(formData) {
  const file = formData.get("image");
  const id = formData.get("id");
  const fileName = file.name.split(" ").join("").replace("/", "");
  const folderPath = `${id}/${fileName}`;
  const { data, error } = await supabaseAdmin.storage
    .from("product_images")
    .upload(`${folderPath}`, file);
  if (error) {
    console.error(error);
    return { error };
  }
  const { data: imageData, error: imageError } = await supabaseAdmin
    .from("images")
    .insert({
      productId: id,
      imageUrl: `${supabaseUrl}/storage/v1/object/public/product_images/${data.path}`,
    });
  if (imageError) {
    console.error(imageError);
    return { imageError };
  }
  return { imageError: undefined, error: undefined };
}

export async function getAllImages() {
  const { data, error } = await supabase.from("images").select("imageUrl");
  if (error) console.error(error);
  if (!data) return [];
  return data;
}

export async function deleteImages(image, id) {
  const imageName = image.split("/").slice(9).join("");
  const imagePath = `${id}/${imageName}`;

  const { data: storageData, error: storageError } = await supabaseAdmin.storage
    .from("product_images")
    .remove(imagePath);
  if (storageError) {
    return { storageError };
  }

  const { data: tableData, error: tableError } = await supabaseAdmin
    .from("images")
    .delete()
    .eq("imageUrl", image);
  if (tableError) {
    return { tableError };
  }

  return { storageError: null, tableError: null };
}

export async function updateImages(images, id) {
  const { data: imagesData, error: fetchError } = await supabaseAdmin
    .from("images")
    .select("created_at, imageUrl, productId")
    .eq("productId", id);

  if (fetchError) {
    console.error(fetchError);
    return { fetchError };
  }

  const updatedImages = imagesData.map((image, i) => {
    const createdAt = new Date();
    const seconds = createdAt.getSeconds();
    const newSeconds = Math.floor(seconds / 10) * 10 + i + 1;
    createdAt.setSeconds(newSeconds);
    return {
      imageUrl: image.imageUrl,
      createdAt: createdAt.toISOString(),
    };
  });

  const imageIndexMap = new Map();
  images.forEach((image, index) => {
    imageIndexMap.set(image, index);
  });

  updatedImages.sort((a, b) => {
    return imageIndexMap.get(a.imageUrl) - imageIndexMap.get(b.imageUrl);
  });

  for (const image of updatedImages) {
    const { error: updateError } = await supabaseAdmin
      .from("images")
      .update({ created_at: image.createdAt })
      .eq("imageUrl", image.imageUrl);

    if (updateError) {
      console.error(updateError);
      return { errors: [updateError] };
    }
  }

  return { errors: null };
}
