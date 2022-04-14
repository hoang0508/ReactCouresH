import React, { useState } from "react";
import Counter from "./components/advanced-react/control-props/Counter";

const App = () => {
  const [count, setCount] = useState(5);
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };
  return (
    <>
      <Counter value={count} onChange={handleCountChange} />
    </>
  );
};

export default App;
