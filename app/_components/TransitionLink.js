"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function TransitionLink({ children, href, className, onClick }) {
  const router = useRouter();
  const pathName = useRef("");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function handleTransition(e) {
    pathName.current = window.location.pathname;
    if (pathName.current === href) {
      return window.scrollTo({ top: 0, behavior: "smooth" });
    }
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    const body = document.getElementById("body");
    const footer = document.querySelector("footer");
    body.classList.add("transition");
    footer.classList.add("transition");
    await sleep(400);
    router.push(href);
    await sleep(200);
    window.scrollTo({ top: 0 });
    pathName.current = window.location.pathname;
  }

  useEffect(() => {
    const body = document.getElementById("body");
    const footer = document.querySelector("footer");

    const observer = new MutationObserver(async () => {
      await sleep(300);
      body.classList.remove("transition");
      footer.classList.remove("transition");
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [pathName]);

  return (
    <Link onClick={handleTransition} href={href} className={className}>
      {children}
    </Link>
  );
}
