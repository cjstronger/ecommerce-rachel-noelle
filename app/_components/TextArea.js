"use client";

export default function TextArea({
  placeholder,
  label,
  name,
  register,
  errors,
  watch,
  id,
}) {
  const values = watch(name);
  return (
    <div className="flex flex-col mx-2 text-bg">
      <label className="text-xl font-satoshi" name={name} htmlFor={id}>
        {label}
      </label>
      <textarea
        {...register(name, {
          required: { value: true, message: "This field is required" },
          maxLength: { value: 800, message: "800 characters is the max" },
        })}
        placeholder={placeholder}
        className="min-w-[60%] p-2 font-satoshi bg-transparent border border-bg placeholder-neutral-500 focus:outline-none"
        id={id}
      />
      <div className="flex justify-between">
        <p>{values?.length}/800</p>
        {errors[name] && (
          <p className={"text-red-600 font-satoshi"}>{errors[name].message}</p>
        )}
      </div>
    </div>
  );
}
