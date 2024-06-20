import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import InstagramIcon from "./InstagramIcon";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import YoutubeIcon from "./YoutubeIcon";
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
];

const variants = {
  initial: {
    opacity: 0,
    translateY: 0,
  },
  enter: (i) => ({
    opacity: 1,
    translateY: -20,
    transition: { duration: 0.2, delay: (0.1 + i) * 0.08 },
  }),
  exit: {
    opacity: 0,
    translateY: 0,
    transition: { duration: 0.5 },
  },
};

export default function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className="mt-8">
      {menuItems.map((item, i) => (
        <motion.div
          animate={openMenu ? "enter" : "exit"}
          variants={variants}
          custom={i}
          exit={"exit"}
          key={i}
          className="flex flex-col text-5xl gap-5"
        >
          <Link
            className="font-satoshi p-2 px-8 hover:border-fadedBlack hover:scale-105 transition-all duration-[200]"
            href={item.href}
            onClick={() => setOpenMenu(false)}
          >
            {item.title}
          </Link>
        </motion.div>
      ))}
      <hr className="w-[80%] border-fadedBlack mx-auto mt-[40%]"></hr>
      <motion.div className="flex justify-center mt-5">
        <a href="https://www.instagram.com/rachel.n.peters" target="_blank">
          <InstagramIcon height="50" />
        </a>
        <a href="mailto:rachelnstrong@gmail.com">
          <EnvelopeIcon height="50" />
        </a>
        <a href="https://www.youtube.com/@rachelnoelleschannel" target="_blank">
          <YoutubeIcon height="50" />
        </a>
      </motion.div>
    </div>
  );
}
