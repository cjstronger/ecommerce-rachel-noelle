"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import CartModal from "./CartModal";
import useModalClose from "../_hooks/useModalClose";
import { useCart } from "../_contexts/CartContext";

export default function Cart({ session }) {
  const { ref, ref2 } = useModalClose(handleCartClose);
  const { getCartItems, setOpenCart, cartItems } = useCart();
  function handleCartClose() {
    setOpenCart(false);
  }
  return (
    <>
      <button
        aria-label="cart"
        ref={ref}
        onClick={() => {
          setOpenCart((openCart) => !openCart);
          getCartItems();
        }}
        className="flex font-satoshi px-5 h-full items-center lowercase hover:border-b-accent border-b-transparent border-b-2 transition-all duration-400 text-2xl relative"
      >
        <ShoppingCartIcon className="size-[30px] text-fadedBlack" />
        {!cartItems.length ? (
          ""
        ) : (
          <span className="absolute top-1 right-[4px] text-xs text-fadedBlack border-[1px] px-1 border-fadedBlack">
            {cartItems.length}
          </span>
        )}
      </button>
      <CartModal ref2={ref2} session={session} />
    </>
  );
}
