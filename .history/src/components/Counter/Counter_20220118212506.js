import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };
  useEffect(() => {
    console.log(`count: ${count}`);
  });
  return (
    <>
      {/* <div>Increment {count}</div> */}
      <div className="p-5 flex gap-x-4 items-center">
        <span className="text-lg font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="inline-block p-3 bg-green-400 text-white"
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
