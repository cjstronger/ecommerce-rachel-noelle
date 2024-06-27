import { AnimatePresence, motion, easeInOut } from "framer-motion";
import CartItems from "./CartItems";
import useResize from "../_hooks/useResize";

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

export default function CartModal({ openCart, ref2, session, setOpenCart }) {
  return (
    <AnimatePresence>
      <motion.div
        ref={ref2}
        key="cart"
        initial={"close"}
        animate={openCart ? "open" : "close"}
        variants={variants}
        exit={"close"}
        transition={{
          y: { duration: 0.2 },
          opacity: { duration: 0.2 },
          ease: easeInOut,
        }}
        className="w-full h-[100vh] top-[3.1rem] absolute bg-accent z-10 right-0 md:w-[400px]"
      >
        <CartItems session={session} setOpenCart={setOpenCart} />
      </motion.div>
    </AnimatePresence>
  );
}
