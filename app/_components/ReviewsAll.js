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
    <div className="mb-[5rem] mt-10 overflow-hidden lg:max-w-[80vw] mx-auto items-center justify-center relative h-[60vh]">
      <div className="flex justify-end">
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
      </div>
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
    </div>
  );
}
