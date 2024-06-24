import React from "react";

export default function LocoParalax({ children, textPosition }) {
  return (
    <div
      className={`absolute text-${textPosition} justify-center place-self-center`}
    >
      {children}
    </div>
  );
}
