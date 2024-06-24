import Image from "next/image";

export default function Benefit({ src, alt, children }) {
  return (
    <div className="h-[30vh] w-[13vh] lg:w-[20vh]  flex flex-col justify-center gap-10">
      <div className="relative w-[70%] h-[30%] lg:h-[45%]  place-self-center">
        <Image src={`/images/${src}`} quality={100} fill alt={alt} />
      </div>
      <p className="text-center text-[12px] lg:text-lg">{children}</p>
    </div>
  );
}
