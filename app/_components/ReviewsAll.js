"use client";

import Review from "./Review";
import { exampleReviews } from "../_lib/constants";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function ReviewsAll() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [touched, setTouched] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  let scrollTimeout;

  function handleScrollEnd() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      setScrolled(true);
      setTouched((touched) => !touched);
    }, 200);
  }

  useEffect(() => {
    const reviewElement = document.querySelector("#reviews");
    const reviews = { reviewElement };
    const reviewDifference =
      reviews.reviewElement.scrollLeft - reviews.reviewElement.offsetWidth;
    console.log(reviewDifference / reviews.reviewElement.offsetWidth + 1);
    setReviewIndex(reviewDifference / reviews.reviewElement.offsetWidth + 1);
  }, [touched]);

  const variants = {
    move: { translateX: `${reviewIndex * -100}%` },
  };

  function handleBack() {
    setScrolled(false);
    if (reviewIndex < 1) {
      setReviewIndex(exampleReviews.length - 1);
      return;
    }
    setReviewIndex(reviewIndex - 1);
  }
  function handleNext() {
    setScrolled(false);
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
      <div className="lg:flex justify-end relative lg:mr-[10vw] hidden">
        <button
          onClick={handleBack}
          className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-10 md:static absolute bottom-[-35rem] left-[30vw]"
        >
          <ArrowLeftIcon className="lg:size-10 size-7" />
        </button>
        <button
          onClick={handleNext}
          className="p-4 hover:border-blackTrans border-b-2 border-b-transparent transition-all duration-150 z-10 md:static absolute bottom-[-35rem] right-[30vw]"
        >
          <ArrowRightIcon className="lg:size-10 size-7" />
        </button>
      </div>
      <div
        onScroll={handleScrollEnd}
        id="reviews"
        className="lg:max-w-[80vw] mx-auto items-center justify-center relative h-[60vh] overflow-scroll snap-x snap-mandatory reviews"
      >
        <motion.div
          className="flex justify-center items-center w-full"
          animate={!scrolled && "move"}
          variants={variants}
          initial={{ x: "100%" }}
          transition={{ ease: easeInOut }}
        >
          {exampleReviews.map((review, i) => {
            return <Review review={review} key={i} />;
          })}
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-[-5rem] mb-[5rem] h-2">
        {exampleReviews.map((review, i) => (
          <div
            key={i}
            className={`rounded-full bg-white transition-all duration-150 ${
              i === reviewIndex ? "size-2" : "size-1"
            } `}
          />
        ))}
      </div>
    </>
  );
}
