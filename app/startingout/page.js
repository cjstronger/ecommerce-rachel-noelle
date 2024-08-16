import CoachingProduct from "../_components/CoachingProduct";
import { getStripeProducts } from "../_lib/actions";

export default async function Page() {
  const products = await getStripeProducts();
  const consultingProducts = products.filter(
    (product) => product.product.unit_label === "consultation"
  );
  return (
    <div className="mt-8">
      <h1 className="lg:ml-[8rem] ml-5 text-lg lg:text-2xl">
        Ambitious but unsure of my product?
      </h1>
      <h1 className="lg:ml-[8rem] ml-5 text-lg lg:text-2xl">
        Check my more affordable options out
      </h1>
      {consultingProducts.map((product, i) => (
        <CoachingProduct
          key={i}
          imageSrc={product.product.images[0]}
          name={product.product.name}
          metadata={product.product.metadata}
          price={product.unit_amount}
          priceId={product.id}
        />
      ))}
    </div>
  );
}
