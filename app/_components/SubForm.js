"use client";

import submitEmail from "@/app/_lib/submitEmail";
import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";
import { useForm } from "react-hook-form";
import SpinnerMini from "./SpinnerMini";
import { useState } from "react";

export function SubForm() {
  const [alreadySub, setAlreadySub] = useState(false);
  async function onSubmit(formData) {
    const { subscribed } = await submitEmail(formData);
    console.log(subscribed);
    if (subscribed === true) setAlreadySub(true);
  }
  const { formState, register, handleSubmit } = useForm();
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  return (
    <Modal>
      <Modal.Window id="form">
        <div className="flex justify-between">
          {!isSubmitSuccessful ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-col flex">
                <h1 className="text-5xl lg:text-7xl">Subscribe</h1>
                <h1 className="text-3xl lg:text-5xl">to the Noelle Letter</h1>
              </div>
              <div className="mt-5 flex flex-col gap-5">
                <Input
                  placeholder="Your first name"
                  label="First Name"
                  name="firstName"
                  id="firstName"
                  register={register}
                  errors={errors}
                  errorType="name"
                />
                <Input
                  placeholder="Your last name"
                  label="Last Name"
                  name="lastName"
                  id="lastName"
                  register={register}
                  errors={errors}
                  errorType="name"
                />
                <Input
                  placeholder="Your email"
                  label="Email"
                  name="email"
                  id="email"
                  register={register}
                  errors={errors}
                  errorType="email"
                />
              </div>
              <Button>{isSubmitting ? <SpinnerMini /> : "subscribe"}</Button>
            </form>
          ) : (
            <>
              {!alreadySub ? (
                <div>
                  <h1 className="text-5xl">Thank you!</h1>
                  <p>we&apos;ve sent you an email with the latest newsletter</p>
                </div>
              ) : (
                <div>
                  <h1 className="text-5xl">Oops</h1>
                  <p>It looks as if you are already subscribed,</p>
                  <p> make so sure to check your spam inbox and trash mail.</p>
                </div>
              )}
            </>
          )}
        </div>
      </Modal.Window>
      {!isSubmitSuccessful && !alreadySub && (
        <Modal.Open label="Noelle Letter!" open="form" />
      )}
    </Modal>
  );
}
