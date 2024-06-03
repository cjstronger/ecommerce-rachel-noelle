"use client";

export default function TextArea({ placeholder, label, name }) {
  return (
    <div className="flex flex-col mx-2">
      <h1 className="text-lg font-satoshi" name={name}>
        {label}:{" "}
      </h1>
      <textarea
        required
        name={name}
        placeholder={placeholder}
        className="min-w-[60%] max-w-[50rem] p-2 font-satoshi bg-transparent border border-fadedBlack placeholder-blackTrans focus:outline-none"
      />
    </div>
  );
}
