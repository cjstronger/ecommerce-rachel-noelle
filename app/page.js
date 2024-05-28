import LocoParalax from "./_components/LocoParalax";
import CoachingDetails from "./_components/CoachingDetails";
import CoachingIntro from "./_components/CoachingIntro";
import ApplyLink from "./_components/ApplyLink";
import TitleSeparator from "./_components/TitleSeparator";
import ReviewsAll from "./_components/ReviewsAll";

export default function Page() {
  return (
    <>
      <div
        data-scroll-container
        className="flex 2xl:aspect-[2/1] md:aspect-[3/4] lg:aspect-[5/5] aspect-[5/9] m-12 h-[1000] justify-center"
      >
        <img
          className=" object-cover 2xl:object-cover shadow-lg brightness-90"
          src="/images/test-min.jpg"
          alt="Rachel-Noelle"
        />
        <LocoParalax>Coaching Artist</LocoParalax>
      </div>
      <div className="px-12 relative bottom-[-5rem] flex flex-col max-w-[90rem] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="z-10 text-6xl">About</h1>
          <ApplyLink buttonText="Need coaching?" hoverColor="accent" />
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
          src="/images/test2-min.jpg"
          placeholder="blur"
          alt="life-coaching"
        />
        <LocoParalax>Coached</LocoParalax>
      </div>

      {/*Second section - coaching */}
      <span id="coaching" hidden>
        hello
      </span>
      <CoachingIntro />
      <TitleSeparator titleText="details" />
      <CoachingDetails />
      <TitleSeparator titleText="Reviews" />
      <ReviewsAll />
    </>
  );
}
