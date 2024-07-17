"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import useModalClose from "../_hooks/useModalClose";
import SmallImage from "./SmallImage";
import { deleteImages } from "../_lib/data-services";
import toast from "react-hot-toast";

const type = "oneRef";

export default function EditImages({ images, params }) {
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState([]);
  const { ref } = useModalClose(handleClose, type);

  function handleClose() {
    setEdit(false);
  }
  async function handleDelete() {
    await deleteImages(selected, params.id);
    // if (error !== null) toast.error(error);
    // toast.success("Images deleted");
  }
  return (
    <>
      <button onClick={() => setEdit(true)}>Edit</button>
      {edit && (
        <div className="h-[100vh] w-[100vw] backdrop-blur-md fixed top-0 left-1/2 transform -translate-x-1/2">
          <div
            ref={ref}
            className="h-[70vh] fixed w-[80vw] backdrop-blur-lg bg-gradient-to-b from-primaryFaded to-primaryFaded z-20 bottom-1/2 translate-y-1/2 left-1/2 transform -translate-x-1/2 rounded-lg"
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
