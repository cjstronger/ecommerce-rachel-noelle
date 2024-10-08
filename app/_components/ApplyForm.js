"use client";

import { useEffect, useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { formData } from "@/app/_lib/constants";
import { useForm } from "react-hook-form";
import submitApplication from "../_lib/submitApplication";
import SpinnerMini from "./SpinnerMini";
import ApplicationSuccess from "./ApplicationSuccess";
import ApplicationReceived from "./ApplicationReceived";
import toast from "react-hot-toast";
import { useUser } from "../_contexts/UsersContext";

export default function ApplyForm() {
  const { formState, register, handleSubmit, watch } = useForm();
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  async function onSubmit(formData) {
    const { applied } = await submitApplication(formData);
    if (!applied) {
      toast.success("Application Received");
      return;
    }
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
          <div className="w-full bg-accent h-[8rem] p-2 text-bg shadow-md">
            <h1 className="z-10 text-5xl">Apply now</h1>
            <p className="text-md font-satoshi">
              Please take a moment to fill out the application below and we will
              get back to you as soon as possible. Thank you!
            </p>
            <hr className="mt-5 min-w-[60%] h-[2px] bg-bg opacity-50 border-bg" />
          </div>
          <div className="w-full mx-auto relative"></div>
          <div className="bg-accent py-5 overflow-x-hidden shadow-md">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex gap-2 flex-col mx-12 relative mb-8 mt-5 md:mt-0"
            >
              <div className="w-full">
                <Input
                  label={formData[0].inputs[0].label}
                  placeholder={formData[0].inputs[0].placeholder}
                  name="first"
                  register={register}
                  errors={errors}
                  errorType={"name"}
                  id="first"
                  autoComplete="given-name"
                  defaultValue={user?.user_metadata?.name?.split(" ")[0]}
                />
                <Input
                  label={formData[0].inputs[1].label}
                  placeholder={formData[0].inputs[1].placeholder}
                  name="last"
                  register={register}
                  errors={errors}
                  errorType={"name"}
                  id="family-name"
                  defaultValue={user?.user_metadata?.name?.split(" ")[1]}
                />
                <Input
                  label={formData[0].inputs[2].label}
                  placeholder={formData[0].inputs[2].placeholder}
                  name="email"
                  register={register}
                  errors={errors}
                  errorType={"email"}
                  id="email"
                  autoComplete="email"
                  defaultValue={user?.email}
                />
                <div className="mt-6 flex flex-col gap-2">
                  <TextArea
                    register={register}
                    errors={errors}
                    label={formData[1].textAreas[0].label}
                    placeholder={formData[1].textAreas[0].placeholder}
                    name="textArea1"
                    watch={watch}
                    id="textArea1"
                  />
                  <TextArea
                    register={register}
                    errors={errors}
                    label={formData[1].textAreas[1].label}
                    placeholder={formData[1].textAreas[1].placeholder}
                    name="textArea2"
                    watch={watch}
                    id="textArea2"
                  />
                  <TextArea
                    register={register}
                    errors={errors}
                    label={formData[2].textAreas[0].label}
                    placeholder={formData[2].textAreas[0].placeholder}
                    name="textArea3"
                    watch={watch}
                    id="textArea3"
                  />
                  <TextArea
                    register={register}
                    errors={errors}
                    label={formData[2].textAreas[1].label}
                    placeholder={formData[2].textAreas[1].placeholder}
                    name="textArea4"
                    watch={watch}
                    id="textArea4"
                  />
                  <TextArea
                    register={register}
                    errors={errors}
                    label={formData[3].textAreas[0].label}
                    placeholder={formData[3].textAreas[0].placeholder}
                    name="textArea5"
                    watch={watch}
                    id="textArea5"
                  />
                  <TextArea
                    register={register}
                    errors={errors}
                    label={formData[3].textAreas[1].label}
                    placeholder={formData[3].textAreas[1].placeholder}
                    name="textArea6"
                    watch={watch}
                    id="textArea6"
                  />
                  <input
                    hidden
                    value={user?.id}
                    name="id"
                    id="id"
                    {...register("id")}
                  />
                </div>
                <div className="flex justify-end p-2">
                  <button
                    className="font-satoshi lowercase border-bg text-bg hover:text-white border
                  hover:bg-accentFaded p-2 transition-all duration-400
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
