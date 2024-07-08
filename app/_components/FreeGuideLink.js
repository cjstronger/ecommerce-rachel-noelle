"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function FreeGuideLink() {
  const [close, setClose] = useState(false);
  if (!close)
    return (
      <div className="lg:h-[60px] h-[40px] z-10 w-full bg-accent text-bg top-[3.1rem] absolute flex justify-between items-center">
        <Link
          onClick={() => setClose(true)}
          href="/foodguide"
          className="w-full h-[100%] p-2"
        >
          <h1 className="text-lg lg:text-2xl">
            Download My Daily Food Guide for free!
          </h1>
        </Link>
        <button
          className="p-2 text-white hover:text-red-800 transition-all duration-150"
          onClick={() => setClose(true)}
        >
          <XMarkIcon className="size-6 lg:size-10" />
        </button>
      </div>
    );
}
