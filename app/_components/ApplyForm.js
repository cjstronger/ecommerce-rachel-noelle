"use client";

import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { formData } from "@/app/_lib/constants";
import { easeInOut, motion } from "framer-motion";
import useResize from "../_hooks/useResize";
import { useForm } from "react-hook-form";
import handleHidden from "../_hooks/handleHidden";
import ApplyFormHeaders from "./ApplyFormHeaders";
import submitApplication from "../_lib/submitApplication";
import SpinnerMini from "./SpinnerMini";
import ApplicationSuccess from "./ApplicationSuccess";

const indexedNames = [
  ["first", "last", "email"],
  ["textArea1", "textArea2"],
  ["textArea3", "textArea4"],
  ["textArea5", "textArea6"],
];

export default function ApplyForm() {
  const { formState, register, handleSubmit, trigger, watch } = useForm();
  const { dirtyFields, errors, isSubmitting, isSubmitSuccessful } = formState;
  const [index, setIndex] = useState(0);
  const { ref, width } = useResize();
  const isFirstDirty = dirtyFields.first;
  let newNames;

  function handleNames(iteration) {
    switch (iteration) {
      case "next":
        newNames = indexedNames.filter((e, i) => {
          return i === index + 1;
        });
        break;
      case "back":
        newNames = indexedNames.filter((e, i) => {
          return i === index - 1;
        });
        break;
      case "current":
        newNames = indexedNames.filter((e, i) => {
          return i === index;
        });
    }
  }

  async function onSubmit(formData) {
    await submitApplication(formData);
  }

  async function handleBack() {
    handleNames("current");
    await trigger(newNames[0]);
    if (Object.keys(errors).length > 0) return;
    if (index > 0) {
      setIndex((index) => index - 1);
    }
    handleNames("back");
    handleHidden(false, newNames[0]);
    handleNames("current");
    handleHidden(true, newNames[0]);
  }

  async function handleNext() {
    handleNames("current");
    await trigger(newNames[0]);
    if (!isFirstDirty || Object.keys(errors).length > 0) return;
    if (index < formData.length - 1) setIndex((index) => index + 1);
    handleNames("next");
    handleHidden(false, newNames[0]);
    handleNames("current");
    handleHidden(true, newNames[0]);
  }
  return (
    <>
      {isSubmitSuccessful ? (
        <ApplicationSuccess />
      ) : (
        <>
          <div className="w-full bg-accent h-[8rem] p-2">
            <h1 className="z-10 text-5xl">Apply now</h1>
            <p className="text-md font-satoshi">
              Please take a moment to fill out the application below and we will
              get back to you as soon as possible. Thank you!
            </p>
          </div>
          <hr className="min-w-[60%] max-w-[76rem] h-[2px] mx-2 bg-brunswick border-brunswick" />
          <div className="grid grid-cols-4 w-full xl:h-[65vh] h-[70vh] mx-auto relative">
            <div className="bg-accent col-span-1 flex justify-evenly">
              <ul className="p-2 text-right">
                <li className="text-[0px] lg:text-lg font-bold">Deets</li>
                <p className="text-[0px] lg:text-sm mb-5">First, Last, Email</p>
                <li className="text-[0px] lg:text-lg font-bold">
                  What&apos;s the manuever?
                </li>
                <p className="text-[0px] lg:text-sm mb-5">
                  Where can Rachel help
                </p>
                <li className="text-[0px] lg:text-lg font-bold">
                  Goals/Experience
                </li>
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
            <div
              className="bg-accent py-5 col-span-3 overflow-x-hidden"
              ref={ref}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-2 flex-col mx-12 relative"
              >
                <ApplyFormHeaders index={index} />
                <hr className="min-w-[60%] max-w-[50rem] h-[2px] bg-brunswick border-brunswick" />
                <div className="w-full">
                  <motion.div
                    className="absolute w-full"
                    animate={{
                      translateX:
                        index === 0 ? 0 : index > 0 ? -width * index : null,
                    }}
                    transition={{ easeIn: easeInOut }}
                  >
                    <Input
                      label={formData[0].inputs[0].label}
                      placeholder={formData[0].inputs[0].placeholder}
                      name="first"
                      register={register}
                      errors={errors}
                      errorType={"name"}
                    />
                    <Input
                      label={formData[0].inputs[1].label}
                      placeholder={formData[0].inputs[1].placeholder}
                      name="last"
                      register={register}
                      errors={errors}
                      errorType={"name"}
                    />
                    <Input
                      label={formData[0].inputs[2].label}
                      placeholder={formData[0].inputs[2].placeholder}
                      name="email"
                      register={register}
                      errors={errors}
                      errorType={"email"}
                    />
                  </motion.div>
                  <motion.div
                    style={{ translateX: `${200 - index * 100}% ` }}
                    initial={{ translateX: width }}
                    className={`absolute w-full`}
                    animate={{
                      translateX:
                        index === 1 ? 0 : index < 1 ? width : -width * index,
                    }}
                    transition={{ easeIn: easeInOut }}
                  >
                    <TextArea
                      register={register}
                      errors={errors}
                      label={formData[1].textAreas[0].label}
                      placeholder={formData[1].textAreas[0].placeholder}
                      name="textArea1"
                      watch={watch}
                      hidden
                    />
                    {errors.required && <span>This field is required</span>}
                    <TextArea
                      register={register}
                      errors={errors}
                      label={formData[1].textAreas[1].label}
                      placeholder={formData[1].textAreas[1].placeholder}
                      name="textArea2"
                      watch={watch}
                      hidden
                    />
                  </motion.div>
                  <motion.div
                    initial={{ translateX: width }}
                    className={`absolute w-full`}
                    style={{ translateX: `${200 - index * 100}%` }}
                    animate={{
                      translateX:
                        index === 2 ? 0 : index < 2 ? width : -width * index,
                    }}
                    transition={{ easeIn: easeInOut }}
                  >
                    <TextArea
                      register={register}
                      errors={errors}
                      label={formData[2].textAreas[0].label}
                      placeholder={formData[2].textAreas[0].placeholder}
                      name="textArea3"
                      watch={watch}
                      hidden
                    />
                    <TextArea
                      register={register}
                      errors={errors}
                      label={formData[2].textAreas[1].label}
                      placeholder={formData[2].textAreas[1].placeholder}
                      name="textArea4"
                      watch={watch}
                      hidden
                    />
                  </motion.div>
                  <motion.div
                    className={`absolute w-full`}
                    style={{ translateX: `${200 - index * 100}% ` }}
                    initial={{ translateX: width }}
                    animate={{
                      translateX:
                        index === 3 ? 0 : index < 3 ? width : -width * index,
                    }}
                    transition={{ easeIn: easeInOut }}
                  >
                    <TextArea
                      register={register}
                      errors={errors}
                      label={formData[3].textAreas[0].label}
                      placeholder={formData[3].textAreas[0].placeholder}
                      name="textArea5"
                      watch={watch}
                      hidden
                    />
                    <TextArea
                      register={register}
                      errors={errors}
                      label={formData[3].textAreas[1].label}
                      placeholder={formData[3].textAreas[1].placeholder}
                      name="textArea6"
                      watch={watch}
                      hidden
                    />
                  </motion.div>
                  <div className="absolute right-0 top-[29rem] flex gap-5">
                    {index > 0 && (
                      <button
                        className="font-satoshi lowercase border-fadedBlack border hover:bg-primaryFaded p-2 transition-all duration-400 text-2xl"
                        onClick={handleBack}
                        type="button"
                      >
                        Back
                      </button>
                    )}
                    {index !== formData.length - 1 && (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="font-satoshi lowercase border-fadedBlack border
                hover:bg-primaryFaded p-2 transition-all duration-400
                text-2xl"
                      >
                        Next
                      </button>
                    )}
                  </div>
                  {index === formData.length - 1 && (
                    <button
                      className="left-0 top-[29rem] absolute font-satoshi lowercase border-fadedBlack border
              hover:bg-primaryFaded p-2 transition-all duration-400
              text-2xl min-w-[90px] min-h-[50px] flex items-center justify-center"
                      type="submit"
                    >
                      {isSubmitting ? <SpinnerMini /> : "Submit"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
