import React from "react";

const Dropdown = () => {
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div className="placehoder flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer">
        Please select an option
      </div>
      <div className="options border-gray-300 rounded">
        <div className="option-item p-4">Frontend</div>
      </div>
    </div>
  );
};

export default Dropdown;
