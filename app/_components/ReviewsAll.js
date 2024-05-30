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
          start: "+350px center",
          end: `${reviews.current.offsetHeight + 2000} bottom`,
          scrub: 2,
          pin: true,
          // markers: true,
        },
      });
      timeline.from(reviews.current, { translateX: "-1500px" });
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
      className="flex gap-10 justify-center my-10 overflow-hidden"
    >
      {exampleReviews.map((review) => (
        <Review review={review} key={review.fullName} />
      ))}
    </div>
  );
}