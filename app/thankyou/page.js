"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <div className="flex flex-col items-center mt-[10rem]">
      <h1 className="text-3xl">Thank you so much!!</h1>
      <Link
        href="/"
        className="border-[1px] border-fadedBlack p-2 px-5 font-satoshi hover:bg-accent hover:text-white transition-all duration-200 mt-5 text-lg md:text-xl"
      >
        Home
      </Link>
    </div>
  );
}
