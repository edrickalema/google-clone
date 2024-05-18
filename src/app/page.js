import React from "react";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";
import HomeSearch from "./components/HomeSearch";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <div className="mt-24 flex justify-center items-center flex-col">
        <Image
          height={200}
          priority
          alt="google logo"
          width={300}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />
        <HomeSearch />
      </div>
    </div>
  );
};

export default HomePage;
