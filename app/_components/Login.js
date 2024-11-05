"use client";

import { useLayoutEffect, useState } from "react";
import { useUser } from "../_contexts/UsersContext";
import ActiveLink from "./ActiveLink";

export default function Login() {
  const { user } = useUser();
  const [burger, setBurger] = useState(false);
  useLayoutEffect(() => {
    function handleWidth() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 1000) {
        setBurger(true);
      } else {
        setBurger(false);
      }
    }

    handleWidth();

    window.addEventListener("resize", handleWidth);

    return function () {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <>
      {!burger && (
        <ul className="flex text-md text-fadedBlack h-full font-satoshi">
          <li className="transition-all duration-100 border-b-2 border-b-transparent hover:border-b-blackTrans">
            <ActiveLink href="/login">
              {user?.user_metadata?.full_name
                ? user.user_metadata.full_name.split(" ")[0]
                : "Login"}
            </ActiveLink>
          </li>
        </ul>
      )}
    </>
  );
}
