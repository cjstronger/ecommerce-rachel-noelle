import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center mt-[10rem] px-4 text-center">
      <h1 className="text-3xl">
        We understand, take your time with your decision.
      </h1>
      <Link
        href="/"
        className="border-[1px] border-fadedBlack p-2 px-5 font-satoshi hover:bg-accent hover:text-white transition-all duration-200 mt-5 text-lg md:text-xl"
      >
        Home
      </Link>
    </div>
  );
}
