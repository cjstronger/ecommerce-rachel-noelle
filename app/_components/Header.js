import Link from "next/link";
import Navigation from "./Navigation";
import Cart from "./Cart";

export default function Header() {
  return (
    <header className="p-5 bg-primary border-b border-slate-400 shadow-lg z-20 sticky top-0">
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
