import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center mt-[10rem]">
      <h1 className="text-3xl">
        We understand, take your time with your decision.
      </h1>
      <Link
        href="/"
        className="border-[1px] border-fadedBlack p-2 font-satoshi hover:bg-accentFaded transition-all duration-200"
      >
        Home
      </Link>
    </div>
  );
}
