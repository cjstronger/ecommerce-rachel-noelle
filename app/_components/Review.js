import Image from "next/image";

export default function Review({ review }) {
  const { fullName, reviewText, img } = review;
  return (
    <div className="reviews snap-start flex flex-col place-items-center p-2 items-center bg-accent min-w-[100%] h-[80vh] lg:h-[70vh] text-bg overflow-scroll pt-5">
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
        <div className="rounded-full h-[5rem] w-[5rem] bg-bgDark flex items-center justify-center text-center">
          {fullName}
        </div>
      )}
      <h1 className="mt-5 text-2xl lg:text-3xl">{fullName}</h1>
      <p className="mt-5 px-8 lg:px-[12rem] text-md md:text-xl mb-5">
        {reviewText}
      </p>
    </div>
  );
}
