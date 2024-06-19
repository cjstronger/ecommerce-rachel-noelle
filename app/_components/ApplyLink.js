import Link from "next/link";

export default function ApplyLink({ buttonText, hoverColor, color }) {
  return (
    <Link
      href="/apply"
      className={`max-w-[10rem] lg:text-xl text-md items-center font-satoshi border p-2 lg:p-4 border-fadedBlack hover:bg-${hoverColor} bg-${color} transition-all`}
    >
      {buttonText}
    </Link>
  );
}
