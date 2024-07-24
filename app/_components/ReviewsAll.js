"use client";

import Review from "./Review";
import { exampleReviews } from "../_lib/constants";
import { easeInOut, motion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ReviewsAll() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [touched, setTouched] = useState(false);

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
    if (!touched && reviewIndex !== 0) {
      setReviewIndex(0);
    }
    if (reviewIndex === exampleReviews.length - 1) {
      setReviewIndex(0);
      return;
    }
    setReviewIndex(reviewIndex + 1);
  }
  return (
    <>
      <div className="flex justify-end relative lg:mr-[8vw]">
        <button
          onClick={handleBack}
          className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-10 md:static absolute bottom-[-35rem] left-[30vw]"
        >
          <ArrowLeftIcon className="lg:size-10 size-7" />
        </button>
        <button
          onClick={handleNext}
          onTouchStart={() => setTouched(true)}
          className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-10 md:static absolute bottom-[-35rem] right-[30vw]"
        >
          <ArrowRightIcon className="lg:size-10 size-7" />
        </button>
      </div>
      <div className="mb-[5rem] lg:max-w-[80vw] mx-auto items-center justify-center relative h-[60vh] overflow-scroll snap-x snap-mandatory reviews">
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
    </>
  );
}
