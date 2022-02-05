import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const timeRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };
  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={() => handleStart()}>Start</button>
        <button onClick={() => handleStop()}>Stop</button>
      </div>
    </div>
  );
};

export default Stopwatch;
