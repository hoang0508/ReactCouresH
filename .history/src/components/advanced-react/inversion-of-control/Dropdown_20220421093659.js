import React, { useState } from "react";

const Dropdown = ({
  options,
  placehoder = "Please select an option",
  onChane = () => {},
}) => {
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
    </div>
  );
};

export default Dropdown;
