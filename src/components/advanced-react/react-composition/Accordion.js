import React from "react";
import { AccordionProvider } from "./accordion-context";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
// import useToggle from "./useToggle";

const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <div className="mb-5">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
        {/* <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
        {header}
      </AccordionHeader>
      <AccordionContent show={show}>{children}</AccordionContent> */}
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
