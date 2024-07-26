import Image from "next/image";

export default function Review({ review }) {
  const { fullName, reviewText, img } = review;
  return (
    <div className="snap-start flex flex-col justify-center gap-5 p-5 items-center bg-accent min-w-[100%] h-[60vh] text-bg">
      {img ? (
        <div className="rounded-full size-11">
          <Image src={img} fill alt={fullName} />
        </div>
      ) : (
        <div className="rounded-full h-[5rem] w-[5rem] bg-bgDark flex items-center justify-center text-center">
          {fullName}
        </div>
      )}
      <h1 className="text-5xl lg:text-6xl">{fullName}</h1>
      <p className="px-8 text-lg md:text-xl">{reviewText}</p>
    </div>
  );
}
