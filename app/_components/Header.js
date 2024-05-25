import Link from "next/link";
import Navigation from "./Navigation";
import Cart from "./Cart";

export default function Header() {
  return (
    <header className="p-5 bg-primary border-b border-b-1 shadow-lg z-10">
      <div className="flex justify-between items-center">
        <Navigation />
        <div className="absolute inset-x-1/2 whitespace-nowrap flex justify-center z-10">
          <Link href="/" className="text-5xl">
            Rachel Noelle
          </Link>
        </div>
        <Cart />
      </div>
    </header>
  );
}
