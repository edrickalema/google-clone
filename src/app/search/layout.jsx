import React from "react";
import SearchHeader from "../components/SearchHeader";
import "../globals.css";

import { Lato } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const lato = Lato({ subsets: ["latin"], weight: "400" });
const layout = ({ children }) => {
  return (
    <div className={lato.className}>
      <SearchHeader />
      {children}
    </div>
  );
};

export default layout;
