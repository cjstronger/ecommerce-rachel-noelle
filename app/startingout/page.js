import CoachingProduct from "../_components/CoachingProduct";
import { getStripeProducts } from "../_lib/actions";

export const revalidate = 5;

export default async function Page() {
  const products = await getStripeProducts();
  const consultingProducts = products.filter(
    (product) => product.product.unit_label === "consultation"
  );
  return (
    <div className="mt-[3rem] lg:mt-[5rem]">
      <h1 className="lg:ml-[8rem] ml-5 text-lg lg:text-2xl">
        Ambitious but unsure?
      </h1>
      <h1 className="lg:ml-[8rem] ml-5 text-lg lg:text-2xl">
        Check out my more affordable options
      </h1>
      {consultingProducts.map((product, i) => (
        <CoachingProduct
          key={i}
          imageSrc={product.product.images[0]}
          name={product.product.name}
          metadata={product.product.metadata}
          price={product.unit_amount}
          priceId={product.id}
          index={i}
        />
      ))}
    </div>
  );
}
