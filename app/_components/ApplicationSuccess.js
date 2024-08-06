import Link from "next/link";

export default function ApplicationSuccess() {
  return (
    <div className="w-full h-[80vh] mx-auto bg-accent flex flex-col items-center justify-center text-center gap-5 relative text-bg">
      <Link
        href="/"
        className="font-satoshi lowercase border-bg border hover:text-white hover:bg-accentFaded p-2 transition-all duration-400 text-lg left-5 top-5 absolute"
      >
        &larr; home
      </Link>
      <h1 className="text-4xl px-4">
        Thank you for submitting your application to work with Rachel!
      </h1>
      <p className="text-xl px-4">
        We will get back to you as soon as possible to let you know if we are a
        good fit!
      </p>
      <p className="px-2">While you&apos;re here check out my artwork</p>
      <Link
        href="/artwork"
        className="font-satoshi lowercase border-bg border hover:bg-accentFaded hover:text-white p-2 transition-all duration-400 text-2xl"
      >
        artwork
      </Link>
    </div>
  );
}
