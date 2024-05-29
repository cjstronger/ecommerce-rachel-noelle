"use client";

import { useEffect, useRef, useState } from "react";

export default function Modal({ children, openMenu, setOpenMenu }) {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let closeMenu = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenModal(false);
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", closeMenu, true);

    return () => document.removeEventListener("click", closeMenu, true);
  }, []);
  return (
    <>
      {openModal || openMenu ? (
        <div style={{ display: "contents" }} ref={ref}>
          {children}
        </div>
      ) : null}
    </>
  );
}
