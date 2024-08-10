import Image from "next/image";

export default function Review({ review }) {
  const { fullName, reviewText, img } = review;
  return (
    <div className="snap-start grid grid-rows-[auto, auto, 1fr] place-items-center p-2 items-center bg-accent min-w-[100%] h-[80vh] lg:h-[70vh] text-bg overflow-scroll pt-5">
      {img ? (
        <div className="rounded-full w-[5rem] min-h-[5rem] relative border-2 border-bg row-span-1">
          <Image
            src={img}
            fill
            alt={fullName}
            className="object-cover rounded-full"
            sizes={"18vw"}
          />
        </div>
      ) : (
        <div className="rounded-full h-[5rem] w-[5rem] bg-bgDark flex items-center justify-center text-center row-span-1">
          {fullName}
        </div>
      )}
      <h1 className="text-5xl lg:text-6xl row-span-1">{fullName}</h1>
      <p className="px-8 text-md md:text-lg mb-5 row-span-3">{reviewText}</p>
    </div>
  );
}
