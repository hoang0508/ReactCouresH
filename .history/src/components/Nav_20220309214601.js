import React from "react";
import { Link, NavLink } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 3,
    to: "/profile",
    title: "Profile",
  },
];

const Nav = () => {
  return (
    <div className="p-5 bg-white shadow-md flex items-center justify-center gap-x-5">
      {ListLink &&
        ListLink.length > 0 &&
        ListLink.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            {item.title}
          </NavLink>
        ))}
      {/* <NavLink
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
      </NavLink> */}
    </div>
  );
};

export default Nav;
