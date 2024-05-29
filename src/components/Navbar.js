import React, { useState } from "react";
import { MdHome, MdAccountCircle, MdClose } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { CiStreamOn } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Navigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` navbar ${isOpen ? "active" : ""} `}>
      <div className="nav-ctrl">
        <div className="icon">
          {isOpen ? (
            <MdClose onClick={toggleMenu} />
          ) : (
            <FaBars onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div className={` nav-items ${isOpen ? "active" : ""} `}>
        <NavLink to="/">
          <span className="icon">
            <MdHome />
            <p>Home</p>
          </span>
        </NavLink>
        <NavLink to="/stream">
          <span className="icon">
            <CiStreamOn />
            <p>Stream</p>
          </span>
        </NavLink>
        <NavLink to="/news">
          <span className="icon">
            <FaNewspaper />
            <p>News</p>
          </span>
        </NavLink>
        <span className="icon">
          <VscAccount />
          <p>Account</p>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
