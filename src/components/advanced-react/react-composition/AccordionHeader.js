import React from "react";
import { useAccordion } from "./accordion-context";

// Special component
const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();
  return (
    <>
      <div
        className="header cursor-pointer p-4 border border-gray-400 rounded-md flex justify-between items-center"
        onClick={() => handleToggleShow()}
      >
        <span>{children}</span>
        {show ? <span>-</span> : <span>+</span>}
      </div>
    </>
  );
};

export default AccordionHeader;
