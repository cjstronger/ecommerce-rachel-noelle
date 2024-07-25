"use client";

import { useState } from "react";
import Originals from "./Originals";

export default function ArtTab({ products, images }) {
  const [showOriginals, setShowOriginals] = useState(true);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center gap-5">
        <button
          className={`text-xl ${
            showOriginals ? "border-b-accent" : "border-b-transparent"
          } border-b-2 hover:border-b-accent transition-all duration-150`}
          onClick={() => setShowOriginals(true)}
        >
          Originals
        </button>
        <button
          className={`text-xl ${
            showOriginals ? "border-b-transparent" : "border-b-accent"
          } border-b-2 hover:border-b-accent transition-all duration-150`}
          onClick={() => setShowOriginals(false)}
        >
          Prints
        </button>
      </div>
      {showOriginals ? (
        <Originals products={products} images={images} />
      ) : (
        <div>There are currently no prints available.</div>
      )}
    </div>
  );
}
