"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";

export default function ActiveLink({ href, children, type, setOpenMenu }) {
  const pathname = usePathname();
  const [urlFragment, setUrlFragment] = useState("");
  const params = useParams();
  useEffect(() => {
    setUrlFragment(`/${window.location.hash}`);
  }, [urlFragment, params]);
  if (!type)
    return (
      <TransitionLink
        href={href}
        className={
          pathname === href || urlFragment === href
            ? "px-6 border-b-blackTrans flex items-center h-full border-b-2"
            : "px-6 h-full items-center flex border-b-transparent border-b-2"
        }
      >
        {children}
      </TransitionLink>
    );
  if (type === "mobile")
    return (
      <TransitionLink
        href={href}
        className={
          pathname === href || urlFragment === href
            ? "border-bg border-b-2 font-satoshi p-2 px-8 transition-all duration-200 text-bg"
            : "text-bg font-satoshi p-2 px-8 hover:border-bg border-b-2 border-b-transparent transition-all duration-200"
        }
        onClick={() => {
          setOpenMenu(false);
        }}
      >
        {children}
      </TransitionLink>
    );
}
