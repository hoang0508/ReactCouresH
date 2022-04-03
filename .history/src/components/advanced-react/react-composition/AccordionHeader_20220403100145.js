import React from "react";

// Special component
const AccordionHeader = ({ handleToggleShow, show }) => {
  return (
    <div>
      <div className="header" onClick={() => handleToggleShow()}>
        Accordion header
        {show ? <span>-</span> : <span>+</span>}
      </div>
    </div>
  );
};

export default AccordionHeader;
