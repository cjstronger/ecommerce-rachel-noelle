import { signOutAction } from "../_lib/actions";

export default function SignOutButton({ setOpenMenu }) {
  return (
    <form action={signOutAction}>
      <button
        onClick={() => setOpenMenu(false)}
        className="text-5xl font-satoshi px-8 hover:text-bg transition-all duration-200ms"
      >
        Logout
      </button>
    </form>
  );
}
