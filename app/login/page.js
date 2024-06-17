"use client";

import { useForm } from "react-hook-form";
import Input from "../_components/Input";
import Image from "next/image";
import rn from "@/app/icon.png";

export default function Page() {
  const { register, formState } = useForm();
  const { errors } = formState;
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[60%] h-[60vh] bg-accent rounded-xl b-none">
        <Image src={rn} className="mx-auto" alt="rn" />
        <form className="flex flex-col gap-5 p-10">
          <Input
            label="username"
            errorType="name"
            errors={errors}
            register={register}
            name="username"
          />
          <Input
            label="password"
            errorType="name"
            errors={errors}
            register={register}
            name="password"
          />
        </form>
      </div>
    </div>
  );
}
