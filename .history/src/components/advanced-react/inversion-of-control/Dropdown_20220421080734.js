import React, { useState } from "react";

const Dropdown = ({
  options,
  placehoder = "Please select an option",
  inputPlaholder,
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
      {show && (
        <div className="options border border-gray-300 rounded">
          <div className="p-2">
            <input
              type="text"
              placeholder={inputPlaholder}
              className="p-4 outline-none w-full border border-gray-200 rounded"
              onChange={onChane}
            />
          </div>
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
