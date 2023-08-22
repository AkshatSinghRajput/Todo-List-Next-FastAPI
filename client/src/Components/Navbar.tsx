"use client";

import { Navbar, Button } from "flowbite-react";
import React, { FC, useEffect } from "react"; // Import React from the correct package

const NavbarComponent: FC = () => {
  useEffect(() => {
    console.log("Started the Application");
  }, []);

  return (
    <Navbar fluid className=" border-gray-700 bg-gray-800">
      <Navbar.Brand href="/">
        <img
          alt="Logo Image"
          className="mr-3 h-6 sm:h-9"
          src="https://cdn-icons-png.flaticon.com/512/6052/6052937.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          TodoPilot
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;
