import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  // useRef ,  xét giá trị nul, sau đó lưu giá trị current
  const timeRef = useRef(null);
  // đặt biến count , useState
  const [count, setCount] = useState(0);

  // button start
  const handleStart = () => {
    // nếu có giá trị dừng
    if (timeRef.current) return;
    // Ngược lại tiếp tục chạy , gán update giá trị
    timeRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };

  // button stop
  const handleStop = () => {
    // clear interval
    clearInterval(timeRef.current);

    // xét lại giá trị null
    timeRef.current = null;
  };

  // useEffect
  useEffect(() => {
    return () => clearInterval(timeRef.current);
  }, []);
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
