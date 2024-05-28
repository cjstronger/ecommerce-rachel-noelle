"use client";

import { useEffect } from "react";

export default function LocoParalaxItem({ children }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector(["data-scroll-container"]),
        smooth: true,
        smartphone: {
          smooth: false,
          getDirection: true,
          breakpoint: 0,
        },
        tablet: {
          smooth: false,
          getDirection: true,
          breakpoint: 0,
        },
      });
    })();
  }, []);
  return (
    <div
      data-scroll
      data-scroll-speed="0.3"
      className="absolute place-self-center z-10 lg:text-9xl text-8xl text-primary"
    >
      <h1>{children}</h1>
    </div>
  );
}
