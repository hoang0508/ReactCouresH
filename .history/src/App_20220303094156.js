import React, { createContext, useContext, useState } from "react";
// import Modal from "./components/Modal/Modal";

// Tạo biến sử dụng context
const CountContext = createContext();

// Hàm Provider context
const CountProvider = (props) => {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
};

// hook context
const useCount = () => {
  const context = useContext(CountContext);
  if (context === "undefined")
    throw new Error("useCount must be used within a CountProvider");
  return context;
};

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
    <div className="p-5 flex justify-center items-center gap-5">
      <CountProvider>
        <CounterDisplay />
      </CountProvider>
      <Counter />
    </div>
  );
};

export default App;
