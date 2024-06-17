import Link from "next/link";
import Button from "./Button";

export default function ApplicationSuccess() {
  return (
    <div className="w-full h-[80vh] mx-auto bg-accent flex flex-col items-center justify-center text-center gap-5 relative">
      <Link
        href="/"
        className="font-satoshi lowercase border-fadedBlack border hover:bg-primaryFaded p-2 transition-all duration-400 text-lg left-5 top-5 absolute"
      >
        &larr; home
      </Link>
      <h1 className="text-4xl">
        Thank you for submitting your application to work with Rachel!
      </h1>
      <p className="text-xl">
        We will get back to you as soon as possible to let you know if we are a
        good fit!
      </p>
      <p>While you&apos;re here check out my artwork</p>
      <Link
        href="/artwork"
        className="font-satoshi lowercase border-fadedBlack border hover:bg-primaryFaded p-2 transition-all duration-400 text-2xl"
      >
        artwork
      </Link>
    </div>
  );
}
