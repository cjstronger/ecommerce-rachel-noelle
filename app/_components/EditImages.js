"use client";

import { FireIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import useModalClose from "../_hooks/useModalClose";
import SmallImage from "./SmallImage";
import { deleteImages, updateImages } from "../_lib/data-services";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { useImages } from "../_contexts/ImageContext";

const type = "oneRef";

export default function EditImages({ params }) {
  const { contextImages, setContextImages, getImagesById } = useImages();
  const [edit, setEdit] = useState(false);
  const { ref } = useModalClose(handleClose, type);

  function handleDragStart(e, image) {
    e.dataTransfer.setData("image", image);
  }

  async function handleClose() {
    setEdit(false);
    await updateImages(contextImages, params.id);
  }
  async function handleDelete(image) {
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
            className="overflow-scroll h-[70vh] fixed w-[80vw] bg-gradient-to-b from-primaryFaded to-primaryFaded z-20 bottom-1/2 translate-y-1/2 left-1/2 transform -translate-x-1/2 rounded-lg"
          >
            <div className="grid grid-cols-3 mt-[4rem] mx-5">
              <motion.div
                layout
                className="col-span-2 grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 place-items-center justify-center"
              >
                <AnimatePresence>
                  {contextImages.map((image, i) => (
                    <SmallImage
                      contextImages={contextImages}
                      setContextImages={setContextImages}
                      handleDragStart={handleDragStart}
                      getImagesById={getImagesById}
                      image={image}
                      key={i}
                      i={i}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
              <BurnBarrel
                contextImages={contextImages}
                setContextImages={setContextImages}
                handleDelete={handleDelete}
              />
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

function BurnBarrel({ contextImages, setContextImages, handleDelete }) {
  const [active, setActive] = useState(false);
  function handleDragOver(e) {
    e.preventDefault();
    setActive(true);
  }
  function handleDragLeave(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setActive(false);
    }
  }
  function handleDrop(e) {
    const currentImage = e.dataTransfer.getData("image");
    setContextImages(contextImages.filter((image) => image !== currentImage));
    handleDelete(currentImage);
    setActive(false);
  }
  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={` col-span-1 h-[55vh] place-self-end w-[110px] border rounded place-content-center transition-all duration-150 ${
        active
          ? "text-red-800 bg-red-400 border-red-300"
          : "text-neutral-500 bg-neutral-300 border-neutral-400"
      }`}
    >
      {active ? (
        <FireIcon className="animate-bounce size-10 mx-auto" />
      ) : (
        <TrashIcon className="size-10 mx-auto" />
      )}
    </div>
  );
}
