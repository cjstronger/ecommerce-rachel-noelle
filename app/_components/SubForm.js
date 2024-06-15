"use client";

import submitEmail from "@/app/_lib/submitEmail";
import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";
import { useForm } from "react-hook-form";

export function SubForm() {
  const { formState, register } = useForm();
  const { errors } = formState;
  return (
    <Modal>
      <Modal.Window id="form">
        <form action={submitEmail}>
          <div className="mt-8 flex flex-col gap-5">
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
          <Button>subscribe</Button>
        </form>
      </Modal.Window>
      <Modal.Open label="Noelle Letter!" open="form" />
    </Modal>
  );
}
