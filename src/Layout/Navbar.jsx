import { AiFillCaretDown } from "react-icons/ai";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from "../Assets/avatar.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menulist = (
    <>
      <Link to="/login" className="px-8 py-2 text-center w-40 rounded-md">
        login
      </Link>

      <Link
        to="/signup"
        className="px-8 py-2 text-center bg-blue-500 text-white w-40 rounded-md"
      >
        Register
      </Link>
    </>
  );
  return (
    <>
      <div className="w-full shadow">
        <div className="px-8 m-auto">
          <nav className="flex justify-between items-center p-4">

            <div className="lg:text-3xl font-black text-blue-600 text-xl">
              <Link to="/">system Name</Link>
            </div>
            <div className="text-base font-bold ">
              <div className="flex justify-center items-center gap-2">
                {" "}
                <img src={Avatar} alt="" />
                <p>User Name</p>
                <AiFillCaretDown />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
