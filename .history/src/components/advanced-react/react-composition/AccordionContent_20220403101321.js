import React from "react";

// Special component
const AccordionContent = ({ show, children }) => {
  return <div>{show && <div className="content">{children}</div>}</div>;
};

export default AccordionContent;
