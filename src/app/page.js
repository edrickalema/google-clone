import React from "react";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";
import HomeSearch from "./components/HomeSearch";
import ImageLogo from "./components/ImageLogo";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <div className="mt-24 flex justify-center items-center flex-col">
        <ImageLogo />
        <HomeSearch />
      </div>
    </div>
  );
};

export default HomePage;
