"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { CgSpinnerTwo } from "react-icons/cg";
const HomeSearch = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (formData) => {
    const searchTerm = formData.get("searchTerm");
    if (!searchTerm.trim()) return;
    router.push(`/search/web?query=${searchTerm}`);
  };

  const randomSearch = async (e) => {
    setLoading(true);
    const searchTerm = await fetch(
      "https://random-word.ryanrk.com/api/en/word/random"
    ).then((res) => res.json());
    setLoading(false);
    if (!searchTerm) return;
    router.push(`/search/web?query=${searchTerm[0]}`);
  };
  return (
    <div>
      <form
        action={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-sm focus-within:shadow-md  sm:max-w-xl translate-shadow lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          className="focus:outline-none flex-grow"
          type="text"
          name="searchTerm"
          id=""
        />
        <BiMicrophone className="text-lg" />
      </form>

      <div className="flex disabled:opacity-80 disabled:shadow-none flex-col space-y-3 sm:flex-row justify-center mt-8 sm:space-x-3 sm:space-y-0">
        <Button action={handleSubmit} btnText={"Google Search"} />
        <Button
          action={randomSearch}
          disabled={loading}
          btnText={loading ? "Loading ..." : "I am Feeling Lucky"}
        />
      </div>
    </div>
  );
};

export default HomeSearch;
