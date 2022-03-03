import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import reactDom from "react-dom";
const Tooltip = ({ text, children }) => {
  const { hovered, nodeRef } = useHover();
  const [coord, setCoord] = useState({});
  return (
    <>
      {hovered && <TooltipContent>{children}</TooltipContent>}
      <div className="font-semibold" ref={nodeRef}>
        {text}
      </div>
    </>
  );
};

const TooltipContent = ({ children }) => {
  return reactDom.createPortal(
    <div className="bg-black text-white p-3 rounded-lg w-full max-w-[200px] text-xs">
      {children}
    </div>,
    document.querySelector("body")
  );
};

export default Tooltip;
