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
        <p className="mb-3">
          Your cart is empty, sign in if you have a cart established.
        </p>
      ) : (
        cartItems.map((item, index) => <CartItem item={item} key={index} />)
      )}
      {!session && (
        <Link
          onClick={() => setOpenCart(false)}
          href="/login"
          className="border-[1px] border-fadedBlack font-satoshi p-2 text-xl"
        >
          sign in
        </Link>
      )}
      {cartItems.length ? <button onClick={checkout}>Checkout</button> : ""}
    </div>
  );
}
