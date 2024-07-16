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
        <div className="flex flex-col">
          <button
            onClick={() => setImageClicked(false)}
            className="z-40 size-[3rem] text-fadedBlack bg-bg rounded-full absolute right-10 top-[1rem]"
          >
            <XMarkIcon />
          </button>
          <button
            onClick={handleBack}
            className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-40 absolute left-10 bg-bg top-[40%]"
          >
            <ArrowLeftIcon className="lg:size-10 size-7" />
          </button>
          <button
            onClick={handleNext}
            className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-40 absolute right-10 top-[40%] bg-bg"
          >
            <ArrowRightIcon className="lg:size-10 size-7" />
          </button>
          <Image
            fill
            quality={100}
            src={`${images[index]}`}
            alt={`${name} ${index}`}
            className="z-30 object-contain backdrop-blur-lg"
          />
        </div>
      ) : (
        <div className="aspect-[2/3] md:aspect-[3/2] xl:aspect-[3/1] relative mt-5 mx-11 overflow-hidden">
          {images.length > 0 ? (
            images.map((image, i) =>
              i === index ? (
                <Image
                  fill
                  quality={100}
                  src={`${image}`}
                  alt={`${name} ${index}`}
                  className="object-contain"
                  onClick={() => setImageClicked(true)}
                  key={i}
                />
              ) : (
                <Image
                  fill
                  quality={100}
                  src={`${image}`}
                  alt={`${name} ${index}`}
                  className="object-contain -translate-x-[100%]"
                />
              )
            )
          ) : (
            <p className="text-2xl text-center">No images yet</p>
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
