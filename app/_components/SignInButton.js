"use client";

import { useTransition } from "react";
import { supaLogin } from "../_lib/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignInButton({ provider }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleSignIn = (provider) =>
    startTransition(async () => {
      const { errorMessage, url } = await supaLogin(provider);
      if (!errorMessage && url) {
        toast.success("Login Successful");
        router.push(url);
      } else {
        toast.error(errorMessage);
      }
    });
  return (
    <button
      className="bg-accent text-bg p-2 border-2 border-fadedBlack w-[90%] hover:text-white hover:bg-fadedBlack duration-150 transition-all hover:text-[1.7rem] text-2xl"
      disabled={isPending}
      onClick={() => handleSignIn(`${provider}`)}
    >
      {isPending ? "redirecting" : "login with google"}
    </button>
  );
}
