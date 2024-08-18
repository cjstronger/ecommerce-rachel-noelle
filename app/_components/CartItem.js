import { XMarkIcon } from "@heroicons/react/24/solid";
import { useCart } from "../_contexts/CartContext";

export default function CartItem({ item }) {
  const { deleteCartItem } = useCart();
  const description = item[0]?.product?.description
    ?.split(" ")
    ?.slice(0, 10)
    ?.join(" ");
  return (
    <div className="border-[1px] border-bg w-full h-[6rem] text-lg flex justify-between items-center p-5 mb-3 text-bg">
      <div className="flex flex-col">
        <h1 className="text-2xl">{item[0]?.product?.name}</h1>
        <p className="text-xs max-w-[150px]">{description}...</p>
      </div>
      <p>{`$${item[0]?.unit_amount / 100}.00`}</p>
      <button
        className="size-7 hover:text-red-600 transition-all duration-200"
        onClick={() => deleteCartItem(item[0].id)}
      >
        <XMarkIcon />
      </button>
    </div>
  );
}
