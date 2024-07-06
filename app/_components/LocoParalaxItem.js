"use client";

import { useEffect } from "react";

export default function LocoParalaxItem({ children, type }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  if (!type)
    return (
      <div data-scroll data-scroll-speed="0.3" className="z-10 text-bg">
        <h1 className="2xl:text-5xl lg:text-3xl text-2xl">{children}</h1>
      </div>
    );
  if (type === "small")
    return (
      <div data-scroll data-scroll-speed="0.3" className="z-10 text-bg">
        <h1 className="2xl:text-2xl lg:text-xl text-sm font-satoshi">
          {children}
        </h1>
      </div>
    );
}
