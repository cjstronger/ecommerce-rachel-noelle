"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { useImages } from "../_contexts/ImageContext";

export default function ImageSlide({ name = "art" }) {
  const [index, setIndex] = useState(0);
  const [imageClicked, setImageClicked] = useState(false);
  const { contextImages } = useImages();

  function handleBack() {
    if (index < 1) {
      setIndex(contextImages.length - 1);
      return;
    }
    setIndex(index - 1);
  }
  function handleNext() {
    if (index === contextImages.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  return (
    <>
      {imageClicked ? (
        <div className="flex flex-col">
          <button
            onClick={() => setImageClicked(false)}
            className="z-40 size-[3rem] text-fadedBlack hover:text-red-600 bg-bg absolute right-10 top-[1rem] transition-all duration-150"
          >
            <XMarkIcon />
          </button>
          {contextImages.length > 1 && (
            <>
              <button
                onClick={handleBack}
                className="p-4 hover:border-bg border-b-2 border-b-transparent transition-all duration-150 z-40 absolute left-10 bg-accent text-bg bottom-[5%]"
              >
                <ArrowLeftIcon className="size-7" />
              </button>
              <button
                onClick={handleNext}
                className="p-4 hover:border-bg border-b-2 border-b-transparent transition-all duration-150 z-40 absolute right-10 bottom-[5%] bg-accent text-bg"
              >
                <ArrowRightIcon className="size-7" />
              </button>
            </>
          )}
          <Image
            fill
            quality={100}
            src={`${contextImages[index]}`}
            alt={`${name} ${index}`}
            className="z-30 object-contain backdrop-blur-lg"
          />
        </div>
      ) : (
        <div className="aspect-[2/3] md:aspect-[3/2] xl:aspect-[3/1] relative mt-5 mx-11 overflow-hidden mb-5">
          {contextImages.length > 0 ? (
            contextImages.map((image, i) =>
              i === index ? (
                <Image
                  fill
                  quality={100}
                  src={`${image}`}
                  alt={`${name} ${index}`}
                  className="object-contain"
                  onClick={() => {
                    setImageClicked(true);
                  }}
                  key={i}
                />
              ) : (
                <Image
                  fill
                  quality={100}
                  src={`${image}`}
                  alt={`${name} ${index}`}
                  className="object-contain -translate-x-[-100%]"
                  key={i}
                />
              )
            )
          ) : (
            <p className="text-2xl text-center">No images yet</p>
          )}
        </div>
      )}
      {contextImages.length > 1 && (
        <div className="flex gap-10 justify-center">
          <button
            onClick={handleBack}
            className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150"
          >
            <ArrowLeftIcon className="lg:size-10 size-7" />
          </button>
          <button
            onClick={handleNext}
            className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150"
          >
            <ArrowRightIcon className="lg:size-10 size-7" />
          </button>
        </div>
      )}
    </>
  );
}
