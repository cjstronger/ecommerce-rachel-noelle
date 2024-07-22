import MenuNav from "./MenuNav";
import ActiveLink from "./ActiveLink";

export default function NavigationButtons({
  burger,
  openMenu,
  setOpenMenu,
  ref2,
  user,
}) {
  return !burger ? (
    <ul className="flex text-lg text-fadedBlack h-full font-satoshi lowercase">
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <ActiveLink href="/#about">About</ActiveLink>
      </li>
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <ActiveLink href="/#coaching">Coaching</ActiveLink>
      </li>
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <ActiveLink href="/artwork">Artwork</ActiveLink>
      </li>
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <ActiveLink href="/login">{user ? user : "user"}</ActiveLink>
      </li>
    </ul>
  ) : (
    <MenuNav openMenu={openMenu} setOpenMenu={setOpenMenu} ref2={ref2} />
  );
}
