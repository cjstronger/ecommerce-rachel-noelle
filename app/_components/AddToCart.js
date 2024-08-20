"use client";

import { useCart } from "../_contexts/CartContext";

export default function AddToCart({ id, children, error }) {
  const { addCartItem, itemAdding } = useCart();
  return (
    <button
      className="font-satoshi border-fadedBlack border hover:bg-accent hover:text-white p-2 transition-all duration-400 text-lg lg:text-xl min-h-[50px] min-w-[125px] flex justify-center items-center"
      onClick={async () => {
        if (error) return;
        await addCartItem(id);
      }}
    >
      {itemAdding ? "Added to Cart" : children}
    </button>
  );
}
