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
    <ul className="flex text-lg text-fadedBlack h-full font-satoshi lowercase">
      <li className="border-r-2 border-blackTrans flex items-center px-6 hover:bg-accentFaded">
        <Link href="/#about">About</Link>
      </li>
      <li className="border-r-2 border-blackTrans flex items-center px-6 hover:bg-accentFaded">
        <Link href="/#coaching">Coaching</Link>
      </li>
      <li className="border-r-2 border-blackTrans flex items-center px-6 hover:bg-accentFaded">
        <Link href="/artwork">Artwork</Link>
      </li>
      <li className="border-r-2 border-blackTrans flex items-center px-6 hover:bg-accentFaded">
        <Link href="/login">{session?.user?.name.split(" ")[0] || "user"}</Link>
      </li>
    </ul>
  ) : (
    <MenuNav openMenu={openMenu} setOpenMenu={setOpenMenu} ref2={ref2} />
  );
}
