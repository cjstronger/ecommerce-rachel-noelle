import ApplyForm from "../_components/ApplyForm";

export default function Page() {
  return (
    <div className="m-[2rem]">
      <div className="z-10 mt-[8rem] flex flex-col max-w-[1200px] mx-auto">
        <div className="w-full bg-accent h-[8rem] p-2">
          <h1 className="z-10 text-5xl">Apply now</h1>
          <p className="text-md font-satoshi">
            Please take a moment to fill out the application below and we will
            get back to you as soon as possible. Thank you!
          </p>
        </div>
        <hr className="min-w-[60%] max-w-[76rem] h-[2px] mx-2 bg-brunswick border-brunswick" />
        <ApplyForm />
      </div>
    </div>
  );
}
