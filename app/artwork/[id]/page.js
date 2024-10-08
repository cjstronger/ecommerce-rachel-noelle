import AddToCart from "@/app/_components/AddToCart";
import BackButton from "@/app/_components/BackButton";
import ImageSlide from "@/app/_components/ImageSlide";
import { ImageProvider } from "@/app/_contexts/ImageContext";
import { getStripeProducts } from "@/app/_lib/actions";
import { getImages } from "@/app/_lib/data-services";

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const name = (await getStripeProducts()).filter(
    (product) => product.id === params.id
  )[0].product.name;
  return { title: `${name}` };
}

export default async function Page({ params }) {
  const data = await getImages(params.id);
  const imageUrls = data?.map((item) => {
    return item;
  });
  const products = await getStripeProducts();
  const [product] = products.filter((product) => {
    return product.id === params.id;
  });
  const { unit_amount } = product;
  let { name, images, description, metadata } = product.product;
  images = [...images, ...imageUrls];

  return (
    <div className="lg:mt-[2rem] mt-[1rem] m-2 mb-10">
      <BackButton />
      <ImageProvider serverImages={images}>
        <ImageSlide />
      </ImageProvider>
      <div className="flex flex-col items-center mt-5 mx-10">
        <h1 className="lg:text-5xl text-3xl">{name}</h1>
        <p className="max-w-[800px] mb-5">{description}</p>
        <div className="flex items-center gap-5">
          <p className="text-xl">${unit_amount * 0.01}.00</p>
          {metadata.sold === "true" ? (
            <p className="border-[1px] border-fadedBlack py-2 px-5 text-xl cursor-default">
              Sold
            </p>
          ) : (
            <AddToCart id={params.id}>Add to Cart</AddToCart>
          )}
        </div>
        {!metadata.sold && (
          <p className="text-xs mt-2">
            We support payment plans with Klarna&copy;
          </p>
        )}
      </div>
    </div>
  );
}
