"use client";

import { useLayoutEffect, useState } from "react";
import NavigationButtons from "./NavigationButtons";
import styles from "../style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "./Menu";

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  close: {
    opacity: 0,
    y: "5%",
    transition: { duration: 0.2 },
  },
};

export default function Navigation() {
  const [burger, setBurger] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  function handleCloseClick(e) {
    e.stopPropagation();
    setOpenMenu(false);
  }

  useLayoutEffect(() => {
    function handleWidth() {
      const windowWidth = window.innerWidth;
      windowWidth <= 1000 ? setBurger(true) : setBurger(false);
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
      <AnimatePresence>
        {openMenu && (
          <motion.div
            id="menu"
            animate={openMenu ? "open" : "close"}
            exit={"close"}
            initial={"close"}
            variants={variants}
            className={styles.menu}
          >
            <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
