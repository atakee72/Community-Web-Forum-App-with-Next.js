"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid credentials!");
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log("🚀 ~ LoginForm (handleSubmit) ~ error:", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-[#4b9aaa] ">
        <h1 className="text-xl font-bold my-4 ">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#4b9aaa] text-white font-bold py-2 px-6 cursor-pointer">
            Login
          </button>
          {error && (
            <div className="text-red-500 w-fit text-xs mt-2 font-semibold ">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right " href={"/register"}>
            Don't you have an account?{" "}
            <span className="underline ">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
