import LocoParalax from "./_components/LocoParalax";
import CoachingDetails from "./_components/CoachingDetails";
import CoachingIntro from "./_components/CoachingIntro";
import ApplyLink from "./_components/ApplyLink";
import TitleSeparator from "./_components/TitleSeparator";
import ReviewsAll from "./_components/ReviewsAll";
import LocoParalaxItem from "./_components/LocoParalaxItem";
import Header from "./_components/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Rachel Noelle - Coaching" };

export default function Page() {
  return (
    <>
      <Header />
      <div
        data-scroll-container
        className="flex lg:aspect-[3/1] aspect-[200/201] relative justify-center"
      >
        <Image
          fill
          quality={100}
          className=" object-cover shadow-lg brightness-90"
          src="/images/waterfallpaint..jpeg"
          alt="Rachel-Noelle-Waterfall"
        />
        <LocoParalax>
          <LocoParalaxItem text="3xl" lg="4xl" twoXl="6xl">
            Ready to start choosing
          </LocoParalaxItem>
          <LocoParalaxItem text="3xl" lg="4xl" twoXl="6xl">
            your best life?
          </LocoParalaxItem>
          <LocoParalaxItem text="sm" lg="xl" twoXl="2xl" font="satoshi">
            Apply to work with Rachel
          </LocoParalaxItem>
          <LocoParalaxItem text="sm" lg="xl" twoXl="2xl" font="satoshi">
            expand yourself and manifest
          </LocoParalaxItem>
          <LocoParalaxItem text="sm" lg="xl" twoXl="2xl" font="satoshi">
            your desires with ease
          </LocoParalaxItem>
        </LocoParalax>
      </div>
      <div className="mt-[5rem] flex flex-col">
        <div className="flex items-center mb-4 px-12">
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
      <TitleSeparator titleText="" />
      <CoachingDetails />
      <TitleSeparator titleText="Reviews" />
      <ReviewsAll />
    </>
  );
}
