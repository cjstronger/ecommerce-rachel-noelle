import Link from "next/link";
import { useCart } from "../_contexts/CartContext";
import Spinner from "./Spinner";
import CartItem from "./CartItem";

export default function CartItems({ session, setOpenCart }) {
  const { cartItems, isLoading } = useCart();
  return (
    <div className="m-5">
      {isLoading ? (
        <Spinner />
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
