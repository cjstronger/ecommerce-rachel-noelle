"use client";

import { TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import useModalClose from "../_hooks/useModalClose";
import SmallImage from "./SmallImage";
import { deleteImages, updateImages } from "../_lib/data-services";
import toast from "react-hot-toast";
import { Reorder } from "framer-motion";
import { useImages } from "../_contexts/ImageContext";

const type = "oneRef";

export default function EditImages({ params }) {
  const { contextImages, setContextImages, getImagesById } = useImages();
  const [edit, setEdit] = useState(false);
  const { ref } = useModalClose(handleClose, type);

  async function handleClose() {
    setEdit(false);
    await updateImages(contextImages, params.id);
  }
  async function handleDelete(image) {
    setContextImages(
      contextImages.filter((contextImage) => contextImage !== image)
    );
    const { storageError, tableError } = await deleteImages(image, params.id);
    if (storageError !== null) toast.error(storageError.message);
    if (tableError !== null) toast.error(tableError.message);
    toast.success("Image deleted");
  }
  return (
    <>
      <div className="flex justify-center">
        <button
          className="font-satoshi text-lg p-1 px-6 bg-blue-500 rounded-full text-white hover:px-7 transition-all duration-150"
          onClick={() => setEdit(true)}
        >
          Edit
        </button>
      </div>
      {edit && (
        <div
          style={{ backdropFilter: "blur(10px)" }}
          className="h-[100vh] w-[100vw] backdrop-blur fixed top-0 left-1/2 transform -translate-x-1/2 "
        >
          <div
            ref={ref}
            className="overflow-scroll h-[70vh] fixed w-[80vw] max-w-[800px] bg-gradient-to-b from-primaryFaded to-primaryFaded z-20 bottom-1/2 translate-y-1/2 left-1/2 transform -translate-x-1/2 rounded-lg"
          >
            <div className="flex mt-[4rem] mx-5 gap-5 justify-between">
              <Reorder.Group
                values={contextImages}
                onReorder={setContextImages}
                className="flex flex-col gap-2"
              >
                {contextImages.map((image, i) => (
                  <Reorder.Item
                    value={image}
                    key={image}
                    className="flex gap-5"
                  >
                    <SmallImage image={image} key={i} />
                    <TrashIcon
                      onClick={() => handleDelete(image)}
                      className="size-11 text-neutral-400 my-auto bg-neutral-200 p-2 rounded-full hover:animate-pulse cursor-pointer"
                    />
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
            <button
              className="absolute right-2 top-2 hover:text-red-600 transition-all duration-150"
              onClick={handleClose}
            >
              <XMarkIcon width="35" height="35" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
