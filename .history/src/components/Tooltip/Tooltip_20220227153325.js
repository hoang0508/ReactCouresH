import React from "react";
import useHover from "../../hooks/useHover";

const Tooltip = ({ text, children }) => {
  const { hovered, nodeRef } = useHover();
  return (
    <div className="flex justify-center items-center">
      <div className="bg-black text-white p-3 rounded-lg w-full max-w-[200px] text-xs">
        {children}
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Tooltip;
