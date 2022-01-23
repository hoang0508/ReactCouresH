import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.querySelector("#header");
      if (window.scrollY > 100) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    };
    window.addEventListener("scroll", handleFixedHeader);
    // cleanup
    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return (
    <div>
      <div className="p-5 bg-black w-full" id="header"></div>
    </div>
  );
};

export default Header;
