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
      className={`min-h-[50rem] flex items-center col-span-${colSpan} bg-${bg} text-${textColor} shadow-${shadow} z-${z}`}
    >
      <div className="m-[8.5rem] mt-[5rem]">{children}</div>
    </div>
  );
}
