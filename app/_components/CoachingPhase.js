export default function CoachingPhase({ title, phase, children }) {
  return (
    <div className="flex items-center gap-5 text-bg">
      <div className="md:h-[400px] md:w-[400px] w-[32vh] h-[35vh] bg-accent lg:p-8 p-4 flex flex-col mr-4">
        <h2 className="text-xl md:text-2xl text-center">{phase}</h2>
        <h1 className="text-[3vh] md:text-4xl text-center">{title}</h1>
        <p className="text-[1.65vh] md:text-lg text-center">{children}</p>
      </div>
    </div>
  );
}
