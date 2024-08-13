import Image from "next/image";

export default function SmallImage({ image }) {
  return (
    <div className="border-[1px] border-neutral-400 h-[5rem] w-[13rem] lg:w-[35rem] relative rounded-lg cursor-grab active:cursor-grabbing">
      <div className="h-full w-full absolute transform -translate-x-1/2 left-1/2 translate-y-1/2 bottom-1/2 z-10 rounded-lg"></div>
      <Image
        src={`${image}`}
        alt="smallImage"
        fill
        sizes="41vw lg:55vw"
        className="object-cover rounded-lg"
      />
    </div>
  );
}
