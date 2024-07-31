"use client";

import { useFormStatus } from "react-dom";

export default function Input({
  label,
  placeholder,
  id,
  name,
  register,
  errors,
  errorType,
  hidden,
  type,
}) {
  let errorPattern = "none";
  if (errorType === "name")
    errorPattern = [
      { value: 50, message: "Name cannot be over 50 characters" },
    ];
  if (errorType === "email")
    errorPattern = [
      { value: 254, message: "email cannot be over 254 characters" },
      {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "email must be valid (contains a . and an @)",
      },
    ];
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col mx-2 text-bg">
      <label htmlFor={id} className="text-xl font-satoshi">
        {label}:
      </label>
      <input
        type={type}
        name={name}
        id={id}
        {...register(name, {
          required: { value: true, message: "This field is required" },
          maxLength: errorPattern[0],
          pattern: {
            value: errorPattern[1]?.pattern,
            message: errorPattern[1]?.message,
          },
        })}
        className="min-w-[50%] max-w-[30rem] text-lg p-2 font-satoshi bg-transparent border border-bg text-bg focus:outline-none placeholder-neutral-500 autofill:text-bg"
        placeholder={placeholder}
        disabled={pending}
        hidden={hidden}
      />
      {errors[name] && (
        <span className="text-red-600 text-md font-satoshi">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}
