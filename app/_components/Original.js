import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Original({ original, imageUrls }) {
  const router = useRouter();
  const { id } = original;
  const imageArray = imageUrls?.filter((imageObject) =>
    imageObject.imageUrl.includes(`${id}`)
  );
  let { images, name } = original.product;
  if (!images.length) images = imageArray;
  return (
    <div
      onClick={() => router.push(`/artwork/${id}`)}
      className="border-[1px] border-fadedBlack p-2 hover:cursor-pointer lg:size-[20rem] size-[12rem] flex flex-col justify-between"
    >
      <div className="relative size-[10rem] lg:size-[17rem] mx-auto">
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
      <h1 className="text-2xl text-center">{name}</h1>
    </div>
  );
}
