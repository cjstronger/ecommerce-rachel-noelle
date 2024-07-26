"use client";

import { useLayoutEffect, useState } from "react";

export default function useResize(ref2) {
  const [width, setWidth] = useState(1000);
  const [prevWidth, setPrevWidth] = useState(1000);
  useLayoutEffect(() => {
    function handleResize() {
      const newWidth = ref2?.current?.clientWidth;
      if (newWidth !== width && (newWidth < 1000 || prevWidth >= 1000)) {
        setWidth(newWidth);
        setPrevWidth(newWidth);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize, true);

    return () => window.removeEventListener("resize", handleResize, true);
  }, [ref2, width, prevWidth]);
  return { width };
}
