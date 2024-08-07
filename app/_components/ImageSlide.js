"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useImages } from "../_contexts/ImageContext";
import { easeIn, motion } from "framer-motion";

export default function ImageSlide({ name = "art" }) {
  const [index, setIndex] = useState(0);
  const [imageClicked, setImageClicked] = useState(false);
  const { contextImages } = useImages();
  const [touched, setTouched] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const variants = { move: { translateX: `${index * -100}%` } };

  function handleOnScroll() {
    setScrolled(true);
    setTouched((touched) => !touched);
  }

  useEffect(() => {
    const imagesElement = document.querySelector("#images");
    const images = { imagesElement };
    const imageDif =
      images.imagesElement.scrollLeft - (images.imagesElement.offsetWidth - 50);
    setIndex(Number.parseInt(imageDif / images.imagesElement.offsetWidth + 1));
  }, [touched]);

  function handleBack() {
    setScrolled(false);
    if (index < 1) {
      setIndex(contextImages.length - 1);
      return;
    }
    setIndex(index - 1);
  }
  function handleNext() {
    setScrolled(false);
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
            className="z-30 object-contain backdrop-blur"
          />
        </div>
      ) : (
        <>
          <div
            id="images"
            onScroll={handleOnScroll}
            className="mt-5 aspect-[3/3] md:aspect-[3/2] xl:aspect-[3/1] overflow-scroll flex reviews snap-x snap-mandatory mb-5"
          >
            {contextImages.length > 0 ? (
              <div className={`flex w-[${contextImages.length}00vw] h-full`}>
                {contextImages.map((image, i) => (
                  <motion.div
                    variants={variants}
                    initial={{ x: "0%" }}
                    animate={!scrolled && "move"}
                    transition={{ ease: easeIn }}
                    className="w-[96vw] h-full relative snap-start"
                    key={i}
                  >
                    <Image
                      fill
                      quality={100}
                      src={`${image}`}
                      alt={`${name} ${index}`}
                      onClick={() => {
                        setImageClicked(true);
                      }}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-2xl text-center mx-auto">No images yet</p>
            )}
          </div>
          <div className="flex gap-2 flex-row justify-center items-center h-2">
            {contextImages.map((image, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-150 ${
                  i === index ? "size-2 bg-accent" : "size-1 bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
      {contextImages.length > 1 && (
        <div className="hidden gap-10 justify-center lg:flex">
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
