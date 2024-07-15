"use client";

import { useTransition } from "react";
import { supaLogin } from "../_lib/actions";
import { useRouter } from "next/navigation";

export default function SignInButton({ provider }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleSignIn = (provider) =>
    startTransition(async () => {
      const { errorMessage, url } = await supaLogin(provider);
      if (!errorMessage && url) {
        router.push(url);
      } else {
        throw new Error("Error logging in from the loggin button");
      }
    });
  return (
    <button
      className="bg-accent text-bg p-2 border-2 border-fadedBlack w-[50%] hover:text-white hover:bg-fadedBlack duration-150 transition-all hover:text-3xl text-2xl"
      disabled={isPending}
      onClick={() => handleSignIn(`${provider}`)}
    >
      {isPending ? "Logging in..." : "login in"}
    </button>
  );
}
