export default function CoachingPhase({ title, phase, children }) {
  return (
    <div className="flex items-center gap-5">
      <div className="md:h-[400px] md:w-[400px] w-[280px] h-[300px] bg-primary lg:p-8 p-4 flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl text-center">{phase}</h2>
        <h1 className="text-3xl md:text-4xl text-center">{title}</h1>
        <p className="text-[15px] md:text-lg text-center">{children}</p>
      </div>
    </div>
  );
}
