"use client";

import Image from "next/image";
import test from "@/public/images/test.jpg";
import Link from "next/link";
import test2 from "@/public/images/test2.jpg";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <div className="p-12 flex justify-center relative 2xl:aspect-[2/1] md:aspect-square aspect-[2/3]">
        <Image
          className="object-none 2xl:object-cover shadow-lg rounded-[3rem] brightness-90"
          src={test}
          width="2000"
          height="2000"
          quality={100}
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
      <div className="m-12 relative bottom-[-5rem]">
        <Link
          href="/coaching"
          className="absolute right-0 font-rubik border rounded-full p-3 border-slate-400 hover:bg-accent transition-all"
        >
          Need coaching?{" "}
          <span className="scale-x-0 hover:scale-x-100">&rarr;</span>
        </Link>
        <h1 className="z-10 text-6xl 2xl:mx-[15rem] my-5">About</h1>
        <p
          id="about"
          className="max-w-[90rem] mx-auto md:text-3xl text-lg bg-accent rounded-xl p-5 mb-[9rem]"
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
      <div className="flex 2xl:aspect-[2/1] md:aspect-square aspect-[2/3] p-12 justify-center">
        <Image
          className="object-none 2xl:object-cover rounded-[3rem] brightness-75"
          src={test2}
          height="2000"
          width="2000"
          quality={100}
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
