"use server";

import AddToCart from "@/app/_components/AddToCart";
import BackButton from "@/app/_components/BackButton";
import { addImages } from "@/app/_lib/actions";
import Image from "next/image";
import Stripe from "stripe";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_KEY ?? "", {
    apiVersion: "2020-08-27",
  });

  const res = await stripe.prices.list({
    expand: ["data.product"],
    limit: 100,
  });
  const data = res.data;
  return data;
}

export default async function Page({ params }) {
  const products = await getStripeProducts();
  const [product] = products.filter((product) => {
    return product.id === params.id[0];
  });
  const { unit_amount } = product;
  const { name, images, description, id } = product.product;
  return (
    <div className="lg:mt-[8rem] mt-[6rem] m-2">
      <BackButton />
      <div className="flex flex-col items-center mt-2 mx-10 relative">
        <form action={addImages}>
          <label className="rounded-full bg-blue-600 font-satoshi text-lg px-2 py-1 text-white absolute top-[16rem] right-5 hover:cursor-pointer">
            <input type="file" name="images" className="hidden" />
            Add Image
          </label>
          <button className="absolute top-[19rem] right-5 bg-blue-300 font-satoshi text-lg px-6 py-1 text-white hover:cursor-pointer rounded-full">
            Upload
          </button>
          <input hidden name="productId" defaultValue={`${id}`} />
        </form>
        <div className="min-w-[400px] lg:min-w-[800px] h-[70vh] bg-fadedBlack text-bg items-center flex justify-center relative">
          {!images.length ? (
            <h1>No images Buster</h1>
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
