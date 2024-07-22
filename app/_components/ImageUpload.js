"use client";

import { useState } from "react";
import { addImages } from "../_lib/data-services";
import toast from "react-hot-toast";
import { useImages } from "../_contexts/ImageContext";

export default function ImageUpload({ params }) {
  const { getImagesById } = useImages();
  const [file, setFile] = useState(null);

  async function handleUpload() {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", params.id);
    const { imageError, error } = await addImages(formData);
    if (imageError !== undefined) {
      toast.error(imageError?.message);
      return;
    }
    if (error !== undefined) {
      toast.error(error?.message);
      return;
    }
    toast.success(`${file.name} Uploaded!`);
    getImagesById(params.id);
  }

  return (
    <div className="flex justify-between gap-4 flex-col items-center">
      <div
        onSubmit={handleUpload}
        className="flex gap-[6rem] justify-between items-center"
      >
        <input
          className="file:text-accent file:border-0 file:rounded-full file:font-satoshi font-satoshi file:py-2 file:px-5 mr-[-5rem] file:hover:cursor-pointer"
          type="file"
          name="image"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <input hidden defaultValue={params.id} name="id"></input>
        <button
          onClick={handleUpload}
          className="rounded-full py-2 px-5 bg-blue-500 text-white font-satoshi"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
