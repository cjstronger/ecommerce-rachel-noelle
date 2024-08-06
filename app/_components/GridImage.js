import Image from "next/image";

export default function GridImage({ src, colSpan, alt }) {
  return (
    <div className="z-10 relative lg:aspect-auto md:aspect-[3/4] aspect-[1/2]">
      <Image
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, (min-width: 768px) 60vw, 80vw"
        quality={100}
        src={`${src}`}
        className={`col-span-${colSpan} object-none lg:object-cover`}
      />
    </div>
  );
}
