import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const timeRef = useRef(null);
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}s</div>
      <div>Start</div>
      <div>Stop</div>
    </div>
  );
};

export default Stopwatch;
