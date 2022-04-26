import React, { useRef, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>{count}</div>
      <div>Render: {renderRef.current++}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default Count;
