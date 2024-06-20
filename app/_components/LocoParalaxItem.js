"use client";

import { useEffect } from "react";

export default function LocoParalaxItem({ children }) {
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
      className="place-self-center z-10 2xl:text-4xl lg:text-3xl text-2xl text-primary"
    >
      <h1>{children}</h1>
    </div>
  );
}
