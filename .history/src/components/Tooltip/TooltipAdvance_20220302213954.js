import React, { useState } from "react";

const TooltipAdvance = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoord] = useState({
    top: 0,
    left: 0,
  });
  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {};
  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </div>
  );
};

export default TooltipAdvance;
