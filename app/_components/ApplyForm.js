"use client";

import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import submitApplication from "../_lib/submitApplication";
import { formData } from "@/app/_lib/constants";
import { motion } from "framer-motion";
import useResize from "../_hooks/useResize";
import { useForm } from "react-hook-form";
import Form from "./Form";

export default function ApplyForm() {
  const { formState } = useForm();
  const { errors } = formState;
  const [index, setIndex] = useState(0);
  const { ref, width } = useResize();

  function onSubmit(formData) {
    console.log(formData);
  }
  function handleBack() {
    if (index > 0) setIndex((index) => index - 1);
  }
  function handleNext() {
    if (errors.textArea) return;
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
      <hr className="w-[2px] h-full bg-brunswick border-brunswick absolute left-[25%]" />
      <div className="bg-accent py-5 col-span-3 overflow-x-hidden" ref={ref}>
        <Form
          onSubmit={onSubmit}
          className="flex gap-2 flex-col mx-12 relative"
        >
          <hr className="min-w-[60%] max-w-[50rem] h-[2px] bg-brunswick border-brunswick" />
          <div className="relative w-full">
            <motion.div
              className="absolute w-full"
              animate={{
                translateX:
                  index === 1 ? 0 : index < 1 ? width : -width * index,
              }}
            >
              <TextArea
                label={formData[1].textAreas[0].label}
                placeholder={formData[1].textAreas[0].placeholder}
                name="value"
              />
              {errors.required && <span>This field is required</span>}
              <TextArea
                label={formData[1].textAreas[1].label}
                placeholder={formData[1].textAreas[1].placeholder}
                name="goals"
              />
            </motion.div>
            <motion.div
              className="absolute w-full"
              animate={{
                translateX: index === 0 ? 0 : index > 0 ? -width * index : null,
              }}
            >
              <Input
                label={formData[0].inputs[0].label}
                placeholder={formData[0].inputs[0].placeholder}
                name="first"
              />
              <Input
                label={formData[0].inputs[1].label}
                placeholder={formData[0].inputs[1].placeholder}
                name="last"
              />
              <Input
                label={formData[0].inputs[2].label}
                placeholder={formData[0].inputs[2].placeholder}
                name="email"
              />
            </motion.div>
            <motion.div
              className="absolute w-full"
              animate={{
                translateX:
                  index === 2 ? 0 : index < 2 ? width : -width * index,
              }}
            >
              <TextArea
                label={formData[2].textAreas[0].label}
                placeholder={formData[2].textAreas[0].placeholder}
                name="live"
              />
              <TextArea
                label={formData[2].textAreas[1].label}
                placeholder={formData[2].textAreas[1].placeholder}
                name="let"
              />
            </motion.div>
            <motion.div
              className="absolute w-full"
              animate={{
                translateX:
                  index === 3 ? 0 : index < 3 ? width : -width * index,
              }}
            >
              <TextArea
                label={formData[3].textAreas[0].label}
                placeholder={formData[3].textAreas[0].placeholder}
                name="love"
              />
              <TextArea
                label={formData[3].textAreas[1].label}
                placeholder={formData[3].textAreas[1].placeholder}
                name="laugh"
              />
            </motion.div>
            <div className="absolute right-0 top-[30rem] flex gap-5">
              {index > 0 && (
                <button onClick={handleBack} type="button">
                  Back
                </button>
              )}
              {index !== formData.length - 1 ? (
                <button onClick={handleNext} type="button">
                  Next
                </button>
              ) : (
                <button type="submit">Submit</button>
              )}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
