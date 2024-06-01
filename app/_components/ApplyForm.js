"use client";

import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import submitApplication from "../_lib/submitApplication";
import { formData } from "@/app/_lib/constants";

export default function ApplyForm() {
  const [index, setIndex] = useState(0);
  function handleBack() {
    if (index > 0) setIndex((index) => index - 1);
  }
  function handleNext() {
    if (index < formData.length - 1) setIndex((index) => index + 1);
  }
  return (
    <div className="grid grid-cols-4 w-full xl:h-[65vh] h-[70vh] mx-auto relative">
      <div className="bg-accent col-span-1 flex justify-evenly">
        <ul className="p-2 text-right">
          <li className="text-[0px] lg:text-lg font-bold">Deets</li>
          <p className="text-[0px] lg:text-sm mb-5">First, Last, Email</p>
          <li className="text-[0px] lg:text-lg font-bold">
            What&apos;s the manuever?
          </li>
          <p className="text-[0px] lg:text-sm mb-5">Where can Rachel help</p>
          <li className="text-[0px] lg:text-lg font-bold">Goals/Experience</li>
          <p className="text-[0px] lg:text-sm mb-5">
            Goals in life, coached before
          </p>
          <li className="text-[0px] lg:text-lg font-bold">
            Dates/Availability
          </li>
          <p className="text-[0px] lg:text-sm">Set your dates</p>
        </ul>
        <ul className="p-2">
          <li className="text-5xl font-bold mt-4 lg:text-lg">1</li>
          <li className="text-5xl lg:text-lg font-bold mt-10">2</li>
          <li className="text-5xl lg:text-lg font-bold mt-[2.7rem]">3</li>
          <li className="text-5xl lg:text-lg font-bold mt-[2.2rem]">4</li>
        </ul>
      </div>
      <hr className="w-[2px] h-full bg-brunswick border-brunswick absolute left-[25%] " />
      <div className="bg-accent py-5 col-span-3">
        <form className="flex gap-2 flex-col mx-12" action={submitApplication}>
          <h1 className="text-4xl">{formData[index].title}</h1>
          <p>{formData[index].description}</p>
          <hr className="min-w-[60%] max-w-[50rem] h-[2px] bg-brunswick border-brunswick" />
          {formData[index]?.textAreas?.map((textArea) => (
            <TextArea
              key={textArea.label}
              placeholder={textArea.placeholder}
              label={textArea.label}
              name={textArea.name}
            />
          ))}
          {formData[index]?.inputs?.map((input) => (
            <Input
              placeholder={input.placeholder}
              label={input.label}
              key={input.label}
              name={input.name}
            />
          ))}
          <button>submit</button>
        </form>
        <div className="flex gap-5 absolute 2xl:right-[22%] right-[8%] bottom-5">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
