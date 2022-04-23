import React, { useState } from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({
  placehoder = "Please select an option",
  children,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleToggleShow = () => {
    setShow(!show);
  };
  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full max-w-[300px]">
        <div
          className="placehoder flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer"
          onClick={() => handleToggleShow()}
        >
          {placehoder}
        </div>
        {show && children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
