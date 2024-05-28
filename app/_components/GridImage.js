import Image from "next/image";

export default function GridImage({ src, colSpan, alt }) {
  return (
    <div className="z-10 md:aspect-square aspect-[2/3] shadow-2xl">
      <Image
        alt={alt}
        height="1000"
        width="1000"
        quality={100}
        src={`${src}`}
        className={`col-span-${colSpan} object-cover object-right min-w-[70%] h-[100vh]`}
      />
    </div>
  );
}
