import { useEffect, useRef } from "react";

export default function useModalClose(handler, type) {
  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    let closeMenu = (e) => {
      if (
        !type &&
        ref.current &&
        ref2.current &&
        !ref.current.contains(e.target) &&
        !ref2.current.contains(e.target)
      ) {
        handler();
      }
      if (type === "oneRef" && ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", closeMenu, true);

    return () => document.removeEventListener("click", closeMenu, true);
  }, [handler]);
  return { ref, ref2 };
}
