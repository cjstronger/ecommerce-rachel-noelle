export default function CoachingPhase({ title, phase, children, color }) {
  return (
    <div className="flex items-center gap-5">
      <div className="md:h-[300px] md:w-[280px] w-[150px] h-[180px] bg-primary lg:p-8 p-4 flex flex-col gap-2">
        <h2 className="text-xs md:text-lg text-center">P{phase}</h2>
        <h1 className="text-lg md:text-3xl text-center">{title}</h1>
        <p className="text-[7px] md:text-xs text-center">{children}</p>
      </div>
    </div>
  );
}
