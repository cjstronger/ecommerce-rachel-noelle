"use client";

import { useCart } from "../_contexts/CartContext";
import Button from "./Button";

export default function AddToCart({ id, children }) {
  const { addCartItem, itemAdding } = useCart();
  return (
    <Button
      onClick={async () => {
        await addCartItem(id);
      }}
    >
      {itemAdding ? "added to cart" : children}
    </Button>
  );
}
