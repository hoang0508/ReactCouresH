import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToggle from "./useToggle";

const Accordion = ({ header, children }) => {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  return (
    <>
      <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
        {header}
      </AccordionHeader>
      <AccordionContent show={show}>{children}</AccordionContent>
    </>
  );
};

export default Accordion;
