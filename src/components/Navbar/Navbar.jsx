import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navmenu = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/team">Team</Link>
      </li>
      <li>
        <Link href="/service">Service</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/testimonials">Testimonials</Link>
      </li>
    </>
  );
  return (
    <div className="p-0 md:p-5">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
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
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navmenu}
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost text-xl font-extrabold">
            Design
            <span className="text-red-600">AGENCY</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{navmenu}</ul>
        </div>
        <div className="navbar-end">
          <div className="space-x-2 hidden md:block">
            <button className="btn btn-outline btn-success font-bold">
              Login
            </button>
            <button className="btn btn-success text-white">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
