import Link from "next/link";
import Navigation from "./Navigation";
import Cart from "./Cart";
import { auth } from "../_lib/auth";

export default async function Header() {
  const session = await auth();
  console.log(session);
  return (
    <header className="h-[50px] shadow-md z-20 fixed top-0 w-full bg-transparent">
      <div className="flex justify-between items-center overflow-hidden">
        <Navigation session={session} />
        <div className="absolute inset-x-1/2 whitespace-nowrap flex justify-center z-10 text-white">
          <Link href="/" className="text-3xl">
            Rachel Noelle
          </Link>
        </div>
        <Cart />
      </div>
    </header>
  );
}
