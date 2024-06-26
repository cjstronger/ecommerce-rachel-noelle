import { signInAction, signOutAction } from "../_lib/actions";

export default function Page() {
  return (
    <div className="bg-accent w-[80vw] max-w-[40rem] h-[50vh] mt-[5rem] mx-auto px-12 py-5">
      <svg
        id="Apple"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        height="75"
        className="mx-auto mb-5"
      >
        <path
          className="cls-1"
          d="M90,93.25l65.06,65.06a140.31,140.31,0,0,1,201-1v0l65-65.09a232.33,232.33,0,0,0-331,1Z"
        />
        <path
          className="cls-2"
          d="M90.85,419.76l65-65a140.34,140.34,0,0,1,1-198.71L91.81,91a232.35,232.35,0,0,0-1,328.8Z"
        />
        <polygon
          className="cls-3"
          points="301.98 301.84 301.98 302.8 302.94 302.8 301.98 301.84"
        />
        <path
          className="cls-3"
          d="M255.5,488.21a231.65,231.65,0,0,0,164.55-68.3L355,354.84a140.3,140.3,0,0,1-199,0l-65,65A231.65,231.65,0,0,0,255.5,488.21Z"
        />
        <path
          className="cls-4"
          d="M484.36,210.33l-181.42.25V302.8h85.84a140.7,140.7,0,0,1-33.69,52.91l65.05,65.06a232.65,232.65,0,0,0,64.22-210.44Z"
        ></path>
      </svg>
      <h1 className="text-center text-4xl">User Login/Logout</h1>
      <form action={signInAction}>
        <button className="border-fadedBlack hover:bg-primaryFaded p-4 font-satoshi border-[1px] text-xl w-full transition-all duration-100 mt-5">
          login with google
        </button>
      </form>
      <form action={signOutAction}>
        <button className="border-fadedBlack hover:bg-primaryFaded p-4 font-satoshi border-[1px] text-xl w-full transition-all duration-100 mt-5">
          logout
        </button>
      </form>
    </div>
  );
}
