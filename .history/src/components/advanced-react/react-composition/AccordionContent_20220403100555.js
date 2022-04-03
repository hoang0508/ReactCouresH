import React from "react";

// Special component
const AccordionContent = ({ show }) => {
  return <div>{show && <div className="content">Accordion content</div>}</div>;
};

export default AccordionContent;
