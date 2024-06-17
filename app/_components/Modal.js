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

function Open({ open, label }) {
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
    <div className={`${styles.form}`} ref={ref}>
      <button
        onClick={close}
        className="font-satoshi absolute border border-fadedBlack px-2 text-md lg:text-xl right-2 hover:bg-[#d69999] transition-all duration-[.2s]"
      >
        X
      </button>
      {children}
    </div>
  );
}

Modal.Window = Window;
Modal.Open = Open;
