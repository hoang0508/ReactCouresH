import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="p-5 bg-white shadow-md flex items-center justify-center gap-x-5">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
        to={"/blog"}
      >
        Blog
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-green-500" : "")}
        to={"./profile"}
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Nav;
