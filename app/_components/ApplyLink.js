import Link from "next/link";

export default function ApplyLink({ buttonText, hoverColor, color }) {
  return (
    <Link
      href="/apply"
      className={`max-w-[10rem] text-center flex text-xl items-center font-satoshi border p-5 border-fadedBlack hover:bg-${hoverColor} bg-${color} transition-all max-h-[5rem]`}
    >
      {buttonText} <span>&rarr;</span>
    </Link>
  );
}
