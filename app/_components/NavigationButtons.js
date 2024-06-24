import Link from "next/link";
import MenuNav from "./MenuNav";

export default function NavigationButtons({
  burger,
  openMenu,
  setOpenMenu,
  session,
  ref2,
}) {
  return !burger ? (
    <ul className="flex text-lg py-3 text-fadedBlack">
      <li>
        <Link
          href="/#about"
          className="hover:bg-accentFaded p-[14px] px-6 transition-all duration-200 font-satoshi lowercase border-r-2 border-blackTrans"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/#coaching"
          className="hover:bg-accentFaded p-[14px] px-6 transition-all duration-200 font-satoshi lowercase border-blackTrans border-r-2"
        >
          Coaching
        </Link>
      </li>
      <li>
        <Link
          href="/artwork"
          className="hover:bg-accentFaded p-[14px] px-6 transition-all duration-200 font-satoshi lowercase border-blackTrans border-r-2"
        >
          Artwork
        </Link>
      </li>
      <li>
        <Link
          href="/login"
          className="hover:bg-accentFaded p-[14px] px-6 transition-all duration-200 font-satoshi lowercase border-blackTrans border-r-2"
        >
          {session?.user?.name.split(" ")[0] || "user"}
        </Link>
      </li>
    </ul>
  ) : (
    <MenuNav openMenu={openMenu} setOpenMenu={setOpenMenu} ref2={ref2} />
  );
}
