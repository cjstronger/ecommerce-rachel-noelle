"use client";

import { useState } from "react";
import { addImages } from "../_lib/data-services";
import toast from "react-hot-toast";

export default function ImageUpload({ params }) {
  const [image, setImage] = useState("");
  console.log(image);
  function handleUpload(e) {
    e.preventDefault();
    const { imageError, error } = addImages(params.id, image);
    if (imageError) toast.error(imageError);
    if (error) toast.error(error);
    toast.success("Image Uploaded Successfully");
  }
  return (
    <div className="flex justify-between gap-4 lg:flex-row flex-col items-baseline">
      <form className="flex gap-[6rem] justify-between items-center">
        <input
          className="file:text-accent file:border-0 file:rounded-full file:font-satoshi font-satoshi file:py-2 file:px-5 mr-[-5rem] file:hover:cursor-pointer"
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          onClick={handleUpload}
          className="rounded-full py-2 px-5 bg-blue-500 text-white font-satoshi"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
