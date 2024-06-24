import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

export default function MenuNav({ setOpenMenu, openMenu, ref2 }) {
  return (
    <div
      style={{ borderBlockColor: openMenu ? "#b2b19f" : "" }}
      className="px-[15px] py-[9.5px] cursor-pointer hover:border-b-accent border-b-2 border-r-2 border-b-transparent border-r-blackTrans transition-all duration-[400] relative"
      onClick={() => {
        setOpenMenu((openMenu) => !openMenu);
      }}
      ref={ref2}
    >
      <motion.div
        animate={{
          scale: openMenu ? 0 : 1,
          transition: { delay: openMenu ? 0 : 0.2, duration: 0.1 },
        }}
        className="absolute z-20 text-fadedBlack"
      >
        <div>
          <Bars3Icon height="29" />
        </div>
      </motion.div>
      <motion.div
        animate={{
          scale: openMenu ? 1 : 0,
          transition: {
            delay: openMenu ? 0.2 : 0,
            duration: 0.05,
          },
        }}
        className="z-20 relative"
      >
        <div>
          <XMarkIcon height="29" />
        </div>
      </motion.div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key="menu"
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: "0%",
              opacity: openMenu ? 1 : 0,
            }}
            exit={{ y: "100%" }}
            transition={{
              y: { duration: 0.2 },
              opacity: { duration: 0.00001 },
              ease: easeInOut,
            }}
            className="w-full h-full top-0 left-0 absolute bg-accent z-10"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
