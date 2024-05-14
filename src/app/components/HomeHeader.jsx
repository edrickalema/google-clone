import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
const HomeHeader = () => {
  return (
    <div className="flex p-4 justify-end">
      <div className="flex space-x-4 text-sm items-center text-zinc-600">
        <Link className="hover:underline" href="https://gmail.google.com">
          Gmail
        </Link>
        <Link className="hover:underline" href="https://images.google.com">
          image
        </Link>
        <TbGridDots className="cursor-pointer text-4xl p-2 bg-transparent hover:bg-zinc-200  hover:rounded-full" />
        <button className="bg-blue-500 transition-shadow text-white px-4 py-2 rounded-md hover:brightness-105 hover:shadow-md font-medium">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
