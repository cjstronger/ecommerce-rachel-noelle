import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActiveLink({ href, children, type, setOpenMenu }) {
  const pathname = usePathname();
  const [urlFragment, setUrlFragment] = useState("");
  const params = useParams();
  useEffect(() => {
    setUrlFragment(`/${window.location.hash}`);
  }, [urlFragment, params]);
  if (!type)
    return (
      <Link
        href={href}
        className={
          pathname === href || urlFragment === href
            ? "text-white w-full h-full"
            : "px-6 h-full items-center flex"
        }
      >
        {children}
      </Link>
    );
  if (type === "mobile")
    return (
      <Link
        href={href}
        className={
          pathname === href || urlFragment === href
            ? "text-bg font-satoshi p-2 px-8 hover:text-bg transition-all duration-200"
            : "font-satoshi p-2 px-8 hover:text-bg transition-all duration-200"
        }
        onClick={() => {
          setOpenMenu(false);
        }}
      >
        {children}
      </Link>
    );
}
