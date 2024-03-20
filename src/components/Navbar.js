import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-blue-600 p-4 text-white flex justify-between">
      <div className="flex-1 text-2xl font-semibold">Logo</div>
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
