import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const NavBar = () => {
  const [theme, setTheme] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {theme ? (
              <button
                onClick={() => setTheme(!theme)}
                className="btn btn-active btn-ghost"
              >
                White
              </button>
            ) : (
              <button
                onClick={() => setTheme(!theme)}
                className="btn btn-active"
              >
                Dark
              </button>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <button
            onClick={handleLogOut}
            className="text-lg font-medium text-red-400 mr-2"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className=" text-lg font-medium text-green-400 mr-2">
                Login
              </button>
            </Link>
          </>
        )}
        <>
          <div
            className="tooltip  tooltip-bottom"
            data-tip={user ? user?.displayName : "Please Login"}
          >
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt=""
                referrerPolicy="no-referrer"
                className="rounded-full w-8 h-8"
              ></img>
            ) : (
              <FaUser></FaUser>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default NavBar;
