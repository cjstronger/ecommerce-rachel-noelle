import Link from "next/link";

export default function ApplyLink({ buttonText, hoverColor }) {
  return (
    <Link
      href="/#coaching"
      className={`text-xl font-rubik border p-5 border-fadedBlack hover:bg-${hoverColor} transition-all`}
    >
      {buttonText} &rarr;
    </Link>
  );
}
