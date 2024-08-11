import { Suspense } from "react";
import ArtTab from "../_components/ArtTab";
import { getStripeProducts } from "../_lib/actions";
import { getAllImages } from "../_lib/data-services";
import OriginalsLoading from "../_components/OriginalsLoading";
import Link from "next/link";

export const metadata = { title: "Artwork" };

export const revalidate = 0;

export default async function ArtworkPage() {
  const products = await getStripeProducts();
  const images = await getAllImages();
  return (
    <div className="lg:mt-[4rem] mt-[3rem] flex flex-col items-center mb-5 mx-5">
      <h1 className="text-3xl">Rachel Noelle Artwork</h1>
      <p className="my-3 text-sm text-center px-5 lg:text-base">
        Rachel infuses the calming presence of spirit into her work and imprints
        high frequency energy that it may bring healing energy to the viewer.
      </p>
      <Suspense fallback={<OriginalsLoading />}>
        <ArtTab products={products} images={images} />
      </Suspense>
      <p className="mt-5 lg:text-base text-sm">For more about my art</p>
      <p className="mb-2 lg:text-base  text-sm">
        check out my art specific instagram
      </p>
      <Link
        className="fill-bg hover:fill-neutral-500 bg-accent rounded-full p-2 transition-all duration-150"
        href="https://www.instagram.com/rachelnoellesart"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
        </svg>
      </Link>
    </div>
  );
}
