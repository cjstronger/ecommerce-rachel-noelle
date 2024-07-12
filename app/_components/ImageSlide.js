"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

export default function ImageSlide({ images, name = "art" }) {
  const [index, setIndex] = useState(0);
  const image = images[index];

  function handleBack() {
    if (index < 1) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(reviewIndex - 1);
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
      <button
        onClick={handleBack}
        className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-10 md:static absolute bottom-0 left-[8rem]"
      >
        <ArrowLeftIcon className="lg:size-10 size-7" />
      </button>
      <button
        onClick={handleNext}
        className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-10 md:static absolute bottom-0 right-[8rem]"
      >
        <ArrowRightIcon className="lg:size-10 size-7" />
      </button>
      <div className="relative">
        {images.length ? (
          <Image
            fill
            quality={100}
            src={`${image}`}
            alt={`${name} ${index}`}
            className="object-contain"
          />
        ) : (
          <p>NO images</p>
        )}
      </div>
    </>
  );
}
