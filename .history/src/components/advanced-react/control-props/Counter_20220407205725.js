import React from "react";

const Counter = () => {
  return (
    <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
      <button className="decrement p-3 flex items-center justify-center bg-slate-200">
        -
      </button>
      <span className="flex-1 flex items-center justify-center text-3xl font-medium">
        0
      </span>
      <button className="increment p-3 flex items-center justify-center bg-slate-200">
        +
      </button>
    </div>
  );
};

export default Counter;
