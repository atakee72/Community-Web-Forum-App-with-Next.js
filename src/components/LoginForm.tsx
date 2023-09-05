"use client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-[#4b9aaa] ">
        <h1 className="text-xl font-bold my-4 ">Login</h1>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="bg-[#4b9aaa] text-white font-bold py-2 px-6 cursor-pointer">
            Login
          </button>
          <div className="text-red-500 w-fit text-xs mt-2 font-semibold ">
            Error message
          </div>
          <Link className="text-sm mt-3 text-right " href={"/register"}>
            Don't you have an account?{" "}
            <span className="underline ">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
