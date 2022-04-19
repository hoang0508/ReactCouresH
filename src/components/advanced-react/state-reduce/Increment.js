import React from "react";

const Increment = ({ onClick, ...props }) => {
  return (
    <button
      className="increment p-3 flex items-center justify-center bg-slate-200"
      onClick={onClick}
      {...props}
    >
      +
    </button>
  );
};

export default Increment;
