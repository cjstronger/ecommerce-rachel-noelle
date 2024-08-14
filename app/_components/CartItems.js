import Link from "next/link";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import { useCart } from "../_contexts/CartContext";
import Spinner from "./Spinner";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";

export default function CartItems({ session }) {
  const { cartItems, isLoading, setOpenCart, stateCart, setStateCart } =
    useCart();
  const router = useRouter();

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem[0].id,
        quantity: 1,
      };
    });
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });
    const data = await res.json();
    router.push(data.session.url);
  }
  return (
    <Reorder.Group
      values={stateCart}
      onReorder={() => setStateCart(cartItems)}
      layout
      className="m-5 mb-[5rem]"
    >
      {isLoading ? (
        <Spinner />
      ) : !cartItems.length ? (
        <p className="mb-3 text-lg text-bg">
          Your cart is empty, sign in if you have a cart established.
        </p>
      ) : (
        stateCart.map((item, index) => (
          <Reorder.Item value={index} key={index}>
            <CartItem item={item} key={index} />
          </Reorder.Item>
        ))
      )}
      {!session && (
        <Link
          onClick={() => setOpenCart(false)}
          href="/login"
          className="border-[1px] border-bg text-bg font-satoshi p-2 text-xl hover:bg-accentFaded hover:text-white transition-all duration-200"
        >
          sign in
        </Link>
      )}
      {stateCart.length ? (
        <button
          className="font-satoshi border-[1px] text-bg border-bg hover:bg-bg hover:text-fadedBlack transition-all duration-200 lowercase p-[6px] text-xl ml-8"
          onClick={checkout}
        >
          Checkout
        </button>
      ) : (
        ""
      )}
    </Reorder.Group>
  );
}
