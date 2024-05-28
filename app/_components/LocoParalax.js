import LocoParalaxItem from "./LocoParalaxItem";
import React from "react";

export default function LocoParalax({ children }) {
  return (
    <div className="flex flex-col absolute text-center justify-center place-self-center">
      {React.Children.map(children, (child, index) => {
        return <LocoParalaxItem key={index}>{child}</LocoParalaxItem>;
      })}
    </div>
  );
}
