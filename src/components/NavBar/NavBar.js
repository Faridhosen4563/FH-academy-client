import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar bg-slate-500 md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Course</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl text-white">
          <img src={logo} className="h-10 w-10 mr-2" alt="" />
          FH Academy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Course</Link>
          </li>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Get started</Link>
      </div>
    </div>
  );
};

export default NavBar;
