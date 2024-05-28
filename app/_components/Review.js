export default function Review({ review }) {
  const { fullName, stars, reviewText } = review;
  return (
    <div className="flex flex-col justify-center gap-5 p-5 items-center bg-accent max-w-[50rem] min-w-[30rem] h-[50rem]">
      <h1 className="text-6xl">{fullName}</h1>
      <h2 className="text-2xl">{stars} / 5 stars</h2>
      <p>{reviewText}</p>
    </div>
  );
}
