import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef(null);
  const handleShow = () => {
    setShowDropdown(!showDropdown);
  };
  useEffect(() => {
    const handleClickDropdown = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        // console.log("click outside dropdown");
        setShowDropdown(false);
    };
    document.addEventListener("click", handleClickDropdown);
    return () => {
      document.removeEventListener("click", handleClickDropdown);
    };
  }, []);
  return (
    <>
      <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
        <div
          onClick={() => handleShow()}
          className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        >
          Selected
        </div>
        {showDropdown && (
          <div className="border border-gray-200 absolute top-full left-0 w-full bg-white">
            <div className="p-5">Javascript</div>
            <div className="p-5">ReactJs</div>
            <div className="p-5">VueJs</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
