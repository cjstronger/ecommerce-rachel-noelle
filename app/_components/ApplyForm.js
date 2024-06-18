"use client";

import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { formData } from "@/app/_lib/constants";
import { useForm } from "react-hook-form";
import submitApplication from "../_lib/submitApplication";
import SpinnerMini from "./SpinnerMini";
import ApplicationSuccess from "./ApplicationSuccess";
import ApplicationReceived from "./ApplicationReceived";

export default function ApplyForm() {
  const { formState, register, handleSubmit, watch } = useForm();
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  const [alreadyApplied, setAlreadyApplied] = useState(false);

  async function onSubmit(formData) {
    const { applied } = await submitApplication(formData);
    console.log(applied);
    if (!applied) return;
    setAlreadyApplied(true);
  }

  return (
    <>
      {isSubmitSuccessful ? (
        alreadyApplied ? (
          <ApplicationReceived />
        ) : (
          <ApplicationSuccess />
        )
      ) : (
        <>
          <div className="w-full bg-accent h-[8rem] p-2">
            <h1 className="z-10 text-5xl">Apply now</h1>
            <p className="text-md font-satoshi">
              Please take a moment to fill out the application below and we will
              get back to you as soon as possible. Thank you!
            </p>
            <hr className="mt-5 min-w-[60%] h-[2px] bg-brunswick border-brunswick" />
          </div>
          <div className="w-full mx-auto relative"></div>
          <div className="bg-accent py-5 overflow-x-hidden">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex gap-2 flex-col mx-12 relative mb-8"
            >
              <div className="w-full">
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
                <div className="mt-6 flex flex-col gap-2">
                  <TextArea
                    register={register}
                    errors={errors}
                    label={formData[1].textAreas[0].label}
                    placeholder={formData[1].textAreas[0].placeholder}
                    name="textArea1"
                    watch={watch}
                    hidden
                  />
                  <TextArea
                    register={register}
                    errors={errors}
                    label={formData[1].textAreas[1].label}
                    placeholder={formData[1].textAreas[1].placeholder}
                    name="textArea2"
                    watch={watch}
                    hidden
                  />
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
                </div>
                <div className="flex justify-end p-2">
                  <button
                    className="font-satoshi lowercase border-fadedBlack border
                  hover:bg-primaryFaded p-2 transition-all duration-400
                  text-2xl min-w-[90px] min-h-[50px] flex items-center justify-center"
                    type="submit"
                  >
                    {isSubmitting ? <SpinnerMini /> : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
