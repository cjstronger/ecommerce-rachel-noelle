import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex z-10">
      <ul className="flex gap-8 text-2xl">
        <li className="hover:scale-125 transition-all duration-200">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:scale-125 transition-all duration-200">
          <Link href="/coaching">Coaching</Link>
        </li>
        <li className="hover:scale-125 transition-all duration-200">
          <Link href="/artwork">Artwork</Link>
        </li>
      </ul>
    </nav>
  );
}
