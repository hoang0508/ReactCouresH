import React from "react";

// Special component
const AccordionHeader = ({ handleToggleShow, show, children }) => {
  return (
    <div>
      <div className="header" onClick={() => handleToggleShow()}>
        {children}
        {show ? <span>-</span> : <span>+</span>}
      </div>
    </div>
  );
};

export default AccordionHeader;
