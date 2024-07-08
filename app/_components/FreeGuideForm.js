"use client";

import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import sendGuide from "../_lib/sendGuide";
import SpinnerMini from "./SpinnerMini";

export default function FreeGuideForm() {
  const { formState, register, handleSubmit } = useForm();
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  async function onSubmit(formData) {
    const { sent } = await sendGuide(formData);
    console.log(sent);
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
        <Button>
          {isSubmitting ? (
            <SpinnerMini />
          ) : isSubmitSuccessful ? (
            "Sent"
          ) : (
            "Send Free Guide"
          )}
        </Button>
      </div>
    </form>
  );
}
