import React, { useState } from "react";
import Count from "./Count";
import { CountProvider } from "./count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = ({ count = 0, handleDecrement, handleIncrement }) => {
  return (
    <CountProvider value={{ count }}>
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
        <Decrement onClick={handleDecrement} />
        <Count />
        <Increment onClick={handleIncrement} />
      </div>
    </CountProvider>
  );
};

export default Counter;
