// "use client";

// import { signOut } from "next-auth/react";

export default function () {
  return (
    <div className=" grid text-center">
      <div className=" shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my6 ">
        <div>
          Current User: <span className="font-bold ">Johnny</span>
        </div>
        <div>
          Email: <span className="font-bold ">john@gmail.com</span>
        </div>
        {/* <button
          onClick={() => signOut()}
          className=" font-bold bg-red-400 hover:bg-red-500 text-white px-6 py-2 mt-3 "
        >
          Logout
        </button> */}
      </div>
    </div>
  );
}
