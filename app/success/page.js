import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center mt-[10rem]">
      <h1 className="text-3xl">Thank you so much!!</h1>
      <Link
        href="/"
        className="border-[1px] border-fadedBlack p-2 font-satoshi hover:bg-accentFaded transition-all duration-200 mt-5"
      >
        Home
      </Link>
    </div>
  );
}
