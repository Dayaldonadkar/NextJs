"use client";

import React, { useState } from "react";
import Links from "../Link/Links";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="flex justify-center relative py-5">
      <div className="flex justify-between w-[90%] lg:w-4/5">
        <h1>Dayal</h1>
        <div className="hidden md:block">
          <Links />
        </div>
        <MenuIcon
          onClick={() => setShowNavbar(!showNavbar)}
          className="md:hidden"
        />
      </div>
      {showNavbar && (
        <div className="absolute top-5 bg-bgSoft w-[100%] flex justify-center">
          <Links />
        </div>
      )}
    </div>
  );
};

export default Navbar;
