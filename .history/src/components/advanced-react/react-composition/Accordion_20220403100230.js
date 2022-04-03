import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import useToggle from "./useToggle";

const Accordion = () => {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  return (
    <div>
      <AccordionHeader show={show} handleToggleShow={handleToggleShow} />
      <AccordionContent show={show} />
    </div>
  );
};

export default Accordion;
