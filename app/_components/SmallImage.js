import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function SmallImage({
  image,
  handleDragStart,
  i,
  contextImages,
  setContextImages,
}) {
  function handleDragOver(e) {
    e.preventDefault();
    highlightIndicator(e);
  }
  function handleDragEnd(e) {
    clearIndicators();
    const image = e.dataTransfer.getData("image");
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    const beforeorafter = element.dataset.beforeorafter || -1;
    const indexToCheck = contextImages.findIndex((el) => el === image);
    if (beforeorafter !== indexToCheck) {
      let copy = [...contextImages];
      let imageToMove = copy.find((img) => img === image);
      copy = copy.filter((c) => c !== image);
      const moveToBack = beforeorafter === "-1";
      if (moveToBack) {
        copy.push(imageToMove);
      } else {
        copy.splice(beforeorafter, 0, imageToMove);
      }
      setContextImages(copy);
    }
  }
  function handleDragLeave() {
    clearIndicators();
  }
  function clearIndicators(els) {
    const indicators = els || getIndicators();
    indicators.forEach((indicator) => {
      indicator.style.opacity = "0";
    });
  }
  function highlightIndicator(e) {
    const indicators = getIndicators();
    clearIndicators(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = ".5";
  }
  function getIndicators() {
    return Array.from(document.querySelectorAll(`[data-beforeorafter]`));
  }
  function getNearestIndicator(e, indicators) {
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offsetX = e.clientX - (box.left + box.width / 2);
        const offsetY = e.clientY - (box.top + box.height / 2);
        const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
        if (distance < closest.distance) {
          return { distance: distance, element: child };
        } else {
          return closest;
        }
      },
      {
        distance: Number.POSITIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  }

  function handleTouchStart(e) {
    e.preventDefault();
    handleDragStart(e.touches[0], image);
  }

  function handleTouchMove(e) {
    e.preventDefault();
    // Simulate drag over event
    handleDragOver(e.touches[0]);
  }

  function handleTouchEnd(e) {
    e.preventDefault();
    // Simulate drag end event
    handleDragEnd(e.changedTouches[0]);
  }

  return (
    <div className="flex">
      <DropIndicator beforeId={i} />
      <motion.div
        layout
        layoutId={`image-${i}`}
        draggable="true"
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragStart={(e) => handleDragStart(e, image)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.preventDefault()}
        className="border-2 border-fadedBlack size-[6rem] lg:size-[8rem] 2xl:size-[10rem] relative rounded-lg cursor-grab active:cursor-grabbing"
      >
        <div className="h-full w-full absolute transform -translate-x-1/2 left-1/2 translate-y-1/2 bottom-1/2 z-10 rounded-lg"></div>
        <Image
          src={`${image}`}
          alt="smallImage"
          fill
          sizes="20vw"
          className="object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}

function DropIndicator({ beforeId }) {
  return (
    <AnimatePresence>
      <div
        data-beforeorafter={beforeId}
        className="mx-2 w-2 h-[6rem] bg-accent opacity-0 rounded my-auto"
      />
    </AnimatePresence>
  );
}
