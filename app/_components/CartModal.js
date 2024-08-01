import { AnimatePresence, motion, easeInOut } from "framer-motion";
import CartItems from "./CartItems";
import { useCart } from "../_contexts/CartContext";
import { useEffect } from "react";

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

export default function CartModal({ ref2, session }) {
  const { openCart, setStateCart, cartItems } = useCart();
  useEffect(() => {
    setStateCart(cartItems);
  }, [cartItems]);

  return (
    <AnimatePresence>
      {openCart && (
        <motion.div
          ref={ref2}
          key="cart"
          initial={"close"}
          animate={"open"}
          variants={variants}
          exit={"close"}
          transition={{
            y: { duration: 0.2 },
            opacity: { duration: 0.2 },
            ease: easeInOut,
          }}
          className="overflow-scroll w-full h-[100vh] top-[3.1rem] absolute bg-accent z-10 right-0 md:w-[400px]"
        >
          <CartItems session={session} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
