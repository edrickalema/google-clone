import Link from "next/link";
import React from "react";
import ImageLogo from "./ImageLogo";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import Button from "./Button";
const SearchHeader = () => {
  return (
    <div className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="/">
          <Image
            height={40}
            priority
            alt="google logo"
            width={120}
            style={{ width: "auto" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          />
        </Link>

        <div className="flex-1 flex">
          <SearchBox />
        </div>
        <div className=" hidden md:inline-flex space-x-2">
          <TbGridDots className="bg-transparent text-4xl hover:bg-gray-200 cursor-pointer p-2 rounded-full" />
          <RiSettings3Line className="bg-transparent text-4xl hover:bg-gray-200 cursor-pointer p-2 rounded-full" />
        </div>
        <button className="bg-blue-500 transition-shadow text-white px-4 py-2 ml-2 rounded-md hover:brightness-105 hover:shadow-md font-medium">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
