"use client";

import Head from "next/head";
import { easeIn, motion } from "framer-motion";
import Navigation from "./Navigation";
import Cart from "./Cart";
import FreeGuideLink from "./FreeGuideLink";
import TransitionLink from "./TransitionLink";
import Login from "./Login";

export default function Header() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/_next/static/chunks/app/_components/Header.js"
          as="script"
        />
        <link rel="preload" href="/next/static/css/globals.css" as="style" />
      </Head>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: 0.2, ease: easeIn, duration: 0.35 } }}
        className="h-[50px] shadow-md z-20 fixed top-0 w-full bg-bg"
      >
        <div className="flex justify-between items-center overflow-hidden h-full">
          <Navigation />
          <div className="absolute inset-x-1/2 whitespace-nowrap flex justify-center z-10 text-fadedBlack">
            <TransitionLink
              href="/"
              className="text-3xl transition-all duration-150"
            >
              Rachel Noelle
            </TransitionLink>
          </div>
          <div className="flex items-center h-full">
            <Login />
            <Cart />
          </div>
        </div>
      </motion.header>
      <FreeGuideLink />
    </>
  );
}
