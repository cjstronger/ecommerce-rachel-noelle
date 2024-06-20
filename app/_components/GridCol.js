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
      className={`min-h-[33vh] lg:min-h-[60vh] flex items-center justify-center col-span-${colSpan} bg-${bg} text-${textColor} shadow-${shadow} z-${z}`}
    >
      <div className="xl:mx-[7rem] mx-2">{children}</div>
    </div>
  );
}
