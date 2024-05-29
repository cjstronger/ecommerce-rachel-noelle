export default function GridCol({
  children,
  colSpan,
  bg,
  textColor,
  shadow,
  z,
}) {
  return (
    <div
      className={`min-h-[40rem] flex items-center justify-center col-span-${colSpan} bg-${bg} text-${textColor} shadow-${shadow} z-${z}`}
    >
      <div className="xl:m-[7rem] md:m-[4rem] m-[2rem]">{children}</div>
    </div>
  );
}
