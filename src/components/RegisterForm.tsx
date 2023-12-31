"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary!");
      return;
    }

    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists!");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
        alert("User registered!");
        router.push("/");
      } else {
        console.log("User registration failed!");
      }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  return (
    <div className="grid place-items-start justify-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-[#4b9aaa] ">
        <h1 className="text-xl font-bold my-4 ">Sign up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
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
            Sign up
          </button>
          {error && (
            <div className="text-red-500 w-fit text-xs mt-2 font-semibold ">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right " href={"/"}>
            Already have an account? <span className="underline ">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
