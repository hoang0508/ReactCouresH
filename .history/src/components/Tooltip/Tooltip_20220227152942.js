import React from "react";
import useHover from "../../hooks/useHover";

const Tooltip = ({ text, children }) => {
  const { hovered, nodeRef } = useHover();
  return (
    <div>
      <div className="">{children}</div>
    </div>
  );
};

export default Tooltip;
