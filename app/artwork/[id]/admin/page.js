import AddToCart from "@/app/_components/AddToCart";
import BackButton from "@/app/_components/BackButton";
import EditImages from "@/app/_components/EditImages";
import ImageSlide from "@/app/_components/ImageSlide";
import ImageUpload from "@/app/_components/ImageUpload";
import Spinner from "@/app/_components/Spinner";
import { getStripeProducts } from "@/app/_lib/actions";
import { getImages } from "@/app/_lib/data-services";
import { Suspense } from "react";

export const revalidate = 0;

export default async function Page({ params }) {
  const data = await getImages(params.id);
  const imageUrls = data?.map((item) => {
    return item.imageUrl;
  });
  const products = await getStripeProducts();
  const [product] = products.filter((product) => {
    return product.id === params.id;
  });
  const { unit_amount } = product;
  let { name, images, description } = product.product;
  images = [...images, ...imageUrls];
  return (
    <div className="lg:mt-[8rem] mt-[6rem] m-2 mb-10">
      <BackButton />
      <Suspense fallback={<Spinner />}>
        <ImageSlide images={images} />
      </Suspense>
      <ImageUpload params={params} />
      <EditImages images={images} params={params} />
      <div className="flex flex-col items-center mt-5 mx-10">
        <h1 className="text-5xl">{name}</h1>
        <p className="max-w-[800px] mb-5">{description}</p>
        <div className="flex items-center gap-5">
          <p className="text-xl">${unit_amount * 0.01}.00</p>
          <AddToCart id={params.id}>Add to Cart</AddToCart>
        </div>
      </div>
    </div>
  );
}
