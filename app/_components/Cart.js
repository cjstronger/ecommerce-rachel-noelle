import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Cart() {
  return (
    <button className="flex font-satoshi px-5 p-[11px] lowercase hover:bg-accentFaded transition-all duration-400 text-2xl border-l-2 border-blackTrans">
      <ShoppingCartIcon className="size-7 text-white" />
    </button>
  );
}
