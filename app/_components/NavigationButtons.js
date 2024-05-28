import Link from "next/link";
import MenuNav from "./MenuNav";

export default function NavigationButtons({ burger, openMenu, setOpenMenu }) {
  return !burger ? (
    <nav className="flex z-10">
      <ul className="flex gap-8 text-2xl">
        <li>
          <Link
            href="/#about"
            className="hover:bg-accentFaded border-fadedBlack border  p-3 transition-all duration-400 font-rubik lowercase"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#coaching"
            className="hover:bg-accentFaded p-3 transition-all duration-400 font-rubik lowercase border-fadedBlack border"
          >
            Coaching
          </Link>
        </li>
        <li>
          <Link
            href="/artwork"
            className="hover:bg-accentFaded p-3 transition-all duration-400 font-rubik lowercase border-fadedBlack border"
          >
            Artwork
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <MenuNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
  );
}
