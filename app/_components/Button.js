"use client";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="font-satoshi hover:text-white border-fadedBlack border hover:bg-accent p-2 transition-all duration-400 text-lg lg:text-xl min-h-[50px] min-w-[125px] flex justify-center items-center"
    >
      {children}
    </button>
  );
}
