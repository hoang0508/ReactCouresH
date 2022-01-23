import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      console.log("Fixed");
    };
    window.addEventListener("scroll", handleFixedHeader);
  }, []);
  return (
    <div>
      <div className="p-5 bg-black w-full"></div>
    </div>
  );
};

export default Header;
