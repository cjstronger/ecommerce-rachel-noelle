import Link from "next/link";
import Navigation from "./Navigation";
import Cart from "./Cart";
import styles from "../style.module.scss";

export default function Header() {
  return (
    <header class={styles.header}>
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
