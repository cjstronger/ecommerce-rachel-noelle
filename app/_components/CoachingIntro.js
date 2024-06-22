import GridCol from "./GridCol";
import GridImage from "./GridImage";
import ApplyLink from "./ApplyLink";

export default function CoachingIntro() {
  return (
    <div className="grid grid-cols-2 lg:mx-[10rem] lg:min-h-[60vh] shadow-2xl">
      <GridCol colSpan="1" bg="accent">
        <h1 className="mt-6 uppercase text-xl lg:text-4xl mx-5 mb-2">
          Have you longed for...
        </h1>
        <h1 className="text-xs lg:text-2xl mx-2">your purpose in life?</h1>
        <h1 className="text-xs lg:text-2xl mx-2">
          your existence to be up leveled?
        </h1>
        <h1 className="text-xs lg:text-2xl mx-2">
          guidance through your own blocks?
        </h1>
        <h1 className="uppercase text-xl lg:text-4xl mx-5 mt-4">then...</h1>
        <div className="m-5 lg:mt-8">
          <ApplyLink buttonText="Apply" hoverColor="primaryFaded" />
        </div>
      </GridCol>
      <GridImage colSpan="1" src="/images/home.jpg" alt="home" />
    </div>
  );
}
