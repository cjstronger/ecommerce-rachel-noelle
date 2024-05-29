"use client";

import { useEffect, useState } from "react";
import NavigationButtons from "./NavigationButtons";
import styles from "../style.module.scss";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Modal from "./Modal";

const variants = {
  open: {
    width: 350,
    height: 500,
    top: "5rem",
    opacity: 1,
    transition: { duration: 0.3, opacity: { duration: 0.5 } },
  },
  close: {
    width: 100,
    height: 38,
    top: "1.75rem",
    opacity: 0,
    transition: { delay: 0.3, duration: 0.3, opacity: { delay: 0.8 } },
  },
};

export default function Navigation() {
  const [burger, setBurger] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleWidth() {
      const windowWidth = window.innerWidth;
      windowWidth <= 1150 ? setBurger(true) : setBurger(false);
    }

    handleWidth();

    window.addEventListener("resize", handleWidth);

    return function () {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <>
      <NavigationButtons
        burger={burger}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      />
      {openMenu && (
        <Modal openMenu={openMenu} setOpenMenu={setOpenMenu}>
          <motion.div
            id="menu"
            animate={openMenu ? "open" : "close"}
            exit={"close"}
            initial={"close"}
            variants={variants}
            className={styles.menu}
          >
            <Menu openMenu={openMenu} />
          </motion.div>
        </Modal>
      )}
    </>
  );
}
