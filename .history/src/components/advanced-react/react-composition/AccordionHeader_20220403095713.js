import React from "react";

const AccordionHeader = ({ handleToggleShow }) => {
  return (
    <div>
      <div className="header" onClick={() => handleToggleShow()}>
        Accordion header <span>+</span>
      </div>
    </div>
  );
};

export default AccordionHeader;
