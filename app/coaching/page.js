import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="lg:grid grid-cols-2 mx-5 w-auto">
        <div className="col-span-1 bg-accent flex items-center row-span-1 z-[5] shadow-2xl">
          <div className="m-[8.5rem] mt-[5rem]">
            <h1 className="mb-5 uppercase text-7xl">Life Coaching</h1>
            <p className="text-2xl mb-8">
              Unlock your potential and achieve financial freedom and mental
              clarity with personalized coaching designed to empower and
              transform your life. Discover the path to a balanced, prosperous
              life with expert guidance that nurtures both your financial growth
              and mental well-being.
            </p>
            <Link
              href="/coaching/application"
              className="border text-3xl hover:bg-primary p-2 px-5 font-rubik border-fadedBlack transition-all duration-[300]"
            >
              Apply now
            </Link>
          </div>
        </div>
        <div className="z-10 md:aspect-square aspect-[2/3] shadow-2xl">
          <img
            src="/images/home.jpg"
            className=" col-span-1 object-cover object-right min-w-[70%] h-[100vh] row-span-1"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-[25vh] bg-fadedBlack w-full mx-5 flex items-center">
          <h1 className="text-primary uppercase text-[10rem] m-[3rem]">
            details
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 h-[70vh] mx-5">
        <div className="bg-accent col-span-1 flex flex-col z-10 shadow-2xl">
          <h1 className="text-8xl mx-10">Section 1</h1>
          <p className="text-2xl mx-10">What I can do</p>
        </div>
        <div className="col-span-1 bg-fadedBlack z-10 shadow-2xl text-primary flex flex-col justify-center px-5">
          <h2 className="text-5xl">details on section 1</h2>
          <p className="text-2xl">What shes thinking</p>
        </div>
      </div>
      <div className="grid grid-cols-2 h-[70vh] mx-5">
        <div className="bg-fadedBlack text-primary col-span-1 flex flex-col z-10 shadow-2xl">
          <h1 className="text-8xl mx-10">Section 2</h1>
          <p className="text-2xl mx-10">What I can do</p>
        </div>
        <div className="col-span-1 bg-accent z-10 shadow-2xl text-primary flex flex-col justify-center px-5">
          <h2 className="text-5xl">details on section 2</h2>
          <p className="text-2xl">What shes thinking</p>
        </div>
      </div>
      <div className="grid grid-cols-2 h-[70vh] mx-5">
        <div className="bg-accent col-span-1 flex flex-col z-10 shadow-2xl">
          <h1 className="text-8xl mx-10">Section 3</h1>
          <p className="text-2xl mx-10">What I can do</p>
        </div>
        <div className="col-span-1 bg-fadedBlack z-10 shadow-2xl text-primary flex flex-col justify-center px-5">
          <h2 className="text-5xl">details on section 3</h2>
          <p className="text-2xl">What shes thinking</p>
        </div>
      </div>
    </>
  );
}
