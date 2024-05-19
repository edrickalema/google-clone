"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineCamera,
  AiOutlineSearch,
} from "react-icons/ai";

function SearchHeaderOptions() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("query");
  const handleSearch = (tab) => {
    router.push(
      `/search/${tab === "images" ? "image" : "web"}?query=${searchTerm}`
    );
  };
  return (
    <div className="flex space-x-2 px-10 select-none border-b text-sm lg:justify-start text-gray-700 w-full justify-center items-center">
      <div
        onClick={() => handleSearch("all")}
        className={`flex space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" ? "text-blue-600 border-blue-600" : ""
        } items-center`}
      >
        <AiOutlineSearch></AiOutlineSearch>
        <p className="text-md">All</p>
      </div>
      <div
        onClick={() => handleSearch("images")}
        className={`flex space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" ? "text-blue-600 border-blue-600" : ""
        } items-center`}
      >
        <AiOutlineCamera />
        <p className="text-md">Images</p>
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
