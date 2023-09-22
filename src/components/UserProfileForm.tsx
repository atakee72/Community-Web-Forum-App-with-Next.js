"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { useState } from "react";

function UserProfileForm() {
  const { data: session } = useSession();

  const [username, setUsername] = useState(session?.user?.name);
  const [email, setEmail] = useState(session?.user?.email);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [roleBadge, setRoleBadge] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

const user = session?.user;
console.log("🚀 ~ UserProfileForm ~ user:", user);

const userId = session?.user?._id || session?.user?.id;

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(
    "Inputs",
    username,
    email,
    firstName,
    surname,
    userPicture,
    roleBadge
  );

  const res = await fetch("/api/user", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: userId,
      firstName,
      surname,
      userPicture,
      roleBadge,
    }),
  });

  const { msg, success } = await res.json();
  setError(msg);
  console.log(error);
  setSuccess(success);

  if (success) {
    // setFirstName(""), setSurname(""), setRoleBadge("");
    console.log("User updated!");
  }
};

  return (
    <>
      <form
        className="py-4 mt-4 border-t flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row items-start justify-center gap-5">
          <div className="flex flex-col gap-3 items-center">
            <div>
              <label htmlFor="userPicture">Your Picture</label>
              <input
                type="file"
                className="h-32"
                name="userPicture"
                id="userPicture"
                onChange={(e) => setUserPicture(e.target.value)}
                value={userPicture}
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div>
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                name="surname"
                id="surname"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
              <label htmlFor="roleBadge">Role Badge</label>
              <input
                type="text"
                id="roleBadge"
                placeholder="john@gmail.com"
                onChange={(e) => setRoleBadge(e.target.value)}
                value={roleBadge}
              />
            </div>
          </div>
        </div>

        <button
          className="bg-[#4b9aaa]  p-3 text-white font-bold"
          type="submit"
        >
          Send
        </button>
        <div className="bg-slate-100 flex flex-col">
          {error &&
            error.map((err, i: number) => (
              <div
                key={i}
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
