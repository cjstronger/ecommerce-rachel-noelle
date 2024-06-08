import LocoParalax from "./_components/LocoParalax";
import CoachingDetails from "./_components/CoachingDetails";
import CoachingIntro from "./_components/CoachingIntro";
import ApplyLink from "./_components/ApplyLink";
import TitleSeparator from "./_components/TitleSeparator";
import ReviewsAll from "./_components/ReviewsAll";
import LocoParalaxItem from "./_components/LocoParalaxItem";
import { SubForm } from "./_components/SubForm";

export default function Page() {
  return (
    <>
      <div
        data-scroll-container
        className="flex 2xl:aspect-[2/1] md:aspect-[3/4] lg:aspect-[5/5] aspect-[5/9] m-12 mt-[9rem] h-[1000] justify-center"
      >
        <img
          className=" object-cover 2xl:object-cover shadow-lg brightness-90"
          src="/images/test-min.jpg"
          alt="Rachel-Noelle"
        />
        <LocoParalax>
          <LocoParalaxItem>Balance your Energy</LocoParalaxItem>
          <LocoParalaxItem>Manifest your Dreams</LocoParalaxItem>
        </LocoParalax>
      </div>
      <div className="px-12 relative bottom-[-5rem] flex flex-col max-w-[90rem] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="z-10 md:text-6xl text-5xl">I&apos;M RACHEL,</h1>
            <h1 className="z-10 text-4xl md:text-5xl">
              YOUR FEMININE ENERGY AND INNER WORK COACH
            </h1>
          </div>
          <ApplyLink buttonText="Apply now" hoverColor="accentFaded" />
        </div>
        <p
          id="about"
          className="mx-auto md:text-3xl text-2xl bg-accent p-5 mb-[9rem]"
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
      <TitleSeparator titleText="details" />
      <CoachingDetails />
      <TitleSeparator titleText="Reviews" />
      <ReviewsAll />
      <SubForm />
    </>
  );
}
