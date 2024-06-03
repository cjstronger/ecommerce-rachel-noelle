"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function useResize() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function handleResize() {
      setWidth(ref.current.clientWidth);
    }

    handleResize();

    window.addEventListener("resize", handleResize, true);

    return () => window.removeEventListener("resize", handleResize, true);
  }, []);
  return { ref, width };
}
