export default function OriginalsLoading() {
  const FAKE_ORIGINALS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="flex gap-5 mt-3">
        <div className="bg-bgDark rounded-lg w-10 h-3 animate-pulse" />
        <div className="bg-bgDark rounded-lg w-10 h-3 animate-pulse" />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-6">
        {FAKE_ORIGINALS.map((fake, i) => (
          <div
            key={i}
            className="lg:size-[20rem] size=[12rem] bg-bgDark rounded-lg animate-pulse"
          />
        ))}
      </div>
    </>
  );
}
