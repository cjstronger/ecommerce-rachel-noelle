import GridCol from "./GridCol";
import GridImage from "./GridImage";
import ApplyLink from "./ApplyLink";

export default function CoachingIntro() {
  return (
    <div className="grid grid-cols-2 lg:mx-[10rem] lg:min-h-[60vh]">
      <GridCol colSpan="1" bg="accent">
        <h1 className="mb-5 uppercase text-3xl lg:text-4xl mx-4">
          Life Coaching
        </h1>
        <p className="text-xs lg:text-[1rem] mb-5 mx-4">
          Unlock your potential and achieve financial freedom and mental clarity
          with personalized coaching designed to empower and transform your
          life. Discover the path to a balanced, prosperous life with expert
          guidance that nurtures both your financial growth and mental
          well-being.
        </p>
        <div className="mx-5">
          <ApplyLink buttonText="Apply" hoverColor="primaryFaded" />
        </div>
      </GridCol>
      <GridImage colSpan="1" src="/images/home.jpg" alt="home" />
    </div>
  );
}
