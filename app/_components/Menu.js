import Link from "next/link";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import ActiveLink from "./ActiveLink";

const variants = {
  initial: {
    opacity: 0,
    translateY: 0,
  },
  enter: (i) => ({
    opacity: 1,
    translateY: -20,
    transition: { duration: 0.1, delay: (0.1 + i) * 0.05 },
  }),
  exit: {
    opacity: 0,
    translateY: 0,
    transition: { duration: 0.5 },
  },
};

export default function Menu({ openMenu, setOpenMenu, session }) {
  const menuItems = [
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Coaching",
      href: "/#coaching",
    },
    {
      title: "Artwork",
      href: "/artwork",
    },
    { title: `${session?.user?.name.split(" ")[0] || "User"}`, href: "/login" },
  ];
  return (
    <div className="mt-8">
      <div className="mb-[35%]">
        {menuItems.map((item, i) => (
          <motion.div
            animate={openMenu ? "enter" : "exit"}
            variants={variants}
            custom={i}
            exit={"exit"}
            key={i}
            className="flex flex-col text-5xl gap-5"
          >
            <ActiveLink
              type="mobile"
              href={item.href}
              setOpenMenu={setOpenMenu}
            >
              {item.title}
            </ActiveLink>
          </motion.div>
        ))}
      </div>
      <SignOutButton setOpenMenu={setOpenMenu} />
      <hr className="w-[80%] border-bg mx-auto mt-4 opacity-50"></hr>
      <motion.div className="flex justify-center mt-5 gap-4">
        <a
          href="https://www.instagram.com/rachelnoellesart"
          target="_blank"
          className="fill-bg hover:border-bg border-b-2 border-b-transparent transition-all duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
          </svg>
        </a>
        <a
          href="mailto:rachelnoellesart@gmail.com"
          className="text-bg hover:border-bg border-b-2 border-b-transparent transition-all duration-150"
        >
          <EnvelopeIcon height="50" />
        </a>
        <a
          href="https://www.youtube.com/@rachelnoelleschannel"
          target="_blank"
          className="fill-bg hover:border-bg border-b-2 border-b-transparent transition-all duration-150"
        >
          <svg
            height="50"
            viewBox="0 0 24 24"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M23.3,7.3c0-0.2-0.3-1.8-1-2.5c-0.9-1-1.9-1.1-2.4-1.1l-0.1,0c-3.1-0.2-7.7-0.2-7.8-0.2c0,0-4.7,0-7.8,0.2l-0.1,0   c-0.5,0-1.5,0.1-2.4,1.1c-0.7,0.8-1,2.4-1,2.6c0,0.1-0.2,1.9-0.2,3.8v1.7c0,1.9,0.2,3.7,0.2,3.8c0,0.2,0.3,1.8,1,2.5   c0.8,0.9,1.8,1,2.4,1.1c0.1,0,0.2,0,0.3,0c1.8,0.2,7.3,0.2,7.5,0.2c0,0,0,0,0,0c0,0,4.7,0,7.8-0.2l0.1,0c0.5-0.1,1.5-0.2,2.4-1.1   c0.7-0.8,1-2.4,1-2.6c0-0.1,0.2-1.9,0.2-3.8v-1.7C23.5,9.3,23.3,7.4,23.3,7.3z M15.9,12.2l-6,3.2c-0.1,0-0.1,0.1-0.2,0.1   c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.2-0.2-0.2-0.4l0-6.5c0-0.2,0.1-0.3,0.2-0.4S9.8,8,10,8.1l6,3.2c0.2,0.1,0.3,0.2,0.3,0.4   S16.1,12.1,15.9,12.2z" />
            </g>
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
