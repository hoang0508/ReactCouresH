import React, { useState } from "react";
// import Modal from "./components/Modal/Modal";

const CounterDisplay = () => {
  const count = 0;
  return <div>The count is: {count}</div>;
};

const Counter = () => {
  const setCount = () => {};
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 rounded-lg text-white font-semibold bg-purple-500"
    >
      Increment count
    </button>
  );
};
const App = () => {
  return <>
  <CounterDisplay />
    <Counter />
    <
  </>;
};

export default App;
