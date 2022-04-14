import React from "react";

const Counter = () => {
  return (
    <div className="flex w-full max-w-[200px] mx-auto my-5">
      <button className="decrement">-</button>
      <span>0</span>
      <button className="increment">+</button>
    </div>
  );
};

export default Counter;
