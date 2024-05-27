"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector(["data-scroll-container"]),
        smooth: true,
        smartphone: {
          smooth: false,
          getDirection: true,
          breakpoint: 0,
        },
        tablet: {
          smooth: false,
          getDirection: true,
          breakpoint: 0,
        },
      });
    })();
  }, []);

  return (
    <>
      <div className="flex 2xl:aspect-[2/1] md:aspect-[3/4] aspect-[5/9] lg:aspect-[5/5] m-12 justify-center relative">
        <img
          className=" object-none 2xl:object-cover shadow-lg brightness-90"
          src="/images/test.jpg"
          placeholder="blur"
          alt="Rachel-Noelle"
        />
        <div
          data-scroll
          data-scroll-speed="0.3"
          className="absolute flex flex-col items-center place-self-center z-10 lg:text-9xl text-8xl text-primary"
        >
          <h1>Artist</h1>
          <h1>Life Coach</h1>
          <h1>Mother</h1>
        </div>
      </div>
      <div className="px-12 relative bottom-[-5rem] flex flex-col max-w-[90rem] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="z-10 text-6xl">About</h1>
          <Link
            href="/coaching"
            className="font-rubik border p-3 border-slate-400 hover:bg-accent transition-all"
          >
            Need coaching? &rarr;
          </Link>
        </div>
        <p
          id="about"
          className="mx-auto md:text-3xl text-lg bg-accent p-5 mb-[9rem]"
        >
          As a dedicated mother, I have seamlessly integrated my nurturing
          spirit into my role as a coach, inspiring others with my commitment
          and passion. My artistic flair adds a unique touch to everything I do,
          from the creative approaches I bring to my coaching sessions to the
          beautiful, imaginative projects I embark on in my personal time.
          Balancing the demands of motherhood with my coaching endeavors and
          artistic pursuits, I embody a blend of strength, creativity, and
          dedication that truly sets me apart.
        </p>
      </div>
      <div className="flex 2xl:aspect-[2/1] md:aspect-[3/4] aspect-[5/9] lg:aspect-[5/5] m-8 justify-center relative">
        <img
          className=" object-none md:object-cover brightness-75 h-[auto]"
          src="/images/test2.jpg"
          placeholder="blur"
          alt="life-coaching"
        />
        <div className="flex flex-col absolute text-8xl place-self-center z-10 text-primary">
          <h1 data-scroll data-scroll-speed="0.3">
            Coached
          </h1>
        </div>
      </div>
    </>
  );
}
