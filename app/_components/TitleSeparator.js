export default function TitleSeparator({ titleText }) {
  return (
    <div className="flex items-center justify-center lg:mx-10">
      <div className="h-[10vh] lg:h-[25vh] bg-fadedBlack w-full flex items-center">
        <h1 className="text-primary uppercase text-3xl mx-auto">{titleText}</h1>
      </div>
    </div>
  );
}
