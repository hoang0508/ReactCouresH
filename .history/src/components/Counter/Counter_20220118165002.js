import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  return (
    <>
      {/* <div>Increment {count}</div> */}
      <div className="p-5 flex gap-x-4">
        <span>{count}</span>
        <button>Increment</button>
      </div>
    </>
  );
};

export default Counter;
