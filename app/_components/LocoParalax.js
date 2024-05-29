import React from "react";

export default function LocoParalax({ children }) {
  return (
    <div className="absolute text-center justify-center place-self-center">
      {children}
    </div>
  );
}
