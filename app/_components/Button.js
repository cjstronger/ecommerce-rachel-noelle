"use client";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="font-satoshi lowercase border-fadedBlack border hover:bg-primaryFaded p-2 transition-all duration-400 text-xl min-h-[50px] min-w-[125px] flex justify-center items-center"
    >
      {children}
    </button>
  );
}
