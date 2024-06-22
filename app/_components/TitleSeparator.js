export default function TitleSeparator({ titleText }) {
  return (
    <div className="flex items-center justify-center lg:mx-[10rem] shadow-xl">
      <div className="h-[10vh] lg:h-[25vh] bg-bg w-full flex items-center">
        <h1 className="text-fadedBlack uppercase text-3xl mx-auto">
          {titleText}
        </h1>
      </div>
    </div>
  );
}
