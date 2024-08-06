"use client";

import { useCart } from "../_contexts/CartContext";

export default function AddToCart({ id, children }) {
  const { addCartItem, itemAdding } = useCart();
  return (
    <button
      className="font-satoshi lowercase border-fadedBlack border hover:bg-accent hover:text-white p-2 transition-all duration-400 text-xl min-h-[50px] min-w-[125px] flex justify-center items-center"
      onClick={async () => {
        await addCartItem(id);
      }}
    >
      {itemAdding ? "added to cart" : children}
    </button>
  );
}
