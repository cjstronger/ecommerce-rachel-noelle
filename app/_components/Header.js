"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import Cart from "./Cart";
import FreeGuideLink from "./FreeGuideLink";
import { easeIn, motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <motion.header
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        transition={{ translateY: { delay: 0.2, ease: easeIn, duration: 1 } }}
        className="h-[50px] shadow-md z-20 fixed top-0 w-full bg-bg"
      >
        <div className="flex justify-between items-center overflow-hidden h-full">
          <Navigation />
          <div className="absolute inset-x-1/2 whitespace-nowrap flex justify-center z-10 text-fadedBlack">
            <Link href="/" className="text-3xl">
              Rachel Noelle
            </Link>
          </div>
          <Cart />
        </div>
      </motion.header>
      <FreeGuideLink />
    </>
  );
}
