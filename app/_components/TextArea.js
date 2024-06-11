"use client";

export default function TextArea({ placeholder, label, name, register }) {
  return (
    <div className="flex flex-col mx-2">
      <h1 className="text-lg font-satoshi" name={name}>
        {label}:{" "}
      </h1>
      <textarea
        /*{...register(name, { required: true })}*/
        placeholder={placeholder}
        className="min-w-[60%] max-w-[50rem] p-2 font-satoshi bg-transparent border border-fadedBlack placeholder-blackTrans focus:outline-none"
      />
    </div>
  );
}
