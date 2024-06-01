"use client";

import { useFormStatus } from "react-dom";

export default function Input({ label, placeholder, id, name }) {
  const { pending, data } = useFormStatus();
  return (
    <div className="flex flex-col mx-2">
      <h1 className="text-lg font-satoshi">{label}:</h1>
      <input
        id={id}
        name={name}
        className="min-w-[60%] max-w-[50rem] p-2 font-satoshi bg-transparent border border-fadedBlack placeholder-blackTrans focus:outline-none"
        placeholder={placeholder}
        required
        disabled={pending}
      />
    </div>
  );
}
