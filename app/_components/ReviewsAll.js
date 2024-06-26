"use client";

import Review from "./Review";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

export default function ReviewsAll() {
  const reviews = useRef(null);
  useLayoutEffect(() => {
    let context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelectorAll("#reviews"),
          start: "top bottom",
          end: "+300px bottom",
          scrub: 2,
        },
      });
      timeline.from(reviews.current, { translateX: "-1000px" });
    });
    return () => context.revert();
  }, []);
  const exampleReviews = [
    {
      fullName: "Sandy Strong",
      stars: 2,
      reviewText: "Best coaching I've never experienced!",
    },
    {
      fullName: "Carolyn Grossman",
      stars: 5,
      reviewText:
        "My own daughter is starting this so I had to give her a free 5 fuh 5!",
    },
    {
      fullName: "Bob Marley",
      stars: 4,
      reviewText: "What the fuck is he doin here?",
    },
  ];
  return (
    <div
      ref={reviews}
      id="reviews"
      className="flex lg:flex-row flex-col gap-10 justify-center my-10 overflow-hidden pb-[15rem] items-center"
    >
      {exampleReviews.map((review) => (
        <Review review={review} key={review.fullName} />
      ))}
    </div>
  );
}
