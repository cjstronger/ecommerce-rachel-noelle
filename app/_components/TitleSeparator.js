export default function TitleSeparator({ titleText }) {
  return (
    <div className="flex items-center justify-center mx-5">
      <div className="h-[25vh] bg-fadedBlack w-full flex items-center">
        <h1 className="text-primary uppercase md:text-[10rem] text-[6rem] m-[3rem]">
          {titleText}
        </h1>
      </div>
    </div>
  );
}
