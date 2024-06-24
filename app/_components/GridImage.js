import Image from "next/image";

export default function GridImage({ src, colSpan, alt }) {
  return (
    <div className="z-10 relative aspect-[3/4] lg:aspect-auto">
      <Image
        alt={alt}
        fill
        quality={100}
        src={`${src}`}
        className={`col-span-${colSpan} object-none lg:object-cover object-right`}
      />
    </div>
  );
}
