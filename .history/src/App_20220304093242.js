import React from "react";
import { AuthProvider } from "./components/contexts/auth-context";
import { CountProvider, useCount } from "./components/contexts/countContext";
import { GellaryProvider } from "./components/contexts/gellary-context";
import PhotoList from "./components/GellaryPhotos/PhotoList";
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
      className="p-4 font-semibold text-white bg-purple-500 rounded-lg"
    >
      Increment count
    </button>
  );
};
const App = () => {
  return (
    <>
      {/* <div className="flex items-center justify-center gap-5 p-5">
      <CountProvider>
        <CounterDisplay />
        <Counter />
      </CountProvider>
    </div> */}
      <AuthProvider>
        <GellaryProvider>
          <HeaderMain />
          <PhotoList />
        </GellaryProvider>
      </AuthProvider>
    </>
  );
};

export default App;
