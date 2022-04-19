import React from "react";

const Decrement = ({ onClick, ...props }) => {
  return (
    <button
      className="decrement p-3 flex items-center justify-center bg-slate-200"
      onClick={onClick}
      {...props}
    >
      -
    </button>
  );
};

export default Decrement;
