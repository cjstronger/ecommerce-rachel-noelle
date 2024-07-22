"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FreeGuideLink() {
  const [close, setClose] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const freeGuideClicked = localStorage.getItem("freeGuideClicked");
    if (!freeGuideClicked && clicked) {
      localStorage.setItem("freeGuideClicked", true);
      setClicked(true);
    }
    if (!freeGuideClicked) {
      setClose(false);
    }
    if (freeGuideClicked) {
      setClicked(true);
      setClose(true);
    }
  }, [close, clicked]);

  if (!close && !clicked)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: { delay: 2, duration: 0.5 } }}
        className="lg:h-[60px] h-[40px] z-10 w-full bg-accent text-bg top-[3.1rem] absolute flex justify-between items-center"
      >
        <Link
          onClick={() => setClicked(true)}
          href="/foodguide"
          className="w-full h-[100%] p-2"
        >
          <h1 className="text-lg lg:text-2xl">
            Download My Daily Food Guide for free!
          </h1>
        </Link>
        <button
          className="p-2 text-white hover:text-red-800 transition-all duration-150"
          onClick={() => setClicked(true)}
        >
          <XMarkIcon className="size-6 lg:size-10" />
        </button>
      </motion.div>
    );
}
