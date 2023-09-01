"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Empty title or topic body are not allowed!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-[#eccc6e] px-8 py-2"
        placeholder="Topic title"
      />
      <input
        onChange={(e) => setBody(e.target.value)}
        value={body}
        className="border border-[#eccc6e] px-8 py-2"
        placeholder="Topic body"
      />
      <button
        type="submit"
        className="bg-[#4b9aaa] text-white font-bold py-3 px-6 w-fit"
      >
        Add topic
      </button>
    </form>
  );
}
