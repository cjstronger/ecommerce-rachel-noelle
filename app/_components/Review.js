export default function Review({ review }) {
  const { fullName, stars, reviewText } = review;
  return (
    <div className="flex flex-col justify-center gap-5 p-5 items-center bg-accent min-w-[100%] h-[50vh] text-bg">
      <h1 className="text-5xl lg:text-6xl">{fullName}</h1>
      <h2 className="text-3xl">{stars} / 5 stars</h2>
      <p className="px-8 text-lg md:text-xl">{reviewText}</p>
    </div>
  );
}
