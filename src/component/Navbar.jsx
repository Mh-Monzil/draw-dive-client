import { Link, NavLink } from "react-router-dom";
import logo from '../assets/dd-logo.png';
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const TOP_OFFSET = 80;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    const NavLinks = (
        <>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-lg font-semibold relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1"
                : "px-1 text-lg font-semibold hover:text-[#da5432] transition-all duration-300"
            }
          >
            Home
          </NavLink>
          {(
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-lg font-semibold relative after:content-['']  after:w-full after:h-[3px] after:absolute after:left-0 after:-bottom-1 after:bg-[#E76F51]  px-1"
                  : "px-1 text-lg font-semibold hover:text-[#da5432] transition-all duration-300"
              }
            >
              Login
            </NavLink>
          )}
        </>
      );
  return (
    <div className="navbar  rounded-t-3xl md:py-4">
      <div className="navbar-start ">
        <div className="dropdown z-50">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 p-4 space-y-2"
          >
            {NavLinks}
          </ul>
        </div>
        <Link to='/' className="">
            {/* <img src={logo} className="w-12 h-12" /> */}
            <p className="text-3xl font-bold">Draw<span className="text-[#E76F51]">Dive</span></p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-7">
            {NavLinks}
        </ul>
      </div>
      <div className="navbar-end flex gap-3 font-semibold">
        <Link to='/register' className="px-5 py-2 rounded-lg -skew-x-12 bg-[#E76F51] hover:bg-[#da5432] hidden sm:flex text-white">Register</Link>
        <Link to='/login' className="px-5 py-2 rounded-lg -skew-x-12 bg-[#E76F51] hover:bg-[#da5432] text-white">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
