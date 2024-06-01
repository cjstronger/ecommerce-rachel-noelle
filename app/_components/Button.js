"use client";

import { useFormStatus } from "react-dom";

export default function Button({ children }) {
  const { pending } = useFormStatus();
  return (
    <button className="font-satoshi lowercase border-fadedBlack border hover:bg-primaryFaded p-2 transition-all duration-400 text-2xl">
      {pending ? "subscribing" : children}
    </button>
  );
}
