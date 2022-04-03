import React from "react";
import { useAccordion } from "./accordion-context";

// Special component
const AccordionContent = ({ children }) => {
  const { show } = useAccordion();
  return (
    <>
      {show && (
        <div className="content p-4 border border-gray-200 rounded-md mt-2">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionContent;
