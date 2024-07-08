"use client";

import AddToCart from "@/app/_components/AddToCart";
import { useCart } from "@/app/_contexts/CartContext";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const { products } = useCart();
  const router = useRouter();
  const [product] = products.filter((product) => {
    return product.id === params.id[0];
  });
  const { unit_amount } = product;
  const { name, images, description } = product.product;
  return (
    <div className="lg:mt-[8rem] mt-[6rem] m-2">
      <button
        className="text-xl size-5 flex items-center"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon className="w-5 h-5 absolute" />
        <h1 className="px-6 border-b-2 border-b-transparent hover:border-b-accent transition-all duration-150">
          Back
        </h1>
      </button>
      <div className="flex flex-col items-center mt-2 mx-10">
        <div className="min-w-[400px] lg:min-w-[800px] h-[70vh] bg-fadedBlack text-bg items-center flex justify-center relative">
          {!images.length ? (
            <h1>No images currently</h1>
          ) : (
            images.map((image, i) => {
              return (
                <Image
                  src={image}
                  alt={`${name} ${i + 1}`}
                  fill
                  blur={true}
                  className="object-cover"
                  key={i}
                />
              );
            })
          )}
        </div>
        <h1 className="text-5xl">{name}</h1>
        <p className="max-w-[800px] mb-5">{description}</p>
        <div className="flex items-center gap-5">
          <p className="text-xl">${unit_amount * 0.01}.00</p>
          <AddToCart id={params.id[0]}>Add to Cart</AddToCart>
        </div>
      </div>
    </div>
  );
}
