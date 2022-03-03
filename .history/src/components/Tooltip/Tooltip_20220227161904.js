import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import reactDom from "react-dom";
const Tooltip = ({ text, children }) => {
  const { hovered, nodeRef } = useHover();
  const [coord, setCoord] = useState({});
  const handleHover = (e) => {
    setCoord(e.target.getBoundingClientRect());
  };
  return (
    <>
      {hovered && <TooltipContent coord={coord}>{children}</TooltipContent>}
      <div
        className="font-semibold"
        ref={nodeRef}
        onMouseOver={(e) => handleHover(e)}
      >
        {text}
      </div>
    </>
  );
};

const TooltipContent = ({ children, coord }) => {
  console.log(
    "🚀 ~ file: Tooltip.js ~ line 25 ~ TooltipContent ~ coord",
    coord
  );
  return reactDom.createPortal(
    <div className="bg-black text-white p-3 rounded-lg w-full max-w-[200px] text-xs">
      {children}
    </div>,
    document.querySelector("body")
  );
};

export default Tooltip;
