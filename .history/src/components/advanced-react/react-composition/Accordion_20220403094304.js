import React, { useState } from "react";
import useToggle from "./useToggle";

const Accordion = () => {
  const { value: show, handleToggleValue: handleToggleShow } = useToggle();
  return (
    <div>
      <div>
        <div className="header" onClick={() => handleToggleShow()}>
          Accordion header <span>+</span>
        </div>
      </div>
      {show && <div className="content">Accordion content</div>}
    </div>
  );
};

export default Accordion;
