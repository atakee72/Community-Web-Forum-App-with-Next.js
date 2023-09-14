"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface RemoveTopicBtnProps {
  id: string;
}

export default function RemoveTopicBtn({ id }: RemoveTopicBtnProps) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const res = await fetch(`/api/topics?id=${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          router.refresh();
        }
      } catch (error) {
        console.log("Error deleting topic:", error);
      }
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400 ">
      <HiOutlineTrash size={24} />
    </button>
  );
}
