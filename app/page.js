import CoachingDetails from "./_components/CoachingDetails";
import CoachingIntro from "./_components/CoachingIntro";
import TitleSeparator from "./_components/TitleSeparator";
import ReviewsAll from "./_components/ReviewsAll";
import Image from "next/image";
import Link from "next/link";

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
          sizes="100vw"
          className=" object-cover shadow-lg brightness-90"
          blur="true"
          src="/images/life.jpg"
          alt="Rachel-Noelle-Waterfall"
          priority="true"
        />
      </div>
      <div className="mt-6 flex flex-col items-center justify-center mx-auto max-w-[1000px] px-2 gap-5 lg:gap-11">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-5xl md:text-4xl uppercase leading-none">
            Ready to start
          </h1>
          <h1 className="text-2xl lg:text-5xl md:text-4xl uppercase leading-none">
            choosing your
          </h1>
          <h1 className="text-[2.5rem] lg:text-[5rem] md:text-6xl uppercase leading-none text-center">
            best life?
          </h1>
        </div>
        <div className="flex flex-col md:max-w-[800px] max-w-[600px]">
          <div className="relative">
            <p className="text-sm md:text-lg lg:text-xl text-center">
              Everyday we have a choice.
            </p>
            <p className="text-sm md:text-lg lg:text-xl">
              We all get to choose what our life looks and feels like.
            </p>
          </div>
        </div>
      </div>
      <CoachingIntro />
      <hr className="border-fadedBlack mx-auto w-[80vw] h-2 mt-5 opacity-50"></hr>
      <div className="mt-5 flex flex-col">
        <div className="flex items-center mx-5">
          <div className="leading-3">
            <h1 className="z-10 lg:text-5xl text-3xl">I&apos;M RACHEL,</h1>
            <h1 className="z-10 text-md lg:text-3xl">
              YOUR FEMININE ENERGY AND INNER WORK COACH
            </h1>
          </div>
        </div>
        <p
          id="about"
          className="mx-auto lg:text-lg text-sm bg-bg px-5 py-3 mb-5"
        >
          I empower you to live authentically in alignment with your desires
          through the balance of strength and softness. You are Divine Feminine
          and I am here to remind you of this. My job is to create a
          personalized game plan for you to overcome your limiting beliefs and
          rediscover what you were meant to do on this earth. Together we will
          get excited about what your dreams are. I help you do this through
          inner child work, raising your vibration, getting you aware of your
          blocks and clearing them, and then creating a plan to start living
          your best life. Im so excited to work with you and share with you on
          this abundant journey you are about to partake in.
        </p>
        <Link
          className="text-center lg:text-lg text-md font-satoshi border p-2 px-[12vw] border-fadedBlack hover:bg-accentFaded bg-bg transition-all mx-auto mb-10"
          href="/apply"
        >
          Apply
        </Link>
      </div>

      {/*Second section - coaching */}
      <TitleSeparator titleText="Phases" />
      <CoachingDetails id="coaching" />
      <TitleSeparator titleText="Reviews" />
      <ReviewsAll />
    </>
  );
}
