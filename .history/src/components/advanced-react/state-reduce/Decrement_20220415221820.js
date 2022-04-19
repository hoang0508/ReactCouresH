import React from "react";
import useCounter from "./useCounter";

const Decrement = () => {
  const { handleDecrement } = useCounter();
  return (
    <button
      className="decrement p-3 flex items-center justify-center bg-slate-200"
      onClick={() => handleDecrement()}
    >
      -
    </button>
  );
};

export default Decrement;
