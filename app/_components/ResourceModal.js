"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addSubscriber } from "../_lib/data-services";

export default function ResourceModal({ data, supabaseUrl }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const { formState, register, handleSubmit } = useForm();
  const { errors } = formState;

  async function submitEmail(e) {
    const { email } = e;
    const { error } = await addSubscriber({ subEmail: email });
    if (error) {
      toast("There was an error subscribing");
      return;
    }
    setApplied(true);
    setModalOpen(false);
  }
  return (
    <>
      {data.map((file, i) => (
        <div
          key={i}
          className="flex gap-5 items-center mt-5 flex-col h-[300px]"
        >
          {!applied ? (
            <button
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <ArrowDownCircleIcon className="size-10" />
            </button>
          ) : (
            <a
              target="_blank"
              href={`${supabaseUrl}/storage/v1/object/public/PDFs/${file.name}`}
            >
              <ArrowDownCircleIcon className="size-10" />
            </a>
          )}
          <h2 className="text-md md:text-lg lg:text-xl text-center">{`${file.name
            .replaceAll("-", " ")
            .replace(".pdf", "")}`}</h2>
        </div>
      ))}
      {modalOpen && (
        <form
          onSubmit={handleSubmit(submitEmail)}
          className="bg-fadedBlack opacity-95 rounded-md h-[300px] w-[80vw] max-w-[600px] absolute translate-x-[-50%] translate-y-[-50%] top-[40%] left-[50%] backdrop-blur-xl flex flex-col items-center justify-center"
        >
          <h2 className="text-bg mb-8 text-center">
            Please enter your email to get access to my free resources!
          </h2>
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
          <button
            type="submit"
            className="border-2 border-fadedBlack text-bg mt-5"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}
