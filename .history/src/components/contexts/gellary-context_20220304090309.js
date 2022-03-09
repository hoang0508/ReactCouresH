import { createContext, useContext } from "react";
const GellaryContext = createContext();
const GellaryProvider = (props) => {
  return <GellaryContext.Provider {...props}></GellaryContext.Provider>;
};

function useGellary() {
  const context = useContext(GellaryContext);
  if (typeof context === "undefined") {
    throw new Error("useCount must be used within a GellaryProvider");
  }
  return context;
}

export { GellaryProvider, useGellary };
