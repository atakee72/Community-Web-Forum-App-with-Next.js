"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserInfo() {
  const { data: session } = useSession();
  const userImage = session?.user?.image;

  if (typeof userImage === "string") {
    return (
      <div className=" grid text-center">
        <div className="flex flex-col items-center gap-2">
          <Image
            className="rounded-full"
            src={userImage}
            height={60}
            width={60}
            alt="user image"
          />
          <div>
            <span className="font-bold text-[#4b9aaa] ">
              {session?.user?.name}
            </span>{" "}
          </div>
          {/* <div>
            Email: <span className="font-bold ">{session?.user?.email}</span>
          </div> */}
        </div>
      </div>
    );
  } else {
    return (
      <div className=" grid text-center">
        <div className="flex flex-col items-center ">
          <Image
            className="rounded-full"
            src="/face__dummy.webp"
            height={60}
            width={60}
            alt="dummy user image"
          />
          {/* <i>
            <span className="text-xs">User image is not available.</span>
          </i> */}
          <div>
            <span className="font-bold text-[#4b9aaa] ">
              {session?.user?.name}
            </span>{" "}
          </div>
          {/* <div>
            Email: <span className="font-bold ">{session?.user?.email}</span>
          </div> */}
        </div>
      </div>
    );
  }
}
