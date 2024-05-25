import Image from "next/image";
import test from "@/public/images/test.jpg";

export default function Page() {
  return (
    <>
      <div className="flex justify-center relative lg:aspect-[2/1] sm:aspect-square aspect-[2/3]">
        <Image
          className="object-none shadow-lg"
          src={test}
          width="2000"
          height="2000"
          quality={100}
        />
        <h1 className="z-10 text-8xl absolute left-5 bottom-[-2.5rem] xl:left-[20rem]">
          Rachel
        </h1>
        <h1 className="z-10 text-8xl absolute right-5 bottom-[-2.5rem] xl:right-[20rem]">
          Noelle
        </h1>
      </div>
      <div className="mx-11">
        <h1 className="absolute z-10 bottom-[-15rem] text-6xl">About</h1>
      </div>
    </>
  );
}
