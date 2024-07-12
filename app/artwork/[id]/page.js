"use server";

import AddToCart from "@/app/_components/AddToCart";
import BackButton from "@/app/_components/BackButton";
import { getStripeProducts } from "@/app/_lib/actions";
import Image from "next/image";

export default async function Page({ params }) {
  const products = await getStripeProducts();
  const [product] = products.filter((product) => {
    return product.id === params.id;
  });
  const { unit_amount } = product;
  const { name, images, description, id } = product.product;
  return (
    <div className="lg:mt-[8rem] mt-[6rem] m-2">
      <BackButton />
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
                  className="object-contain"
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
