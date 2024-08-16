import Image from "next/image";

export default function Benefit({ src, alt, children }) {
  return (
    <div className="h-[13vh] lg:h-[20vh] w-[10vh] lg:w-[150px] flex flex-col justify-center gap-2">
      <div className="relative w-[70%] h-[55%] place-self-center">
        <Image src={`/images/${src}`} quality={100} fill alt={alt} />
      </div>
      <p className="text-center sm:text-[12px] text-[10px] lg:text-lg">
        {children}
      </p>
    </div>
  );
}
