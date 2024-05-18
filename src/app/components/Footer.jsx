import React from "react";
import Country from "./Country";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full text-sm text-gray-500 bg-[#f2f2f2]">
      <div className=" border-b px-8 py-6">
        <Country />
      </div>

      <div className="flex flex-col sm:flex-row sm:space-y-0 justify-between py-3 px-8 space-x-7">
        <ul className="flex items-center space-x-6 ">
          <li className="hover:underline cursor-pointer"> About</li>
          <li className="hover:underline cursor-pointer"> Advertising</li>
          <li className="hover:underline cursor-pointer"> Business</li>
          <li className="hover:underline cursor-pointer"> How works</li>
          <li className="hover:underline cursor-pointer"> About</li>
        </ul>

        <ul className="flex items-center space-x-6">
          <li className="hover:underline cursor-pointer"> Privacy</li>
          <li className="hover:underline cursor-pointer"> Terms</li>
          <li className="hover:underline cursor-pointer">Settings</li>
          <li className="hover:underline cursor-pointer"> How works</li>
          <li className="hover:underline cursor-pointer"> About</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
