import React from "react";
import LogoTransparent from "../LogoTransparent.jpeg";

function Navbar() {
  return (
    <div className="navbar bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={LogoTransparent}
          alt="LogoTransparent"
          className="h-20 w-auto mr-4" // Adjust height as needed and set width to auto to maintain aspect ratio
          style={{ maxWidth: '200px' }} // Adjust max-width to fit your design
        />
        <h1 className="text-2xl font-semibold">Masjid Tarbiyah</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex space-x-4">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                console.log("Sign Up link clicked!");
              }}
              className="text-white px-4 py-2 rounded-full border border-gray-300 hover:border-white"
            >
              Sign Up
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                console.log("Log In link clicked!");
              }}
              className="text-blue-500 px-4 py-2 rounded-full border border-white bg-white hover:bg-gray-300 hover:border-gray-300"
            >
              Log In
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
