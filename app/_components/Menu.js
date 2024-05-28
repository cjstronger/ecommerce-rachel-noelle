import Link from "next/link";
import { motion } from "framer-motion";
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
    translateY: 30,
    transition: { duration: 0.5, delay: (0.5 + i) * 0.2 },
  }),
  exit: {
    opacity: 0,
    translateY: 0,
    transition: { duration: 0.5 },
  },
};

export default function Menu({ openMenu }) {
  return (
    <div>
      {menuItems.map((item, i) => (
        <motion.div
          animate={openMenu ? "enter" : "exit"}
          variants={variants}
          custom={i}
          exit={"exit"}
          key={i}
          className="flex flex-col text-5xl gap-5 p-2 justify-center items-center mt-5"
        >
          <Link
            className=" p-2 px-4 hover:bg-primaryFaded border border-accent hover:border-fadedBlack hover:scale-110 transition-all duration-[200]"
            href={item.href}
          >
            {item.title}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
