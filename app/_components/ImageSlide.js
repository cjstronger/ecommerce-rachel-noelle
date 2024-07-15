"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

export default function ImageSlide({ images, name = "art" }) {
  const [index, setIndex] = useState(0);
  const [imageClicked, setImageClicked] = useState(false);
  const image = images[index];

  function handleBack() {
    if (index < 1) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }
  function handleNext() {
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  return (
    <>
      {imageClicked ? (
        <div className="flex justify-end">
          <button
            onClick={() => setImageClicked(false)}
            className="z-40 size-[3rem] text-fadedBlack bg-bg rounded-full mr-2"
          >
            <XMarkIcon />
          </button>
          {images.length > 0 ? (
            <Image
              fill
              quality={100}
              src={`${image}`}
              alt={`${name} ${index}`}
              className="object-contain z-30 backdrop-blur-lg h-full"
            />
          ) : (
            <p>No images yet</p>
          )}
        </div>
      ) : (
        <div className="flex aspect-square md:aspect-[2/1] xl:aspect-[3/1] justify-center relative mt-5">
          {images.length > 0 ? (
            <Image
              fill
              quality={100}
              src={`${image}`}
              alt={`${name} ${index}`}
              className="object-contain"
              onClick={() => setImageClicked(true)}
            />
          ) : (
            <p className="text-2xl">No images yet</p>
          )}
        </div>
      )}
      <div className="flex gap-10 justify-center">
        <button
          onClick={handleBack}
          className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-10"
        >
          <ArrowLeftIcon className="lg:size-10 size-7" />
        </button>
        <button
          onClick={handleNext}
          className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-10"
        >
          <ArrowRightIcon className="lg:size-10 size-7" />
        </button>
      </div>
    </>
  );
}
