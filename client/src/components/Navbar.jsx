import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { MdMenu } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, isAdmin, isRecruiter } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    isRecruiter
      ? navigate("/recruiterDashboard")
      : isAdmin
      ? navigate("/adminDashboard")
      : navigate("/userDashboard");
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="p-3 bg-white flex justify-between items-center md:justify-around">
        <img src={logo} alt="logo" className="w-30" />

        {/* dekstop view */}

        <div className=" hidden md:flex gap-11 font-sans">
          <NavLink
            to={"/"}
            className="className= text-black hover:text-pink-500"
          >
            Home
          </NavLink>
          <NavLink
            to={"/jobs"}
            className="className= text-black hover:text-pink-500"
          >
            Find a Job
          </NavLink>
          <NavLink
            to={"/about"}
            className="className= text-black hover:text-pink-500"
          >
            About
          </NavLink>
          <NavLink
            to={"/contacts"}
            className="className= text-black hover:text-pink-500"
          >
            Contact
          </NavLink>
        </div>

        {user ? (
          <>
            <button
              className=" hidden py-2 border px-4 text-black hover:bg-pink-300 hover:text-white rounded-xl md:flex gap-2 justify-center items-center"
              onClick={handleClick}
            >
              {" "}
              <img
                src={user.photo}
                alt=""
                className="h-10 w-10 object-cover rounded-full"
              />
              <span>My Profile</span>
            </button>
            <button className=" md:hidden" onClick={handleMenuClick}>
              <MdMenu className="text-4xl text-[#F54677]" />
            </button>
          </>
        ) : (
          <>
            <div className=" hidden md:flex gap-6">
              <button
                className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
              <button
                className="bg-white text-pink-500 px-5 py-2 rounded-full hover:bg-pink-500 border border-pink-500 hover:text-white"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <MdMenu className=" text-3xl cursor-pointer md:hidden" />
            </div>
            <button className=" md:hidden" onClick={handleMenuClick}>
              <MdMenu className="text-4xl text-[#F54677]" />
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="absolute md:hidden top-18 left-0 right-0 border border-gray-200 p-4 w-full bg-white shadow-lg z-50">
          <ul className=" grid gap-4">
            <li onClick={handleMenuClick}>
              <NavLink to={"/"} className="text-black hover:text-[#F54677] ">
                Home
              </NavLink>
            </li>
            <li onClick={handleMenuClick}>
              <NavLink to={"/jobs"} className="text-black hover:text-[#F54677]">
                Find A Job
              </NavLink>
            </li>
            <li onClick={handleMenuClick}>
              <NavLink
                to={"/about"}
                className="text-black hover:text-[#F54677]"
              >
                About
              </NavLink>
            </li>
            <li onClick={handleMenuClick}>
              <NavLink
                to={"/contacts"}
                className="text-black hover:text-[#F54677]"
              >
                Contact
              </NavLink>
            </li>
            {!user && (
              <li onClick={handleMenuClick}>
                <NavLink
                  to={"/login"}
                  className="text-black hover:text-[#F54677]"
                >
                  Login / Register
                </NavLink>
              </li>
            )}

            {user && (
              <li onClick={handleMenuClick}>
                <button
                  className="py-2 border px-4 bg-[#F54677] text-white hover:bg-white hover:text-black rounded-xl flex gap-2 justify-center items-center w-full"
                  onClick={handleClick}
                >
                  My Profile
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
