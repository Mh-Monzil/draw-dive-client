import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import UseAuth from "../hooks/UseAuth";
import Profile from "./Profile";

const Navbar = () => {
  const { user, loading } = UseAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const NavLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-medium relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1"
            : "px-1 text-lg font-medium hover:text-[#da5432] transition-all duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all_art_craft"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-medium relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1"
            : "px-1 text-lg font-medium hover:text-[#da5432] transition-all duration-300"
        }
      >
        All Art & Craft Item
      </NavLink>
      <NavLink
        to="/add-craft_item"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-medium relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1"
            : "px-1 text-lg font-medium hover:text-[#da5432] transition-all duration-300"
        }
      >
        Add Craft Item
      </NavLink>
      <NavLink
        to="/my_art_craft_list"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-lg font-medium relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1"
            : "px-1 text-lg font-medium hover:text-[#da5432] transition-all duration-300"
        }
      >
        My Art&Craft List
      </NavLink>
    </>
  );
  return (
    <div className="navbar md:py-4 sticky top-0 backdrop-blur-lg bg-[#FAF4F2]/80 z-40">
      <div className="navbar-start ">
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="dropdown z-50"
        >
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className={`${
              showDropdown ? "flex" : "hidden"
            } menu menu-sm dropdown-content mt-6 z-[1] shadow bg-base-100 rounded-box w-52 p-4 space-y-2`}
          >
            {NavLinks}
          </ul>
        </div>
        <Link to="/" className="">
          <p className="text-3xl font-bold">
            Draw<span className="text-[#E76F51]">Dive</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-7">{NavLinks}</ul>
      </div>
      <div className="navbar-end  font-semibold">
        {loading ? (
          <span className="loading loading-spinner text-error"></span>
        ) : !loading && user ? (
          <Profile user={user} />
        ) : !loading && !user ? (
          <div className="flex gap-3">
            <Link
              to="/register"
              className="px-5 py-2 rounded-lg -skew-x-12 bg-[#E76F51] hover:bg-[#da5432] hidden sm:flex text-white"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg -skew-x-12 bg-[#E76F51] hover:bg-[#da5432] text-white"
            >
              Login
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
