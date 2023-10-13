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
    <div className=" flex items-center fixed top-0 w-full z-10 bg-[#814256] backdrop-blur-large shadow-md">
      <div>
        <Link href={"/"}>
          <Image
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
            className="rounded-s-3xl m-1 p-1"
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
              <Link href="/" className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-[#814256]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            {
              <li className="profileLink">
                <Link href="userProfile" className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#814256]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <span>Profil</span>
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
              className="btn btn-outline btn-error font-mono border-t-4 border-t-[#4b9aaa] text-[#4b9aaa] px-5"
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
