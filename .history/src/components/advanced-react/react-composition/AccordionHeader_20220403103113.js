import React from "react";

// Special component
const AccordionHeader = ({ handleToggleShow, show, children }) => {
  return (
    <div>
      <div
        className="header cursor-pointer p-4 border border-gray-400 rounded-md flex justify-between items-center"
        onClick={() => handleToggleShow()}
      >
        <span>{children}</span>
        {show ? <span>-</span> : <span>+</span>}
      </div>
    </div>
  );
};

export default AccordionHeader;
