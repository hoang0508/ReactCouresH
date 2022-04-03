import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToggle from "./useToggle";

const Accordion = ({ header, children }) => {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  return (
    <div className="mb-5">
      <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
        {header}
      </AccordionHeader>
      <AccordionContent show={show}>{children}</AccordionContent>
    </div>
  );
};

export default Accordion;
