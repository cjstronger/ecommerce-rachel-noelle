"use client";

import { createContext, useContext, useState } from "react";
import useModalClose from "../_hooks/useModalClose";
import styles from "../style.module.scss";

export const ModalContext = createContext();

export default function Modal({ children }) {
  const [showName, setShowName] = useState("");

  const opens = setShowName;
  const close = () => setShowName("");

  return (
    <ModalContext.Provider value={{ close, opens, showName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Button({ open, label }) {
  function handleOpen() {
    if (!open) return null;
    opens(open);
  }
  const { opens } = useContext(ModalContext);
  return (
    <button className={styles.formButton} onClick={handleOpen}>
      {label}
    </button>
  );
}

function Window({ id, children }) {
  const { close, showName } = useContext(ModalContext);
  const ref = useModalClose(close);
  if (id !== showName) return null;
  return (
    <div
      className={`${styles.form} md:w-[60%] md:h-[40vh] w-full h-[60vh]`}
      ref={ref}
    >
      <div className="flex justify-between">
        <div className="flex-col flex">
          <h1 className="text-6xl md:text-7xl">Subscribe</h1>
          <h1 className="text-4xl md:text-5xl">to the Noelle Letter</h1>
        </div>
        <button
          onClick={close}
          className="font-rubik absolute border border-fadedBlack p-2 text-2xl right-5 hover:bg-[#d69999] transition-all duration-[.2s]"
        >
          X
        </button>
      </div>
      {children}
    </div>
  );
}

Modal.Window = Window;
Modal.Button = Button;
