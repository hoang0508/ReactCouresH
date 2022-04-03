import React, { useState } from "react";

const Accordion = () => {
  const [show, setShow] = useState(false);
  const handleToggleShow = () => {
    setShow((prev) => !prev);
  };
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
