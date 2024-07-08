import Image from "next/image";

export default function Original({ original }) {
  const { images, name, description } = original.product;
  if (images[0] === undefined) {
    images[0] = "/images/sun.png";
  }
  return (
    <div className="border-[1px] border-fadedBlack p-2 hover:cursor-pointer">
      <div className="relative size-[25rem] mx-auto">
        <Image src={images[0]} alt={name} fill className="object-cover" />
      </div>
      <h1 className="text-2xl text-center">{name}</h1>
    </div>
  );
}
