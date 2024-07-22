"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import Cart from "./Cart";
import FreeGuideLink from "./FreeGuideLink";
import { easeIn, motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
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
