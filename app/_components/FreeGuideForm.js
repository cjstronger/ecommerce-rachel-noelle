"use client";

import { useForm } from "react-hook-form";
import Input from "./Input";
import sendGuide from "../_lib/sendGuide";
import SpinnerMini from "./SpinnerMini";
import toast from "react-hot-toast";

export default function FreeGuideForm() {
  const { formState, register, handleSubmit } = useForm();
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  async function onSubmit(formData) {
    const { sent } = await sendGuide(formData);
    if (sent) toast.success("Guide sent to your email!");
  }
  return (
    <form
      className="flex flex-col items-center bg-accent lg:w-[60vw] w-[300px] lg:h-[470px] h-[300px] p-5 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder="Your first name"
        errors={errors}
        register={register}
        name="first"
        label="First Name"
        autoComplete="given-name"
      />
      <Input
        placeholder="Your Email"
        errors={errors}
        register={register}
        name="email"
        label="Email"
        autoComplete="email"
      />
      <div className="mt-5">
        <button className="text-neutral-300 hover:text-white font-satoshi lowercase border-bg border hover:bg-accentFaded p-2 transition-all duration-400 text-xl min-h-[50px] min-w-[125px] flex justify-center items-center">
          {isSubmitting ? (
            <SpinnerMini />
          ) : isSubmitSuccessful ? (
            "Check your email"
          ) : (
            "Send Free Guide"
          )}
        </button>
      </div>
    </form>
  );
}
