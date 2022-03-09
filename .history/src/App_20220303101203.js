import React from "react";
import { CountProvider, useCount } from "./components/contexts/countContext";
import HeaderMain from "./components/HeaderMain";
// import Modal from "./components/Modal/Modal";

const CounterDisplay = () => {
  const [count] = useCount();
  return <div>The count is: {count}</div>;
};

const Counter = () => {
  const [, setCount] = useCount();
  // const setCount = () => {};
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
  return (
    <>
      {/* <div className="p-5 flex justify-center items-center gap-5">
      <CountProvider>
        <CounterDisplay />
        <Counter />
      </CountProvider>
    </div> */}
      <HeaderMain />
    </>
  );
};

export default App;
