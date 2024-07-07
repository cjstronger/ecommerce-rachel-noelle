"use client";

import Review from "./Review";
import { exampleReviews } from "../_lib/constants";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ReviewsAll() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const variants = {
    move: { translateX: `${reviewIndex * -100}%` },
  };

  function handleBack() {
    if (reviewIndex < 1) {
      setReviewIndex(exampleReviews.length - 1);
      return;
    }
    setReviewIndex(reviewIndex - 1);
  }
  function handleNext() {
    if (reviewIndex === exampleReviews.length - 1) {
      setReviewIndex(0);
      return;
    }
    setReviewIndex(reviewIndex + 1);
  }
  return (
    <div className="flex mb-[5rem] mt-10 overflow-hidden lg:max-w-[80vw] mx-auto items-center justify-center relative">
      <button
        onClick={handleBack}
        className="px-3 md:px-4 h-[50vh] bg-accent hover:bg-accentLower transition-all duration-150 border-2 border-bg z-10 absolute left-0"
      >
        <ArrowLeftIcon className="size-5" />
      </button>
      <motion.div
        id="reviews"
        className="flex justify-center items-center w-full"
        animate={"move"}
        variants={variants}
        initial={{ x: "100%" }}
        transition={{ ease: easeInOut }}
      >
        {exampleReviews.map((review, i) => {
          return <Review review={review} key={i} />;
        })}
      </motion.div>
      <button
        onClick={handleNext}
        className="px-3 md:px-4 h-[50vh] bg-accent hover:bg-accentLower transition-all duration-150 border-2 border-bg z-10 absolute right-0"
      >
        <ArrowRightIcon className="size-5" />
      </button>
    </div>
  );
}
