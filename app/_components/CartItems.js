import Link from "next/link";

export default function CartItems({ session, setOpenCart }) {
  if (!session)
    return (
      <>
        <p>
          You&apos;re not currently signed in, sign in to see the items in your
          cart
        </p>
        <Link onClick={() => setOpenCart(false)} href="/login">
          sign in
        </Link>
      </>
    );
}
