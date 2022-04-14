import React from "react";
import Count from "./Count";
import { CountProvider } from "./count-context";
import Decrement from "./Decrement";
import Increment from "./Increment";

const Counter = () => {
  return (
    <CountProvider value={{ cout: 10 }}>
      <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
        <Decrement />
        <Count />
        <Increment />
      </div>
    </CountProvider>
  );
};

export default Counter;
