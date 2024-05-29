export default function Input({ label, placeholder }) {
  return (
    <div className="flex gap-2 items-center justify-between">
      <h1 className="text-2xl">{label}:</h1>
      <input
        className="rounded-full w-[60%] p-2 font-rubik"
        placeholder={placeholder}
      />
    </div>
  );
}
