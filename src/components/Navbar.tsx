import Link from "next/link";
import React from "react";
// import { NavLink } from "react-router-dom";
// import Logout from "./Logout";
// import { AuthContext } from "../store/AuthContext";
// import { getToken } from "../utils/getToken";

function Navbar(): React.JSX.Element {
  // const { userId, loggedUser } = useContext(AuthContext);
  // const token = getToken();

  // const nav = document.querySelector("#navigation");

  return (
    <>
      <nav className="flex justify-between items-center bg-[#4b9aaa] px-8 py-3">
        <Link className="text-white font-bold " href={"/"}>
          ma-HALLE
        </Link>
        <Link
          href="/login"
          className="bg-[#eccc6e] py-2 px-4 rounded-md text-[#4b9aaa] font-semibold"
        >
          Login
        </Link>
        {/* <Link className="bg-white p-2 " href={"/addTopic"}>
          Add Topic
        </Link> */}
      </nav>

      {/* <nav className="bg-white dark:bg-[#4b9aaa] fixed w-full z-20 top-0 left-0 border-b dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#eccc6e]">
              ma-HALLE
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-[#eccc6e]   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#814256da] dark:hover:bg-[#814256] dark:focus:ring-[#ca6786]"
            >
              Logout!
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li className="bg-[#eccc6e] rounded p-1 text-[#814256da] focus:ring-4]">
                <Link
                  href="/"
                  className="block rounded md:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="bg-[#eccc6e] rounded p-1 text-[#814256da]">
                <Link href="/login" className="block rounded md:bg-transparent">
                  Login
                </Link>
              </li>
              <li className="bg-[#eccc6e] rounded p-1 text-[#814256da]">
                <Link
                  href="/register"
                  className="block rounded md:bg-transparent"
                >
                  Register
                </Link>
              </li>
              <li className="bg-[#eccc6e] rounded p-1 text-[#814256da]">
                <Link
                  href="/user-profile"
                  className="block rounded md:bg-transparent"
                >
                  User profile
                </Link>
              </li>
              <li className="bg-[#eccc6e] rounded p-1 text-[#814256da]">
                <Link href="/blog" className="block rounded md:bg-transparent">
                  Blog
                </Link>
              </li>
              <li className="bg-[#eccc6e] rounded p-1 text-[#814256da]">
                <Link href="/shop" className="block rounded md:bg-transparent">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Navbar;
