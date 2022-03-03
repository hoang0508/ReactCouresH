import React from "react";
import useHover from "../../hooks/useHover";

const Tooltip = ({ text, children }) => {
  const { hovered, nodeRef } = useHover();
  console.log(hovered);
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="bg-black text-white p-3 rounded-lg w-full max-w-[200px] text-xs">
        {children}
      </div>
      <div className="" ref={nodeRef}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
