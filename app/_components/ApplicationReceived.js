"use client";

import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import SpinnerMini from "./SpinnerMini";

export default function ApplicationReceived() {
  const [copied, setCopied] = useState(false);
  const [failCopy, setFailCopy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  async function handleCopyEmail() {
    setIsLoading(true);
    try {
      navigator.clipboard.writeText("rachelnstrong@gmail.com");
    } catch {
      error;
      if (error) setFailCopy(true);
    }
    setCopied(true);
    setIsLoading(false);
  }
  return (
    <div className="w-full h-[80vh] mx-auto bg-accent text-bg flex flex-col items-center justify-center text-center gap-5 relative">
      <Link
        href="/"
        className="font-satoshi lowercase border-bg border hover:bg-primaryFaded p-2 transition-all duration-400 text-lg left-5 top-5 absolute"
      >
        &larr; home
      </Link>
      <h1 className="text-4xl">
        We have already received an application from you, and will be getting
        back to you shortly.
      </h1>
      <p className="text-xl">
        If you have already applied and would like to change any input just let
        Rachel know in an email.
      </p>
      <Button onClick={handleCopyEmail}>
        {isLoading ? (
          <SpinnerMini />
        ) : copied ? (
          "copied"
        ) : failCopy ? (
          "try again"
        ) : (
          "Email Rachel"
        )}
      </Button>
    </div>
  );
}
