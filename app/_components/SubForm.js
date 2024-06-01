"use client";

import submitEmail from "@/app/_lib/submitEmail";
import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";

export function SubForm() {
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
            />
            <Input
              placeholder="Your last name"
              label="Last Name"
              name="lastName"
              id="lastName"
            />
            <Input
              placeholder="Your email"
              label="Email"
              name="email"
              id="email"
            />
          </div>
          <Button>subscribe</Button>
        </form>
      </Modal.Window>
      <Modal.Open label="Noelle Letter!" open="form" />
    </Modal>
  );
}
