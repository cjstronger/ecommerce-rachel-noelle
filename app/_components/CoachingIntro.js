import GridImage from "./GridImage";

export default function CoachingIntro() {
  return (
    <div className="grid grid-cols-3 lg:mx-[10rem] lg:min-h-[60vh] text-bg mt-5 shadow-md">
      <div className="min-h-[33vh] lg:min-h-[60vh] flex flex-col justify-center col-span-2 bg-accent">
        <div className="mx-2 lg:mx-[5rem]">
          <h1 className="uppercase text-2xl lg:text-4xl mx-2 mb-2">
            Have you longed for...
          </h1>
          <h1 className="text-sm lg:text-2xl mx-2">your purpose in life?</h1>
          <h1 className="text-sm lg:text-2xl mx-2">
            your existence to be up leveled?
          </h1>
          <h1 className="text-sm lg:text-2xl mx-2">
            guidance through your own blocks?
          </h1>
          <h1 className="text-sm lg:text-2xl mx-2 mt-2">
            If you let me help you expand yourself you will start shifting your
            reality to then manifest your deepest desires.
          </h1>
        </div>
      </div>
      <GridImage colSpan="1" src="/images/home.jpg" alt="home" />
    </div>
  );
}
