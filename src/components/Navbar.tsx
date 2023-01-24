import React from "react";
import { Link } from "react-router-dom";

import { Btn } from "./Button";
import { IoIosPerson, IoIosCart } from "react-icons/io";

export function Navbar() {
  return (
    <div className="navbar bg-primary text-white p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Cart</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img src="https://svgshare.com/i/pkJ.svg" alt="" className="w-12" />
          <h1 className="text-3xl">Kicks.</h1>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="flex gap-8">
          <Link to="/profile/:id_user" className="flex items-center gap-2">
            <IoIosPerson className="text-2xl" />
            <a>Profile</a>
          </Link>
          <Link to="/cart" className="flex items-center gap-2">
            <IoIosCart className="text-2xl" />
            <a>Cart</a>
          </Link>
        </ul>
      </div>
      <div className="navbar-end lg:max-w-[120px]">
        <Link to="/login">
          <Btn label={"Login"} />
        </Link>
      </div>
    </div>
  );
}

export function NavbarForm() {
  return (
    <div className="navbar bg-primary text-white p-5">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2">
          <img src="public/kicks-icon.svg" alt="" className="w-12" />
          <h1 className="text-3xl">Kicks.</h1>
        </Link>
      </div>
    </div>
  );
}
