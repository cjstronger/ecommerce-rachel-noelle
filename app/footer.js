import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-bgDark w-full h-[15rem] flex flex-col justify-evenly items-center gap-5 text-xl shadow-md">
      <div className="flex gap-5">
        <Link
          target="_blank"
          href="https://www.youtube.com/@rachelnoelleschannel"
          className="border-[1px] border-fadedBlack p-2 hover:bg-bg transition-all duration-150"
        >
          Youtube
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/rachelnoellesart"
          className="border-[1px] border-fadedBlack p-2 hover:bg-bg transition-all duration-150"
        >
          Instagram
        </Link>
        <Link
          target="_blank"
          href="mailto:rachelnoellesart@gmail.com"
          className="border-[1px] border-fadedBlack p-2 hover:bg-bg transition-all duration-150"
        >
          Email
        </Link>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center lg:flex-row justify-between mx-10">
          <h1>Rachel Noelle &copy; {year}</h1>
          <Link
            target="_blank"
            href="https://www.github.com/cjstronger"
            className="text-lg"
          >
            Design and Development by Clint Strong
          </Link>
        </div>
      </div>
    </footer>
  );
}
