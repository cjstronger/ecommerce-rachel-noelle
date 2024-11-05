import MenuNav from "./MenuNav";
import ActiveLink from "./ActiveLink";
import { useUser } from "../_contexts/UsersContext";
import { useRouter } from "next/navigation";

export default function NavigationButtons({
  burger,
  openMenu,
  setOpenMenu,
  ref2,
}) {
  const { user } = useUser();
  const router = useRouter();

  const sleep = (ms) =>
    new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });

  async function handleScroll(e) {
    setOpenMenu(false);
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");
    if (window.location.pathname !== "/") {
      router.push("/");
      await sleep(500);
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return !burger ? (
    <ul className="flex text-md text-fadedBlack h-full font-satoshi">
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <a
          className="px-6 h-full items-center flex border-b-transparent border-b-2"
          onClick={handleScroll}
          href="#about"
        >
          About
        </a>
      </li>
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <a
          className="px-6 h-full items-center flex border-b-transparent border-b-2"
          onClick={handleScroll}
          href="#coaching"
        >
          Coaching
        </a>
      </li>
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <ActiveLink href="/artwork">Artwork</ActiveLink>
      </li>
      <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
        <ActiveLink href="/resources">Resources</ActiveLink>
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
