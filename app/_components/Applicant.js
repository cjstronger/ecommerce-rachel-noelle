"use client";

import { useState } from "react";
import { CheckmarkIcon, ErrorIcon } from "react-hot-toast";
import { approveApplicant } from "../_lib/data-services";

export default function Applicant({ email, fullName, approved }) {
  const [approve, setApprove] = useState(approved);
  async function handleApproved() {
    setApprove(true);
    await approveApplicant(email);
  }
  return (
    <div className="px-9 text-lg border-b-[1px] border-fadedBlack items-center top-11 grid grid-cols-3 py-2">
      <div className="relative">
        <p
          className="mr-3 p-[2px] cursor-default overflow-hidden text-nowrap"
          data-fullname={fullName}
        >
          {fullName}
        </p>
        <span class="content-fullname">{fullName}</span>
      </div>
      <div className="relative">
        <p className="overflow-hidden cursor-default mr-2" data-email={email}>
          {email}
        </p>
        <span class="content-email">{email}</span>
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
