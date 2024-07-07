import Link from "next/link";
import { useCart } from "../_contexts/CartContext";
import Spinner from "./Spinner";
import CartItem from "./CartItem";
import { useRouter } from "next/navigation";

export default function CartItems({ session }) {
  const { cartItems, isLoading, setOpenCart } = useCart();
  const router = useRouter();

  async function checkout() {
    const lineItems = cartItems[0].map((cartItem) => {
      return {
        price: cartItem.id,
        quantity: 1,
      };
    });
    const res = await fetch("api/checkout", {
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
    <div className="m-5 mb-[5rem]">
      {isLoading ? (
        <Spinner />
      ) : !cartItems.length ? (
        <p className="mb-3 text-lg">
          Your cart is empty, sign in if you have a cart established.
        </p>
      ) : (
        cartItems.map((item, index) => <CartItem item={item} key={index} />)
      )}
      {!session && (
        <Link
          onClick={() => setOpenCart(false)}
          href="/login"
          className="border-[1px] border-fadedBlack font-satoshi p-2 text-xl hover:bg-bg transition-all duration-200"
        >
          sign in
        </Link>
      )}
      {cartItems.length ? (
        <button
          className="font-satoshi border-[1px] border-fadedBlack hover:bg-bg transition-all duration-200 lowercase p-[6px] text-xl ml-8"
          onClick={checkout}
        >
          Checkout
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
