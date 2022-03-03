import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTool, setShowTool] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div
        className={`bg-black text-white p-3 rounded-lg w-full max-w-[200px] text-xs ${
          showTool ? "" : "opacity-0 invisible"
        }`}
      >
        {children}
      </div>
      <div
        className=""
        onMouseEnter={() => setShowTool(true)}
        onMouseLeave={() => setShowTool(false)}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
