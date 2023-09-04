"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are necessary!");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User registration failed!");
      }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-[#4b9aaa] ">
        <h1 className="text-xl font-bold my-4 ">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
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
            Register
          </button>
          {error && (
            <div className="text-red-500 w-fit text-xs mt-2 font-semibold ">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right " href={"/login"}>
            Already have an account? <span className="underline ">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
