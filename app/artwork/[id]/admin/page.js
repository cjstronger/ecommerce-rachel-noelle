"use server";

import AddToCart from "@/app/_components/AddToCart";
import BackButton from "@/app/_components/BackButton";
import { getStripeProducts } from "@/app/_lib/actions";
import { addImages } from "@/app/_lib/data-services";
import Image from "next/image";

export async function generateMetadata() {
  return { title: "Artwork Admin" };
}

export default async function Page({ params }) {
  const products = await getStripeProducts();
  const [product] = products.filter((product) => {
    return product.id === params.id;
  });
  const { unit_amount } = product;
  const { name, images, description, id } = product.product;
  return (
    <div className="lg:mt-[8rem] mt-[6rem] m-2 mb-10">
      <BackButton />
      <div className="flex flex-col items-center mt-5 mx-10">
        <div className="flex justify-between gap-4 lg:flex-row flex-col items-baseline mb-5">
          <div className="min-w-[400px] lg:min-w-[800px] h-[70vh] bg-fadedBlack text-bg items-center flex justify-center relative">
            {!images.length ? (
              <h1>No images buste</h1>
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
          <form
            action={addImages}
            className="flex lg:flex-col lg:gap-2 gap-[7rem] justify-between items-center"
          >
            <input hidden defaultValue={id} name="id" />
            <input
              className="file:text-accent file:border-0 file:rounded-full file:font-satoshi font-satoshi file:py-2 file:px-5 mr-[-5rem] file:hover:cursor-pointer"
              type="file"
              name="image"
            />
            <button className="rounded-full py-2 px-5 bg-blue-500 text-white font-satoshi">
              Upload
            </button>
          </form>
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
