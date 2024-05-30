import { useFormStatus } from "react-dom";

export default function Button({ children }) {
  const { pending } = useFormStatus();
  return (
    <button className="absolute bottom-4 right-6 font-rubik lowercase border-fadedBlack border hover:bg-accentFaded p-2 transition-all duration-400 text-2xl">
      {pending ? "subscribing" : children}
    </button>
  );
}
