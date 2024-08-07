"use client";

import { useLayoutEffect, useState } from "react";
import NavigationButtons from "./NavigationButtons";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "./Menu";
import useModalClose from "../_hooks/useModalClose";

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  close: {
    opacity: 0,
    y: "5%",
    transition: { duration: 0.2, opacity: { duration: 0.1 } },
  },
};

export default function Navigation() {
  const [burger, setBurger] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  function handleClose() {
    setOpenMenu(false);
  }

  const { ref, ref2 } = useModalClose(handleClose);

  useLayoutEffect(() => {
    function handleWidth() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1000) {
        setBurger(true);
      } else {
        setOpenMenu(false);
        setBurger(false);
      }
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
        ref2={ref2}
        burger={burger}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      />
      <AnimatePresence>
        {openMenu && (
          <motion.div
            ref={ref}
            id="menu"
            animate={openMenu ? "open" : "close"}
            exit={"close"}
            initial={"close"}
            variants={variants}
            className="z-20 absolute h-[100vh] w-[100vw] md:w-[400px] top-[3.1rem] bg-accent"
          >
            <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
