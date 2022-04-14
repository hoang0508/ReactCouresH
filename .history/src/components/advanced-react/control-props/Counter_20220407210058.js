import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = () => {
  return (
    <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
      <Decrement />
      <span className="flex-1 flex items-center justify-center text-3xl font-medium">
        0
      </span>
      <Increment />
    </div>
  );
};

export default Counter;
