import { createContext, useContext } from "react";

const CountContext = createContext(undefined);
const CountProvider = ({ value, ...props }) => {
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
};

function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within CountProvider");
  return;
}
