"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import Button from "./Button";

export default function ResourceModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const { formState, register, handleSubmit } = useForm();
  const { errors } = formState;

  function submitEmail(e) {
    console.log(e.email);
  }
  return (
    <>
      {modalOpen && (
        <form
          onSubmit={handleSubmit(submitEmail)}
          className="bg-fadedBlack opacity-95 rounded-md h-[300px] w-[80vw] max-w-[600px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] backdrop-blur-xl flex flex-col items-center justify-center"
        >
          <Input
            label="Email"
            placeholder="Your Email"
            id="email"
            name="email"
            register={register}
            errors={errors}
            errorType="email"
            type="email"
            autoComplete="email"
          />
          <button type="submit" className="border-2 border-fadedBlack text-bg">
            Submit
          </button>
        </form>
      )}
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <ArrowDownCircleIcon className="size-10" />
      </button>
    </>
  );
}
