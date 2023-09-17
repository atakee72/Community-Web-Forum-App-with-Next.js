"use client";

import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

function Navbar(): React.JSX.Element {
  return (
    <>
      <nav className="flex justify-between items-center bg-[#4b9aaa] px-8 py-3 shadow-md">
        <Link className="text-white font-bold text-xl " href={"/"}>
          <Image
            className="rounded-md "
            src="/Beige_und_Grau.png"
            width={150}
            height={150}
            alt="logo"
          />
        </Link>

        <button
          onClick={() => signOut()}
          className=" font-bold bg-red-400 hover:bg-red-500 text-[#4b9aaa] rounded-md px-6 py-2 mt-3 "
        >
          Logout
        </button>
      </nav>
    </>
  );
}

export default Navbar;
