import Image from "next/image";
import Benefit from "../_components/Benefit";
import { getStripeProducts } from "../_lib/actions";
import CoachingProduct from "../_components/CoachingProduct";

export const revalidate = 0;

export default async function Page() {
  const products = await getStripeProducts();
  const coachingProducts = products.filter(
    (product) => product.product.unit_label === "coaching"
  );
  return (
    <>
      <div className="aspect-[4/3] md:aspect-[2/1] xl:aspect-[3/1] relative flex justify-end p-5">
        <Image
          src="/images/beach3.jpg"
          fill
          blur="true"
          alt="beach3"
          className="object-cover object-center"
          quality={100}
        />
      </div>
      <div className="mt-5">
        <h1 className="text-center text-xs lg:text-lg">
          Benefits of working with me
        </h1>
        <div className="flex justify-center bg gap-2">
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
          index={i}
        />
      ))}
    </>
  );
}
