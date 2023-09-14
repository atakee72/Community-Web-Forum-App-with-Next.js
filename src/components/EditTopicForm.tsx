"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

interface EditTopicFormProps {
  id: string;
  title: string;
  body: string;
}

export default function EditTopicForm({ id, title, body }: EditTopicFormProps) {
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newBody }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic!");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-[#eccc6e] px-8 py-2"
        placeholder="Topic title"
      />
      <input
        onChange={(e) => setNewBody(e.target.value)}
        value={newBody}
        className="border border-[#eccc6e] px-8 py-2"
        placeholder="Topic description"
      />
      <button
        type="submit"
        className="bg-[#4b9aaa] text-white font-bold py-3 px-6 w-fit"
      >
        Update topic
      </button>
    </form>
  );
}
