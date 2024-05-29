import styles from "../style.module.scss";
import { motion } from "framer-motion";

export default function MenuNav({ setOpenMenu, openMenu }) {
  function handleCloseClick(e) {
    e.stopPropagation();
    setOpenMenu(false);
  }
  return (
    <div
      onClick={() => {
        setOpenMenu(!openMenu);
      }}
      className={`${styles.menuButton} hover:bg-accentFaded transition-all duration-[400]`}
    >
      <motion.div
        animate={{ top: openMenu ? "-100%" : "0" }}
        className={styles.slider}
      >
        <div className={styles.el}>
          <p>menu</p>
        </div>
        <div onClick={handleCloseClick} className={styles.el}>
          <p>close</p>
        </div>
      </motion.div>
    </div>
  );
}
