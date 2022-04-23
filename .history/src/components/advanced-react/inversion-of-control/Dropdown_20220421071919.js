import React, { useState } from "react";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const handleToggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="placehoder flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer"
        onClick={() => handleToggleShow()}
      >
        Please select an option
      </div>
      {show && (
        <div className="options border border-gray-300 rounded">
          <div className="option-item p-4 cursor-pointer">Frontend</div>
          <div className="option-item p-4 cursor-pointer">Backen</div>
          <div className="option-item p-4 cursor-pointer">Fullstack</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
