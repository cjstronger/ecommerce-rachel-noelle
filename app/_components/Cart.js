"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CartModal from "./CartModal";
import useModalClose from "../_hooks/useModalClose";

export default function Cart({ session }) {
  const [openCart, setOpenCart] = useState(false);
  const { ref, ref2 } = useModalClose(handleCartClose);
  function handleCartClose() {
    setOpenCart(false);
  }
  return (
    <>
      <button
        ref={ref}
        onClick={() => setOpenCart((openCart) => !openCart)}
        className="flex font-satoshi px-5 p-[11px] lowercase hover:bg-accentFaded transition-all duration-400 text-2xl border-l-2 border-blackTrans"
      >
        <ShoppingCartIcon className="size-7 text-fadedBlack" />
      </button>
      <CartModal
        openCart={openCart}
        ref2={ref2}
        session={session}
        setOpenCart={setOpenCart}
      />
    </>
  );
}
