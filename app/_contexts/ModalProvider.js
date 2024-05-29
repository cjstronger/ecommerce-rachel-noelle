"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let closeMenu = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenModal(false);
      }
    };

    document.addEventListener("click", closeMenu, true);

    return () => document.removeEventListener("click", closeMenu, true);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal, ref }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === "underfined")
    throw new Error(
      "You are trying to access useModal outside of the provider."
    );
  return context;
}

export { useModal, ModalProvider };
