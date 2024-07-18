"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import useModalClose from "../_hooks/useModalClose";
import SmallImage from "./SmallImage";
import { deleteImages, getImages } from "../_lib/data-services";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const type = "oneRef";

export default function EditImages({ images, params }) {
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState([]);
  const { ref } = useModalClose(handleClose, type);
  const router = useRouter();

  useEffect(() => {
    async function getCurrentImages() {
      const { data } = await getImages(params.id);
      console.log(data);
    }
    getCurrentImages();
  }, []);

  function handleClose() {
    setEdit(false);
    router.refresh();
  }
  async function handleDelete() {
    const { storageError, tableError } = await deleteImages(
      selected,
      params.id
    );
    if (storageError !== null) toast.error(storageError.message);
    if (tableError !== null) toast.error(tableError.message);
    toast.success("Images deleted");
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
        <div className="h-[100vh] w-[100vw] backdrop-blur-md fixed top-0 left-1/2 transform -translate-x-1/2">
          <div
            ref={ref}
            className="h-[70vh] fixed w-[80vw] bg-gradient-to-b from-primaryFaded to-primaryFaded z-20 bottom-1/2 translate-y-1/2 left-1/2 transform -translate-x-1/2 rounded-lg"
          >
            <div className="grid grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-[2rem] mt-[4rem] place-items-center justify-center mx-5">
              {images.map((image, i) => (
                <SmallImage
                  image={image}
                  key={i}
                  onClick={() => {
                    if (!selected.includes(image)) {
                      setSelected([...selected, image]);
                    } else
                      setSelected(
                        selected.filter(
                          (alreadySelectedImage) =>
                            alreadySelectedImage !== image
                        )
                      );
                  }}
                  selected={selected}
                />
              ))}
            </div>
            <button
              className="absolute right-2 top-2 hover:text-red-600 transition-all duration-150"
              onClick={handleClose}
            >
              <XMarkIcon width="35" height="35" />
            </button>
            <button
              onClick={handleDelete}
              className="rounded-full text-white bg-red-600 font-satoshi py-2 px-4 absolute bottom-6 right-3"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}
