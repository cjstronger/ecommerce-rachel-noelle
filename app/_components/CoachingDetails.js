"use client";

import { useLayoutEffect, useRef, useState } from "react";
import CoachingPhase from "./CoachingPhase";
import Link from "next/link";

export default function CoachingDetails({ id }) {
  const [pageX, setPageX] = useState(null);
  const [clicked, setClicked] = useState(false);
  const scrollLeft = useRef(null);
  const walk = useRef(null);
  const pageXX = useRef(null);

  useLayoutEffect(() => {
    const horizontal = document.querySelector("#horizontal");
    function handleMouseUp() {
      setClicked(false);
    }
    function handleMouseLeave() {
      setClicked(false);
    }
    function handleMouseDown(e) {
      e.preventDefault();
      setPageX(e.pageX - horizontal.offsetLeft);
      setClicked(true);
      scrollLeft.current = horizontal.scrollLeft;
    }
    function handleMouseMove(e) {
      if (!clicked) return;
      pageXX.current = e.pageX - horizontal.offsetLeft;
      walk.current = pageXX.current - pageX;
      horizontal.scrollLeft = scrollLeft.current - walk.current;
    }

    horizontal.addEventListener("mouseup", handleMouseUp);
    horizontal.addEventListener("mouseleave", handleMouseLeave);
    horizontal.addEventListener("mousedown", handleMouseDown);
    horizontal.addEventListener("mousemove", handleMouseMove);

    return () => {
      horizontal.removeEventListener("mouseup", handleMouseUp);
      horizontal.removeEventListener("mouseleave", handleMouseLeave);
      horizontal.removeEventListener("mousedown", handleMouseDown);
      horizontal.removeEventListener("mousemove", handleMouseMove);
    };
  }, [pageX, clicked, pageXX, walk, scrollLeft]);

  return (
    <div id={id} className="flex flex-col gap-8">
      <div
        id="horizontal"
        className="shadow-xl lg:mx-[10rem] bg-[url(/images/beach2.jpg)] bg-center md:h-[55vh] h-[45vh] overflow-scroll active:cursor-grabbing cursor-grab overflow-y-hidden"
        style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      >
        <div className="flex gap-6 lg:gap-10 items-center mt-[4rem] md:mx-[5rem] mx-[2rem]">
          <CoachingPhase phase="1" title="Clarity">
            I will help you understand your purpose and bring awareness to the
            unseen power within you. Together we gain clarity around your
            desires, goals, and dreams
          </CoachingPhase>
          <CoachingPhase phase="2" title="Reprogram">
            Your subconscious won&apos;t let you get to your goals because it is
            scared. Let&apos;s uncover blocks and rewire your brain by
            integrating childhood fears and new beliefs that can set you free.
          </CoachingPhase>
          <CoachingPhase phase="3" title="Realignment">
            Together we will discover why you resist your dreams and then
            renavigate your internal compass. Up Leveling can be scary because a
            part of you has to die. I am here to walk you through this with
            ease.
          </CoachingPhase>
          <CoachingPhase phase="4" title="Conviction">
            Manifesting is all about confidence. Once you believe you have it.
            Its yours! I will help you believe in yourself again and develop
            unwavering self confidence so that you can create your own reality
            with ease.
          </CoachingPhase>
          <CoachingPhase phase="5" title="Aligned Action" color="transparent">
            Last Phase is where we integrate all that we have learned about you
            and all that we have reprogrammed. I help you to create a tangible
            plan that will get you to your desired outcome. You are here to make
            a difference. I will show you what you can you offer the world!
          </CoachingPhase>
        </div>
      </div>
      <div className="flex flex-col mx-2 gap-5">
        <h1 className="mt-5 text-2xl lg:text-4xl text-center mb-5">
          What It Includes
        </h1>
        <h1 className="text-lg lg:text-2xl text-center">
          12 One-hour phone calls with me
        </h1>
        <div>
          <h1 className="text-lg lg:text-2xl text-center">
            Human Design and Astrology
          </h1>
          <h1 className="text-lg lg:text-2xl text-center">
            birth chart analysis
          </h1>
        </div>
        <h1 className="text-lg lg:text-2xl text-center">
          Weekly journal prompts
        </h1>
        <h1 className="text-lg lg:text-2xl text-center">Unlimited texts</h1>
        <h1 className="text-lg lg:text-2xl text-center">
          Personalized homework
        </h1>
        <ul className="font-satoshi text-center text-base lg:text-lg">
          <li>- inner child work</li>
          <li>- how to cultivate your feminine energy</li>
          <li>- practical steps</li>
        </ul>
        <h1 className="text-lg lg:text-2xl text-center">
          In depth game plan for your future goals
        </h1>
      </div>
      <hr className="border-fadedBlack mx-auto w-[80vw] h-2 mt-5 opacity-50" />
      <h1 className="text-center text-lg lg:text-2xl">
        Looking to test the water before diving deep?
      </h1>
      <Link
        href="/startingout"
        className="text-center lg:text-lg text-md font-satoshi border p-2 px-[12vw] border-fadedBlack hover:bg-accentFaded bg-bg transition-all mx-auto"
      >
        Free Consulting or Call
      </Link>
      <h1 className="text-center text-lg lg:text-2xl">
        Otherwise lets go head first!
      </h1>
      <Link
        className="text-center lg:text-lg text-md font-satoshi border p-2 px-[12vw] border-fadedBlack hover:bg-accentFaded bg-bg transition-all mx-auto mb-10"
        href="/apply"
      >
        Apply
      </Link>
    </div>
  );
}
