import React from "react";

// Special component
const AccordionHeader = ({ handleToggleShow, show, children }) => {
  return (
    <div>
      <div className="header" onClick={() => handleToggleShow()}>
        <span>{children}</span>
        {show ? <span>-</span> : <span>+</span>}
      </div>
    </div>
  );
};

export default AccordionHeader;
