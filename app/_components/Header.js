import Link from "next/link";
import Navigation from "./Navigation";
import Cart from "./Cart";
import FreeGuideLink from "./FreeGuideLink";

export default function Header() {
  return (
    <>
      <header className="h-[50px] shadow-md z-20 fixed top-0 w-full bg-bg">
        <div className="flex justify-between items-center overflow-hidden h-full">
          <Navigation />
          <div className="absolute inset-x-1/2 whitespace-nowrap flex justify-center z-10 text-fadedBlack">
            <Link href="/" className="text-3xl">
              Rachel Noelle
            </Link>
          </div>
          <Cart />
        </div>
      </header>
      <FreeGuideLink />
    </>
  );
}
