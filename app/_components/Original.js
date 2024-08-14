import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Original({ original, imageUrls }) {
  const router = useRouter();
  const { id } = original;
  const imageArray = imageUrls?.filter((imageObject) =>
    imageObject.imageUrl.includes(`${id}`)
  );
  let { images, name, metadata } = original.product;
  if (!images.length) images = imageArray;
  return (
    <div
      onClick={() => {
        router.push(`/artwork/${id}`);
      }}
      className={`p-2 hover:cursor-pointer lg:size-[20rem] sm:size-[12rem] size-[10rem] flex flex-col justify-between relative shadow-md ${
        metadata.sold === "true" && "bg-bgDark"
      }`}
    >
      {metadata.sold === "true" && (
        <h1 className="text-2xl absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 w-full text-center bg-bg z-10 opacity-75 shadow-lg">
          Sold
        </h1>
      )}
      <div className="relative sm:size-[10rem] size-[8rem] lg:size-[17rem] mx-auto">
        {!images.length ? (
          <h1 className="text-center text-xl">No images currently</h1>
        ) : (
          <Image
            src={images[0].imageUrl}
            alt={name}
            fill
            className="object-contain"
          />
        )}
      </div>
      <h1 className="lg:text-2xl text-lg text-center">{name}</h1>
    </div>
  );
}
