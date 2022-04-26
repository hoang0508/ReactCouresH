import React, { useState } from "react";

const Dropdown = ({ placehoder = "Please select an option", children }) => {
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
        {placehoder}
      </div>
      {children}
    </div>
  );
};

export default Dropdown;