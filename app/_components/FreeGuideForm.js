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
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder="Your first name"
        errors={errors}
        register={register}
        name="first"
        label="First Name"
      />
      <Input
        placeholder="Your Email"
        errors={errors}
        register={register}
        name="email"
        label="Email"
      />
      <div className="mt-5">
        <button className="font-satoshi lowercase border-fadedBlack border hover:bg-primaryFaded p-2 transition-all duration-400 text-xl min-h-[50px] min-w-[125px] flex justify-center items-center">
          {isSubmitting ? (
            <SpinnerMini />
          ) : isSubmitSuccessful ? (
            "Sent"
          ) : (
            "Send Free Guide"
          )}
        </button>
      </div>
    </form>
  );
}
