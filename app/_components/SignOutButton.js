"use client";

export default function SignOutButton({ setOpenMenu, type }) {
  if (!type)
    return (
      <button
        onClick={() => setOpenMenu(false)}
        className="text-bg text-5xl font-satoshi px-8 hover:border-bg border-b-2 border-b-transparent transition-all duration-150 w-full text-left "
      >
        Logout
      </button>
    );
  return (
    <button className="border-2 border-fadedBlack w-[50%] p-2 hover:bg-fadedBlack hover:text-white transition-all duration-150 hover:text-3xl text-2xl">
      logout
    </button>
  );
}
