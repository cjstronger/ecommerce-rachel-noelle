"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BackButton() {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return (
    <button
      onClick={() => router.push("/artwork")}
      className="text-xl size-5 flex items-center"
    >
      <ArrowLeftIcon className="w-5 h-5 absolute" />
      <h1 className="px-6 border-b-2 border-b-transparent hover:border-b-blackTrans transition-all duration-150">
        Back
      </h1>
    </button>
  );
}
