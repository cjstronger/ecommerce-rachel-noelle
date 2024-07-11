"use client";

import { supaLogout } from "../_lib/actions";

export default function SignOutButton({ setOpenMenu, type }) {
  if (!type)
    return (
      <form action={supaLogout}>
        <button
          onClick={() => setOpenMenu(false)}
          className="text-bg text-5xl font-satoshi px-8 hover:border-bg border-b-2 border-b-transparent transition-all duration-150 w-full text-left"
        >
          Logout
        </button>
      </form>
    );
  return (
    <form action={supaLogout}>
      <button>Logout</button>
    </form>
  );
}
