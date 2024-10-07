import Image from "next/image";
import FreeGuideForm from "../_components/FreeGuideForm";

export default function Page() {
  return (
    <div className="mt-[2rem] lg:flex flex-column">
      <Image
        src="/images/rachel-guide-cover.jpg"
        alt="free-guide"
        quality={100}
        width="300"
        height="300"
        className="mx-auto mb-5"
      />
      <FreeGuideForm />
    </div>
  );
}
