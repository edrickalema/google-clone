"use client";
import React from "react";

const Button = ({ btnText, action, disabled }) => {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className="bg-[#f8f9fa] text-center rounded-md text-sm text-gray-800 hover: ring-gray-200 focus:outline-none active:ring-gray-200 hover:shadow-md w-36 h-10 transition-shadow"
    >
      {btnText}
    </button>
  );
};

export default Button;
