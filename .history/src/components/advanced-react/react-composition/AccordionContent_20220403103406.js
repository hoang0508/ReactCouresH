import React from "react";

// Special component
const AccordionContent = ({ show, children }) => {
  return <>{show && <div className="content">{children}</div>}</>;
};

export default AccordionContent;
