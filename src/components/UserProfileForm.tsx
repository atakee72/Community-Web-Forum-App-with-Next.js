"use client";

import React from "react";
import { useState } from "react";

function UserProfileForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Inputs", fullname, email, message);

    const res = await fetch("/api/profileUpdate", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    console.log(error);
    setSuccess(success);

    if (success) {
      setFullname(""), setEmail(""), setMessage("");
    }
  };

  return (
    <>
      <form
        className="py-4 mt-4 border-t flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="john@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            className="h-32"
            name="message"
            id="message"
            placeholder="Type your message here"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>
        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
        <div className="bg-slate-100 flex flex-col">
          {error &&
            error.map((err) => (
              <div
                className={`${
                  success ? "text-green-800" : "text-red-600"
                } px-5 py-2 `}
              >
                {err}
              </div>
            ))}
        </div>
      </form>
    </>
  );
}

export default UserProfileForm;
