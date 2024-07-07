import CoachingDetails from "./_components/CoachingDetails";
import CoachingIntro from "./_components/CoachingIntro";
import TitleSeparator from "./_components/TitleSeparator";
import ReviewsAll from "./_components/ReviewsAll";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import LocoParalax from "./_components/LocoParalax";
import LocoParalaxItem from "./_components/LocoParalaxItem";

export const metadata = { title: "Rachel Noelle - Coaching" };

export default function Page() {
  return (
    <>
      <div
        data-scroll-container
        className="flex lg:aspect-[3/1] aspect-[200/201] relative justify-center"
      >
        <Image
          fill
          quality={100}
          className=" object-cover shadow-lg brightness-90"
          blur
          src="/images/life.jpg"
          alt="Rachel-Noelle-Waterfall"
        />
        <LocoParalax>
          <LocoParalaxItem>.</LocoParalaxItem>
        </LocoParalax>
      </div>
      <div className="mt-6 flex items-center justify-center mx-auto max-w-[1000px] px-4 gap-5 lg:gap-11">
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-5xl md:text-4xl uppercase">
            Ready to start
          </h1>
          <h1 className="text-3xl lg:text-5xl md:text-4xl uppercase">
            choosing your
          </h1>
          <h1 className="text-3xl lg:text-5xl md:text-4xl uppercase">
            best life?
          </h1>
        </div>
        <div className="flex flex-col md:max-w-[400px] max-w-[200px]">
          <div className="flex relative">
            <ChevronLeftIcon className="size-5 mt-0 md:mt-2 absolute" />
            <p className="ml-5 text-sm md:text-lg lg:text-xl">
              everyday we get a choice. We all get to choose what our life looks
              and feels.
            </p>
          </div>
          <div className="flex relative">
            <ChevronLeftIcon className="size-5 mt-0 md:mt-1 absolute" />
            <p className="ml-5 text-sm md:text-lg lg:text-xl">
              If you let me help you expand yourself you will start shifting
              your reality to then manifest your deepest desires.
            </p>
          </div>
          <div className="flex relative">
            <ChevronLeftIcon className="size-5 mt-0 md:mt-1 absolute" />
            <p className="ml-5 text-sm md:text-lg lg:text-xl">
              I help you do this through inner child work, raising your
              vibration, getting you aware of your blocks and clearing them, and
              then creating a plan to start living your best life.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-fadedBlack mx-auto w-[80vw] h-2 mt-5 opacity-50"></hr>
      <div className="mt-5 flex flex-col">
        <div className="flex items-center mx-5">
          <div>
            <h1 className="z-10 lg:text-5xl text-3xl">I&apos;M RACHEL,</h1>
            <h1 className="z-10 text-md lg:text-3xl">YOUR FEMININE ENERGY</h1>
            <h1 className="z-10 text-md lg:text-3xl">AND INNER WORK COACH</h1>
          </div>
        </div>
        <p id="about" className="mx-auto lg:text-lg text-sm bg-bg p-5 mb-5">
          I empower you to live authentically in alignment with your desires
          through the balance of strength and softness. You are Divine Feminine
          and I am here to remind you of this. My job is to create a
          personalized game plan for you to overcome your limiting beliefs and
          rediscover what you were meant to do on this earth. Together we will
          get excited about what your dreams are and create a plan to manifest
          them. Im so excited to work with you and share with you on this
          abundant journey you are about to partake in.
        </p>
        <Link
          className="text-center lg:text-lg text-md font-satoshi border p-2 px-[12vw] border-fadedBlack hover:bg-accentFaded bg-bg transition-all mx-auto mb-10"
          href="/apply"
        >
          Apply
        </Link>
      </div>

      {/*Second section - coaching */}
      <CoachingIntro />
      <TitleSeparator titleText="Phases" />
      <CoachingDetails />
      <TitleSeparator titleText="Reviews" />
      <ReviewsAll />
    </>
  );
}
