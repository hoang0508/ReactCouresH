import { createContext, useContext, useState } from "react";

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
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a CountProvider");
  return context;
};

export { CountProvider, useCount };
