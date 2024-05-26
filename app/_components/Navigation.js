"use client";

import { useEffect, useRef, useState } from "react";
import NavigationButtons from "./NavigationButtons";
import styles from "../style.module.scss";
import { motion } from "framer-motion";
import Menu from "./Menu";

const variants = {
  open: {
    width: 350,
    height: 500,
    top: "4.5rem",
    opacity: 1,
    transition: { duration: 0.3, opacity: { duration: 0.02 } },
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
  const ref = useRef(null);
  const [burger, setBurger] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    let closeMenu = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", closeMenu, true);

    return () => document.removeEventListener("click", closeMenu, true);
  }, []);

  useEffect(() => {
    function handleWidth() {
      const windowWidth = window.innerWidth;
      setBurger(windowWidth >= 1150);
    }

    handleWidth();

    window.addEventListener("resize", handleWidth);

    return function () {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <div>
      <NavigationButtons
        burger={burger}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      />
      {!burger ? (
        <motion.div
          id="menu"
          ref={ref}
          animate={openMenu ? "open" : "close"}
          exit={"close"}
          initial={"close"}
          variants={variants}
          className={styles.menu}
        >
          <Menu openMenu={openMenu} />
        </motion.div>
      ) : null}
    </div>
  );
}
