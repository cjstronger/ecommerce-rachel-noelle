export default function TitleSeparator({ titleText }) {
  return (
    <div className="flex items-center">
      <div className="h-[25vh] bg-fadedBlack w-full mx-5 flex items-center">
        <h1 className="text-primary uppercase text-[9rem] m-[3rem]">
          {titleText}
        </h1>
      </div>
    </div>
  );
}
