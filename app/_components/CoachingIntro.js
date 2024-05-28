import Link from "next/link";
import GridCol from "./GridCol";
import GridHolder from "./GridHolder";
import GridImage from "./GridImage";
import ApplyLink from "./ApplyLink";

export default function CoachingIntro() {
  return (
    <GridHolder gridCols="2">
      <GridCol colSpan="1" bg="accent">
        <h1 className="mb-5 uppercase text-7xl">Life Coaching</h1>
        <p className="text-2xl mb-8">
          Unlock your potential and achieve financial freedom and mental clarity
          with personalized coaching designed to empower and transform your
          life. Discover the path to a balanced, prosperous life with expert
          guidance that nurtures both your financial growth and mental
          well-being.
        </p>
        <ApplyLink buttonText="Apply Now" hoverColor="primaryFaded" />
      </GridCol>
      <GridImage colSpan="1" src="/images/home.jpg" alt="home" />
    </GridHolder>
  );
}
