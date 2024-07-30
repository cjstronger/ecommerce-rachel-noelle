import MenuNav from "./MenuNav";
import ActiveLink from "./ActiveLink";
import { useUser } from "../_contexts/UsersContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavigationButtons({
  burger,
  openMenu,
  setOpenMenu,
  ref2,
}) {
  const { user } = useUser();
  const router = useRouter();

  function handleScroll(e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");
    const element = document.getElementById(id);
    if (window.location.pathname !== "/") {
      router.push("/");
    } else {
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return !burger ? (
    <ul className="flex text-lg text-fadedBlack h-full font-satoshi lowercase">
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <a
          className="px-6 h-full items-center flex border-b-transparent border-b-2"
          onClick={handleScroll}
          href="#about"
        >
          about
        </a>
      </li>
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <a
          className="px-6 h-full items-center flex border-b-transparent border-b-2"
          onClick={handleScroll}
          href="#coaching"
        >
          coaching
        </a>
      </li>
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <ActiveLink href="/artwork">Artwork</ActiveLink>
      </li>
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <ActiveLink href="/login">
          {user?.app_metadata?.full_name
            ? user.app_metadata.full_name.split(" ")[0]
            : "user"}
        </ActiveLink>
      </li>
      {user?.role === "service_role" && (
        <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
          <ActiveLink href="/apply/applicants">Applicants</ActiveLink>
        </li>
      )}
    </ul>
  ) : (
    <MenuNav openMenu={openMenu} setOpenMenu={setOpenMenu} ref2={ref2} />
  );
}
