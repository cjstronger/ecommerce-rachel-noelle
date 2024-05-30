import { useEffect, useRef, useState } from "react";

export default function useModalClose(handler) {
  const ref = useRef(null);

  useEffect(() => {
    let closeMenu = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", closeMenu, true);

    return () => document.removeEventListener("click", closeMenu, true);
  }, [handler]);
  return ref;
}
