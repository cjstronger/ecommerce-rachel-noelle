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
      if (localStorage.getItem(cartItem[0].id)) {
        const [fullName, email, userDate] = localStorage
          .getItem(cartItem[0].id)
          .split(",");
        let description = `Name;${fullName}, Email;${email}, Date;${userDate}`;
        return {
          price: cartItem[0].id,
          quantity: 1,
          description,
        };
      }
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
      <div className="flex gap-2">
        {!session && (
          <Link
            onClick={() => setOpenCart(false)}
            href="/login"
            className="border-[1px] border-bg text-bg font-satoshi md:w-[125px] w-[110px] h-[45px] flex justify-center items-center text-xl hover:bg-bg hover:text-fadedBlack transition-all duration-200"
          >
            Sign In
          </Link>
        )}
        {stateCart.length ? (
          <button
            className="font-satoshi border-[1px] text-bg border-bg hover:bg-bg hover:text-fadedBlack transition-all duration-200 md:w-[125px] w-[110px] h-[45px] flex justify-center items-center text-xl"
            onClick={checkout}
          >
            Checkout
          </button>
        ) : (
          ""
        )}
      </div>
    </Reorder.Group>
  );
}
