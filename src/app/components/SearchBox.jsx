"use client";
import React, { useState } from "react";

import { BiMicrophone } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("query");

  const [term, setTerm] = useState(searchTerm || "");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    // searchParam.set("query", term);
    // setTerm("");
    router.push(`/search/web?query=${term}`);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex border max-w-3xl border-gray-200 items-center rounded-full px-6 py-3  ml-10 shadow-xl mr-5 flex-grow "
      >
        <input
          value={term}
          className="w-full focus:outline-none"
          type="search"
          name="search"
          onChange={(e) => setTerm(e.target.value)}
        />
        <RxCross2
          onClick={() => setTerm(" ")}
          className="text-2xl text-gray-500 cursor-pointer"
        />
        <BiMicrophone className="hidden sm:inline-flex mx-2 border-l-2 pl-4 mr-3 border-gray-500 text-blue-500 text-4xl" />
        <AiOutlineSearch
          onClick={handleSubmit}
          className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default SearchBox;
