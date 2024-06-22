"use client";

import { useEffect } from "react";

export default function LocoParalaxItem({ children, text, lg, twoXl }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div
      data-scroll
      data-scroll-speed="0.3"
      className={`place-self-center z-10 text-white`}
    >
      <h1 className={`2xl:text-${twoXl} lg:text-${lg} text-${text}`}>
        {children}
      </h1>
    </div>
  );
}
