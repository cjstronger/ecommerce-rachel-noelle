import Image from "next/image";

export default function GridImage({ src, colSpan, alt }) {
  return (
    <div className="z-10 relative">
      <Image
        alt={alt}
        fill
        quality={100}
        src={`${src}`}
        className={`col-span-${colSpan} object-cover object-right min-w-[50%]`}
      />
    </div>
  );
}
