"use client";

import toast from "react-hot-toast";
import { supaLogout } from "../_lib/actions";

export default function SignOutButton({ setOpenMenu, type, setUser }) {
  async function handleSignout() {
    if (!type) {
      setOpenMenu(false);
      setUser(null);
      await supaLogout();
      toast.success("Signed out");
    } else {
      await supaLogout();
      toast.success("Signed out");
    }
  }

  if (!type)
    return (
      <button
        onClick={handleSignout}
        className="text-bg text-5xl font-satoshi px-8 hover:border-bg border-b-2 border-b-transparent transition-all duration-150 w-full text-left "
      >
        Logout
      </button>
    );
  return (
    <button
      onClick={handleSignout}
      className="border-2 border-fadedBlack w-[90%] p-2 hover:bg-fadedBlack hover:text-white transition-all duration-150 text-2xl"
    >
      logout
    </button>
  );
}
