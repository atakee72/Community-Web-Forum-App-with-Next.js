"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserInfo() {
  const { data: session } = useSession();
  return (
    <div className=" grid text-center">
      <div className=" shadow-lg p-8 bg-zinc-300/10 flex flex-col items-center gap-2 my6 ">
        <Image
          className="rounded-full "
          src={session?.user?.image}
          height={60}
          width={60}
        />
        <div>
          Current User: {""}
          <span className="font-bold ">{session?.user?.name}</span>{" "}
        </div>
        <div>
          Email: <span className="font-bold ">{session?.user?.email}</span>
        </div>
      </div>
    </div>
  );
}
