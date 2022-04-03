import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToggle from "./useToggle";

const Accordion = ({ header }) => {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  return (
    <div>
      <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
        {header}
      </AccordionHeader>
      <AccordionContent show={show} />
    </div>
  );
};

export default Accordion;
