"use client";

import { useState } from "react";
import toast, { CheckmarkIcon, ErrorIcon } from "react-hot-toast";
import { approveApplicant } from "../_lib/data-services";

export default function Applicant({ email, fullName, approved, id }) {
  const [approve, setApprove] = useState(approved);
  async function handleApproved() {
    setApprove(true);
    const { userHasNotLoggedIn } = await approveApplicant(id);
    userHasNotLoggedIn && toast.error("User has not logged in");
  }
  return (
    <div className="px-9 text-lg border-b-[1px] border-bg items-center top-11 grid grid-cols-3 py-2 text-bg">
      <div className="relative">
        <p
          className="mr-3 p-[2px] cursor-default overflow-hidden text-nowrap"
          data-fullname={fullName}
        >
          {fullName}
        </p>
        <span className="content-fullname">{fullName}</span>
      </div>
      <div className="relative">
        <p className="overflow-hidden cursor-default mr-2" data-email={email}>
          {email}
        </p>
        <span className="content-email">{email}</span>
      </div>
      {!approve ? (
        <div className="flex gap-3 items-center justify-center">
          <ErrorIcon />
          <button
            onClick={handleApproved}
            className="rounded-full bg-blue-600 text-white p-[5px] font-satoshi text-sm"
          >
            Approve
          </button>
        </div>
      ) : (
        <div className="flex justify-center z-0">
          <CheckmarkIcon />
        </div>
      )}
    </div>
  );
}
