import React from "react";

// Special component
const AccordionHeader = ({ handleToggleShow, show }) => {
  return (
    <div>
      <div className="header" onClick={() => handleToggleShow()}>
        Accordion header <span>+</span>
      </div>
      {show && <div className="content">Accordion content</div>}
    </div>
  );
};

export default AccordionHeader;
