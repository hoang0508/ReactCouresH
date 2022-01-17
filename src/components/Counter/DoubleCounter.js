import React, { useState } from "react";

const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const hanldeDoubleNumber = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  const hanldeDoubleNumber1 = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={hanldeDoubleNumber}>Double Counter</button>
      <span className="count">{count}</span>
      <button onClick={hanldeDoubleNumber1}>Double Counter1</button>
    </div>
  );
};

export default DoubleCounter;
