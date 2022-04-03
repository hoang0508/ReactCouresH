import React from "react";

// Special component
const AccordionContent = ({ show, children }) => {
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
