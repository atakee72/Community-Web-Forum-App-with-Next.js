"use client";

import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import UserInfo from "./UserInfo";

function Navbar(): React.JSX.Element {
  const { data: session } = useSession();
  // const userImage = session?.user?.image;

  return (
    <div className=" flex items-center fixed top-0 w-full z-10 rounded-s-3xl bg-[#814256] backdrop-blur-large shadow-md">
      <div>
        <Link href={"/"}>
          <Image
            className="rounded-s-3xl "
            src="/Beige_und_Grau.png"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
      </div>
      <nav className="w-full max-h-full">
        {session && (
          <ul className="flex justify-between items-center bg-[#814256] px-5 ">
            <li className="ornek">
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            {
              <li className="profileLink">
                <Link href="userProfile">
                  <span>Profile</span>
                </Link>
              </li>
            }
            <li className="ornek">
              <Link href="/kalendar">
                <span>Kalender</span>
              </Link>
            </li>
            <li className="ornek">
              <Link href="/blog">
                <span>Blog</span>
              </Link>
            </li>
            <li className="ornek">
              <Link href="/shop">
                <span>Shop</span>
              </Link>
            </li>
            {/* {typeof userImage === "string" && (
            <Image
              className="rounded-full relative top-96 left-52"
              src={userImage}
              height={60}
              width={60}
              alt="user image"
            />
          )} */}

            <div className="rounded-full relative top-96 left-52">
              <UserInfo />
            </div>

            <button
              onClick={() => signOut()}
              className=" font-mono border-t-4 border-[#4b9aaa] bg-red-500 hover:bg-red-400 text-[#4b9aaa] rounded-md px-5 py-2 shadow-inner hover:shadow-lg "
            >
              Logout
            </button>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
