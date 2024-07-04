import Link from "next/link";
import { useCart } from "../_contexts/CartContext";
import Spinner from "./Spinner";
import CartItem from "./CartItem";

export default function CartItems({ session }) {
  const { cartItems, isLoading, setOpenCart } = useCart();
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
    </div>
  );
}
