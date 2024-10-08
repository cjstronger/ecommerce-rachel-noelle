import Link from "next/link";
import TransitionLink from "./_components/TransitionLink";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-bgDark w-full h-[15rem] flex flex-col justify-evenly items-center text-xl shadow-md mt-[5rem]">
      <div className="flex gap-5 font-satoshi">
        <Link
          target="_blank"
          href="https://www.youtube.com/@rachelnoelleschannel"
          className="border-[1px] border-fadedBlack md:w-[125px] w-[110px] h-[45px] flex justify-center items-center hover:bg-accentFaded transition-all duration-150"
        >
          Youtube
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/rachelnoelles/"
          className="border-[1px] border-fadedBlack md:w-[125px] w-[110px] h-[45px] flex justify-center items-center hover:bg-accentFaded transition-all duration-150"
        >
          Instagram
        </Link>
        <Link
          target="_blank"
          href="mailto:rachelnoellesart@gmail.com"
          className="border-[1px] border-fadedBlack md:w-[125px] w-[110px] h-[45px] flex justify-center items-center hover:bg-accentFaded transition-all duration-150"
        >
          Email
        </Link>
      </div>
      <div>
        <TransitionLink
          href="/privacy-policy"
          className="text-lg border-x-[1px] border-fadedBlack px-2 lg:inline hidden"
        >
          Privacy Policy
        </TransitionLink>
        <TransitionLink
          href="/termsofservice"
          className="text-lg border-r-[1px] border-fadedBlack px-2 lg:inline hidden"
        >
          Terms of Service
        </TransitionLink>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center lg:flex-row justify-between mx-10">
          <h1>Rachel Noelle &copy; {year}</h1>
          <div>
            <TransitionLink
              href="/privacy-policy"
              className="text-base border-x-[1px] border-fadedBlack px-2 lg:hidden"
            >
              Privacy Policy
            </TransitionLink>
            <TransitionLink
              className="text-base border-r-[1px] border-fadedBlack px-2 lg:hidden"
              href="/termsofservice"
            >
              Terms of Service
            </TransitionLink>
          </div>
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
