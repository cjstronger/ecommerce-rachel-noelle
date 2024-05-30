export default function Input({ label, placeholder, id, name }) {
  return (
    <div className="flex gap-2 items-center justify-between">
      <h1 className="text-2xl font-semibold">{label}:</h1>
      <input
        id={id}
        name={name}
        className="rounded-full w-[60%] p-2 font-rubik"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
