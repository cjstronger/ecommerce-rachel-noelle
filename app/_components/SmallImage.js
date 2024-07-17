import Image from "next/image";
import { CheckmarkIcon } from "react-hot-toast";

export default function SmallImage({ image, selected, onClick }) {
  const imageSelected = selected.filter(
    (selectedImage) => selectedImage === image
  );
  return (
    <div
      onClick={onClick}
      className="border-2 border-fadedBlack size-[6rem] relative rounded-lg"
    >
      {imageSelected.length && (
        <div className="absolute transform -translate-x-1/2 left-1/2 translate-y-1/2 bottom-1/2 z-10">
          <CheckmarkIcon />
        </div>
      )}
      <Image
        src={`${image}`}
        alt="smallImage"
        fill
        sizes="20vw"
        className="object-cover rounded-lg"
      />
    </div>
  );
}
