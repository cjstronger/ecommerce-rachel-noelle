import { useEffect, useRef } from "react";

export default function useModalClose(handler) {
  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    let closeMenu = (e) => {
      if (
        ref.current &&
        ref2.current &&
        !ref.current.contains(e.target) &&
        !ref2.current.contains(e.target)
      ) {
        handler();
      }
    };

    document.addEventListener("click", closeMenu, true);

    return () => document.removeEventListener("click", closeMenu, true);
  }, [handler]);
  return { ref, ref2 };
}
