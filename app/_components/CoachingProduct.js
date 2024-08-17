"use server";

import Image from "next/image";
import AddToCart from "./AddToCart";
import CoachingProductForm from "./DayTimeCustom";
import Button from "./Button";

export default async function CoachingProduct({
  imageSrc,
  name,
  metadata,
  price,
  priceId,
  index,
}) {
  const descriptionKeys = Object.keys(metadata).filter((key) => {
    return key.includes("description");
  });
  const description = descriptionKeys.map((key) => metadata[key]);
  const includesKeys = Object.keys(metadata).filter((key) => {
    return !key.includes("description") && key !== "date";
  });
  const includesFields = includesKeys.map((key) => metadata[key]);
  return (
    <>
      <hr className="bg-fadedBlack px-2 text-[.6px] border-neutral-400 mx-5 my-3" />
      <div className="mx-5">
        <div className="grid grid-cols-2 max-w-[1000px] mx-auto gap-3">
          {(index + 1) % 2 !== 0 ? (
            <>
              <div className="col-span-1 flex py-8 relative aspect-auto h-[300px] md:h-[700px]">
                {imageSrc ? (
                  <Image
                    fill
                    quality={100}
                    src={imageSrc}
                    alt="pricing"
                    className="object-cover"
                  />
                ) : (
                  <p className="text-red-600">
                    Upload image to the product on stripe
                  </p>
                )}
              </div>
              <div className="col-span-1 mt-3 lg:mt-0 ml-0 lg:ml-5 h-[300px] md:h-[700px] overflow-scroll">
                <h1 className="uppercase text-xl lg:text-4xl">{name}</h1>
                {description.length ? (
                  <p className="text-sm lg:text-xl">{description.join(" ")}</p>
                ) : (
                  <p className="text-red-600 lg:text-xl text-sm">
                    To add a description, go to the products metadata on stripe.
                    Specifying a key &#40;the key needs to have
                    &apos;description&apos; in the key name&#41; and a value
                    with the text you want in the description. You can split the
                    description into different metadatas if you surpass the 500
                    character limit by adding a number to the end of each
                    description key.
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="col-span-1 mt-3 lg:mt-0 ml-0 lg:ml-5 h-[300px] md:h-[700px] overflow-scroll">
                <h1 className="uppercase text-xl lg:text-4xl">{name}</h1>
                {description.length ? (
                  <p className="text-sm lg:text-xl">{description.join(" ")}</p>
                ) : (
                  <p className="text-red-600 lg:text-xl text-sm">
                    To add a description, go to the products metadata on stripe.
                    Specifying a key &#40;the key needs to have
                    &apos;description&apos; in the key name&#41; and a value
                    with the text you want in the description. You can split the
                    description into different metadatas if you surpass the 500
                    character limit by adding a number to the end of each
                    description key.
                  </p>
                )}
              </div>
              <div className="col-span-1 flex py-8 relative aspect-auto h-[300px] md:h-[700px]">
                {imageSrc ? (
                  <Image
                    fill
                    quality={100}
                    src={imageSrc}
                    alt="pricing"
                    className="object-cover"
                  />
                ) : (
                  <p className="text-red-600">
                    Upload image to the product on stripe
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-1 lg:justify-items-center mx-2">
        {includesFields.map((field, i) => (
          <CoachingFeature
            title={includesKeys[i]}
            description={field}
            key={i}
          />
        ))}
      </div>
      {Object.keys(metadata).includes("date") ? (
        <CoachingProductForm price={price} priceId={priceId} />
      ) : (
        <div className="mt-2">
          <div className="flex justify-center"></div>
          <div className="flex justify-center items-center lg:flex-row flex-col text-center my-2 lg:gap-5">
            <p className="mb-2 lg:text-lg text-base">Price: ${price * 0.01}</p>
            <AddToCart id={priceId}>Lets Get Started</AddToCart>
          </div>
        </div>
      )}
      {price > 25 && (
        <p className="text-xs text-center">
          We support payment plans with Klarna&copy;
        </p>
      )}
    </>
  );
}

function CoachingFeature({ title, description }) {
  const [alpha, ...adjustedTitle] = title.split(" ").join(" ");
  return (
    <div className="flex flex-col mx-auto">
      <h1 className="mt-5 text-xl lg:text-3xl text-center">{adjustedTitle}</h1>
      <p className="text-base lg:text-lg text-center">{description}</p>
    </div>
  );
}
