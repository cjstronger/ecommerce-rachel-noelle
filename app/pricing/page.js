import Image from "next/image";
import Benefit from "../_components/Benefit";
import AddToCart from "../_components/AddToCart";
import { getStripeProducts } from "../_lib/actions";
import {
  BeakerIcon,
  BookOpenIcon,
  DevicePhoneMobileIcon,
  PhoneIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

export default async function Page() {
  const products = await getStripeProducts();
  const coachingProducts = products.filter(
    (product) => product.product.unit_label !== null
  );
  return (
    <>
      <div className="aspect-[4/3] md:aspect-[2/1] xl:aspect-[3/1] relative flex justify-end p-5">
        <Image
          src="/images/painting.jpg"
          fill
          blur="true"
          alt="theactofpainting"
          className="object-cover object-top"
          quality={100}
        />
      </div>
      <div className="mt-5">
        <h1 className="text-center text-xl lg:text-2xl">Benefits</h1>
        <p className="text-center text-xs lg:text-md">
          Benefits of working with me
        </p>
        <div className="flex justify-center">
          <Benefit src="footprint.png" alt="steps">
            Practical Steps
          </Benefit>
          <Benefit src="child.png" alt="child">
            Inner Child Work
          </Benefit>
          <Benefit src="female.png" alt="female">
            Feminine Energy
          </Benefit>
          <Benefit src="sun.png" alt="sun">
            Spiritually Based
          </Benefit>
        </div>
      </div>
      {coachingProducts.map((product, i) => (
        <CoachingProduct
          key={i}
          imageSrc={product.product?.images[0]}
          name={product.product.name}
          metadata={product.product.metadata}
          price={product.unit_amount}
          priceId={product.id}
        />
      ))}
    </>
  );
}

function CoachingProduct({ imageSrc, name, metadata, price, priceId }) {
  const descriptionKeys = Object.keys(metadata).filter((key) => {
    return key.includes("description");
  });
  const description = descriptionKeys.map((key) => metadata[key]);
  const includesKeys = Object.keys(metadata).filter((key) => {
    return !key.includes("description");
  });
  const includesFields = includesKeys.map((key) => metadata[key]);
  return (
    <>
      <hr className="bg-fadedBlack px-2 text-[.6px] border-neutral-400 mx-5 my-5" />
      <div className="mx-5">
        <div className="grid lg:grid-cols-2 max-w-[1000px] mx-auto">
          <div className="col-span-1 h-[55vh] aspect-auto lg:aspect-square relative flex p-5 py-8">
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
          <div className="col-span-1 text-xl mt-3 lg:mt-0 ml-0 lg:ml-5">
            <h1 className="uppercase text-4xl lg:6xl">{name}</h1>
            <h1 className="text-3xl lg:3xl">Program</h1>
            {description.length ? (
              <p className="text-base lg:text-xl">{description.join(" ")}</p>
            ) : (
              <p className="text-red-600">
                To add a description, go to the products metadata on stripe.
                Specifying a key &#40;the key needs to have
                &apos;description&apos; in the key name&#41; and a value with
                the text you want in the description. You can split the
                description into different metadatas if you surpass the 500
                character limit by adding a number to the end of each
                description key.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:justify-items-center mx-2">
        {includesFields.map((field, i) => (
          <CoachingFeature title={includesKeys[i]} desandicon={field} key={i} />
        ))}
      </div>
      <div className="flex justify-center items-center lg:flex-row flex-col text-center my-2 lg:gap-5">
        <p className="mb-2">Price: ${price * 0.01}</p>
        <AddToCart id={priceId}>Lets Get Started</AddToCart>
      </div>
      <p className="text-xs text-center">
        We support payment plans with Klarna&copy;
      </p>
    </>
  );
}

function CoachingFeature({ title, desandicon }) {
  const [icon, ...descriptionParts] = desandicon.split("-");
  const description = descriptionParts.join("-");

  return (
    <div className="flex flex-col mt-5">
      {icon.trim() === "Sun" ? (
        <SunIcon className="fill-bg bg-fadedBlack size-10 p-2 mb-2" />
      ) : icon.trim() === "Book" ? (
        <BookOpenIcon className="fill-bg bg-fadedBlack size-10 p-2 mb-2" />
      ) : icon.trim() === "Phone" ? (
        <PhoneIcon className="fill-bg bg-fadedBlack size-10 p-2 mb-2" />
      ) : icon.trim() === "Test" ? (
        <BeakerIcon className="fill-bg bg-fadedBlack size-10 p-2 mb-2" />
      ) : (
        <DevicePhoneMobileIcon className="fill-bg bg-fadedBlack size-10 p-2 mb-2" />
      )}
      <h1 className="font-satoshi font-bold text-xl lg:text-2xl">{title}</h1>
      <p className="text-neutral-500 text-base lg:text-lg">{description}</p>
    </div>
  );
}
