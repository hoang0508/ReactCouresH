import React, { useState } from "react";

const Dropdown = ({ options, placehoder = "Please select an option" }) => {
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
      {show && (
        <div className="options border border-gray-300 rounded">
          <input
            type="text"
            placeholder="Search your job..."
            className="p-4 outline-none"
          />
          {options &&
            options.length > 0 &&
            options.map((item) => (
              <div className="option-item p-4 cursor-pointer" key={item.title}>
                {item.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
