import React, { createContext, useContext, useState } from "react";
// import Modal from "./components/Modal/Modal";

const CountContext = createContext();

const CountProvider = (props) => {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
};

const CounterDisplay = () => {
  const [count] = useContext(CountContext);
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
  return (
    <div className="p-5 flex justify-center items-center gap-5">
      <CountProvider>
        <CounterDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
};

export default App;
