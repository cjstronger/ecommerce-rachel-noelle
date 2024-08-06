import { Suspense } from "react";
import ArtTab from "../_components/ArtTab";
import { getStripeProducts } from "../_lib/actions";
import { getAllImages } from "../_lib/data-services";
import OriginalsLoading from "../_components/OriginalsLoading";

export const metadata = { title: "Artwork" };

export const revalidate = 0;

export default async function ArtworkPage() {
  const products = await getStripeProducts();
  const images = await getAllImages();
  return (
    <div className="lg:mt-[7rem] mt-[6rem] flex flex-col items-center mb-5 mx-5">
      <h1 className="text-3xl">Rachel Noelle Artwork</h1>
      <p className="my-3 text-sm text-center px-5 lg:text-base">
        Rachel infuses the calming presence of spirit into her work and imprints
        high frequency energy that it may bring healing energy to the viewer.
      </p>
      <Suspense fallback={<OriginalsLoading />}>
        <ArtTab products={products} images={images} />
      </Suspense>
    </div>
  );
}
