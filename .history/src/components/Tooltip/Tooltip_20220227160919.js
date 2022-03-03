import React, { useState } from "react";
import useHover from "../../hooks/useHover";

const Tooltip = ({ text, children }) => {
  const { hovered, nodeRef } = useHover();
  const [coord, setCoord] = useState({});
  return (
    <div className="flex flex-col justify-center items-center p-10">
      {hovered && <TooltipContent>{children}</TooltipContent>}
      <div className="font-semibold" ref={nodeRef}>
        {text}
      </div>
    </div>
  );
};

const TooltipContent = ({ children }) => {
  <div className="bg-black text-white p-3 rounded-lg w-full max-w-[200px] text-xs">
    {children}
  </div>;
};

export default Tooltip;
