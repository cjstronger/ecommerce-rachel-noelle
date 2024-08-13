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
          className=" object-cover shadow-lg brightness-90 object-center"
          blur="true"
          src="/images/beach.jpg"
          alt="Rachel-Noelle-Waterfall"
          priority="true"
        />
      </div>
      <div className="mt-6 flex flex-col items-center justify-center mx-auto max-w-[1000px] px-2">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-5xl md:text-4xl uppercase leading-none text-center">
            Your best life
          </h1>
          <h1 className="ml-1 text-2xl lg:text-5xl md:text-4xl uppercase leading-none text-center">
            is waiting for you
          </h1>
        </div>
        <div className="flex flex-col md:max-w-[800px] max-w-[600px]">
          <div>
            <p className="text-sm md:text-lg lg:text-xl text-center">
              I can help you heal wounds around your
            </p>
            <p className="text-sm md:text-lg lg:text-xl text-center">
              feminine energy with my holistic program
            </p>
          </div>
        </div>
      </div>
      <CoachingIntro />
      <hr className="border-fadedBlack mx-auto w-[80vw] h-2 mt-5 opacity-50" />
      <h1 className="lg:text-lg md:text-sm text-xs pb-2 text-center mt-2">
        I&apos;m Rachel, Your Feminine Energy Life Coach
      </h1>
      <div className="mt-2 flex flex-col bg-accent text-bg pt-6 lg:py-10">
        <div className="flex items-center mx-5 mb-10">
          <div className="flex lg:gap-10 gap-3 items-center mx-auto">
            <div className="relative aspect-auto lg:size-[23rem] md:size-[15rem] size-[9rem]">
              <img
                src="/images/rachel.jpeg"
                alt="Rachel Noelle"
                className="object-cover"
              />
            </div>
            <div className="lg:max-w-[500px] md:max-w-[400px] max-w-[215px]">
              <h1 className="lg:text-5xl md:text-3xl text-2xl">
                I&apos;m here to help
              </h1>
              <h1 className="lg:text-5xl md:text-3xl text-2xl">
                you be the best you
              </h1>
              <p
                id="about"
                className="mx-auto lg:text-lg md:text-sm text-xs md:max-w-[500px] max-w-[400px] pt-2"
              >
                I empower you to live authentically in alignment with your
                desires through the balance of strength and softness. You are
                Divine Feminine and I am here to remind you of this. My job is
                to create a personalized game plan for you to overcome your
                limiting beliefs and rediscover what you were meant to do on
                this earth.{" "}
                <span className="md:inline hidden">
                  Together we will get excited about what your dreams are. I
                  help you do this through inner child work, raising your
                  vibration, getting you aware of your blocks and clearing them,
                  and then creating a plan to start living your best life. Im so
                  excited to work with you and share with you on this abundant
                  journey you are about to partake in.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5">
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
