"use client";

import { useState, useTransition } from "react";
import { addImages } from "../_lib/data-services";
import toast from "react-hot-toast";
import { useImages } from "../_contexts/ImageContext";
import SpinnerMini from "./SpinnerMini";
import { CameraIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function ImageUpload({ params }) {
  const { getImagesById } = useImages();
  const [files, setFiles] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [previews, setPreviews] = useState([]);

  function handleUpload() {
    startTransition(async () => {
      const formData = new FormData();
      files.forEach((file, i) => {
        formData.append(`image${i}`, file);
      });
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
      toast("Images Uploaded!");
      getImagesById(params.id);
    });
  }

  function handleFileChange(e) {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setPreviews(selectedFiles.map((file) => URL.createObjectURL(file)));
  }

  return (
    <div className="flex justify-between gap-4 flex-col items-center py-2">
      <div
        onSubmit={handleUpload}
        className="flex gap-[6rem] justify-between items-center"
      >
        <label htmlFor="imagesInput" className="hover:cursor-pointer relative">
          <input
            id="imagesInput"
            className="hidden"
            type="file"
            name="image"
            multiple
            onChange={handleFileChange}
          />
          {previews.length > 0 ? (
            <div className="flex gap-2">
              {previews.map((src, i) => (
                <Image
                  width="40"
                  height="40"
                  className="object-cover rounded-lg"
                  quality={10}
                  src={src}
                  key={i}
                  alt={i}
                />
              ))}
            </div>
          ) : (
            <CameraIcon height="45" className="bg-blue-500 rounded-xl p-1" />
          )}
        </label>
        <input hidden defaultValue={params.id} name="id"></input>
        {files.length > 0 && (
          <button
            onClick={handleUpload}
            className="rounded-full px-5 py-2 bg-blue-500 text-white font-satoshi hover:px-6 transtion-all duration-150"
          >
            {isPending ? <SpinnerMini /> : "Upload"}
          </button>
        )}
      </div>
    </div>
  );
}
