import { createContext, useContext } from "react";
const GellaryContext = createContext();

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1646330025310-d82b9019adeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
];
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
