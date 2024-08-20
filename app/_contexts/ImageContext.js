"use client";

import React, { createContext, useContext, useState } from "react";
import { getImages } from "../_lib/data-services";

const ImageContext = createContext();

function ImageProvider({ children, serverImages }) {
  const [contextImages, setContextImages] = useState(serverImages);

  async function getImagesById(id) {
    const data = await getImages(id);
    setContextImages(data);
  }

  return (
    <ImageContext.Provider
      value={{ contextImages, setContextImages, getImagesById }}
    >
      {children}
    </ImageContext.Provider>
  );
}

function useImages() {
  const context = useContext(ImageContext);
  if (context === undefined)
    throw new Error(
      "You cannot use the image context outside of the image provider"
    );
  return context;
}

export { useImages, ImageProvider };
