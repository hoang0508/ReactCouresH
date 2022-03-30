import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="p-5 bg-white shadow-md flex items-center justify-center gap-x-5">
      <Link to={"/"}>Home</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"./profile"}>Profile</Link>
    </div>
  );
};

export default Nav;
