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
      <span>{count}</span>
      <button>Increment</button>
    </>
  );
};

export default Counter;
