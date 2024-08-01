"use client";

import {
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import CartModal from "./CartModal";
import useModalClose from "../_hooks/useModalClose";
import { useCart } from "../_contexts/CartContext";

const variants = {
  close: { scale: 0 },
  open: { scale: 1 },
};

export default function Cart({ session }) {
  const { ref, ref2 } = useModalClose(handleCartClose);
  const { getCartItems, setOpenCart, cartItems, openCart } = useCart();
  function handleCartClose() {
    setOpenCart(false);
  }
  return (
    <>
      <button
        style={{ borderBlockColor: openCart ? "#28282b" : "" }}
        aria-label="cart"
        ref={ref}
        onClick={() => {
          setOpenCart((openCart) => !openCart);
          getCartItems();
        }}
        className="flex font-satoshi px-5 h-full items-center lowercase hover:border-b-accent border-b-transparent border-b-2 transition-all duration-400 text-2xl relative"
      >
        <motion.div
          className="absolute"
          variants={variants}
          animate={!openCart ? "open" : "close"}
          transition={{
            delay: openCart ? 0 : 0.2,
            ease: easeInOut,
            duration: 0.2,
          }}
        >
          <ShoppingCartIcon height="29" className={`text-fadedBlack`} />
          {!cartItems.length ? (
            ""
          ) : (
            <span className="absolute top-[-3px] right-[-15px] text-xs text-fadedBlack border-[1px] px-1 border-fadedBlack">
              {cartItems.length}
            </span>
          )}
        </motion.div>
        <motion.div
          animate={{
            scale: openCart ? 1 : 0,
            transition: {
              delay: openCart ? 0.2 : 0,
              duration: 0.2,
            },
          }}
          className="z-20 relative"
        >
          <XMarkIcon height="29" className="text-bg" />
        </motion.div>
        <AnimatePresence>
          {openCart && (
            <motion.div
              className="bg-accent w-full h-full absolute top-0 left-0"
              animate={{ y: "0%" }}
              initial={{ y: "100%" }}
              exit={{ y: "100%" }}
              transition={{ ease: easeInOut, duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </button>
      <CartModal ref2={ref2} session={session} />
    </>
  );
}
