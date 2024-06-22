import LocoParalax from "./_components/LocoParalax";
import CoachingDetails from "./_components/CoachingDetails";
import CoachingIntro from "./_components/CoachingIntro";
import ApplyLink from "./_components/ApplyLink";
import TitleSeparator from "./_components/TitleSeparator";
import ReviewsAll from "./_components/ReviewsAll";
import LocoParalaxItem from "./_components/LocoParalaxItem";
import Header from "./_components/Header";
import Image from "next/image";

export const metadata = { title: "Rachel Noelle - Coaching" };

export default function Page() {
  return (
    <>
      <Header />
      <div
        data-scroll-container
        className="flex lg:aspect-[3/1] sm:aspect-[2/1] aspect-[3/4] mt-[3.8rem] relative justify-center"
      >
        <Image
          fill
          quality={100}
          className=" object-cover shadow-lg brightness-90"
          src="/images/waterfallpaint..jpeg"
          alt="Rachel-Noelle-Waterfall"
        />
        <LocoParalax>
          <LocoParalaxItem text="2xl" lg="4xl" twoXl="6xl">
            Ready to start choosing your best life?
          </LocoParalaxItem>
          <LocoParalaxItem text="xs" lg="lg" twoXl="lg">
            Apply to work with Rachel expand yourself and manifest your desires
            with ease
          </LocoParalaxItem>
        </LocoParalax>
      </div>
      <div className="px-12 relative bottom-[-5rem] flex flex-col max-w-[90rem] mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="z-10 lg:text-5xl text-3xl">I&apos;M RACHEL,</h1>
            <h1 className="z-10 text-md lg:text-3xl">YOUR FEMININE ENERGY</h1>
            <h1 className="z-10 text-md lg:text-3xl">AND INNER WORK COACH</h1>
          </div>
          <ApplyLink buttonText="Apply" hoverColor="accentFaded" />
        </div>
        <p
          id="about"
          className="mx-auto lg:text-lg text-sm bg-accent p-5 mb-[9rem]"
        >
          I empower you to live authentically in alignment with your desires
          through the balance of strength and softness. You are Divine Feminine
          and I am here to remind you of this. My job is to create a
          personalized game plan for you to overcome your limiting beliefs and
          rediscover what you were meant to do on this earth. Together we will
          get excited about what your dreams are and create a plan to manifest
          them. Im so excited to work with you and share with you on this
          abundant journey you are about to partake in.
        </p>
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
