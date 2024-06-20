import GridCol from "./GridCol";
import GridImage from "./GridImage";
import ApplyLink from "./ApplyLink";

export default function CoachingIntro() {
  return (
    <div className="grid grid-cols-2 lg:mx-[10rem] lg:min-h-[60vh]">
      <GridCol colSpan="1" bg="accent">
        <h1 className="mt-6 uppercase text-xl lg:text-4xl mx-5">
          Life Coaching
        </h1>
        <p className="text-xs lg:text-[1rem] m-5">
          Unlock your potential and achieve financial freedom and mental clarity
          with personalized coaching designed to empower and transform your
          life. Discover the path to a balanced, prosperous life with expert
          guidance that nurtures both your financial growth and mental
          well-being.
        </p>
        <div className="m-5 lg:mt-8">
          <ApplyLink buttonText="Apply" hoverColor="primaryFaded" />
        </div>
      </GridCol>
      <GridImage colSpan="1" src="/images/home.jpg" alt="home" />
    </div>
  );
}
