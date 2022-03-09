import { createContext, useContext } from "react";
const GellaryContext = createContext();

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1646330025310-d82b9019adeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1646298106330-5f897cc1474c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1646329682652-341d2533651a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1646323391074-2076bef3d5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1646294614647-56333cafc133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    isLike: false,
  },
  {
    id: 6,
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
